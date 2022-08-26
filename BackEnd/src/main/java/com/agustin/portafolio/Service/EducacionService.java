package com.agustin.portafolio.Service;

import com.agustin.portafolio.Interface.IEducacionService;
import com.agustin.portafolio.Model.Educacion;
import com.agustin.portafolio.Repository.EducacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class EducacionService implements IEducacionService {
    @Autowired
    private EducacionRepository educacionRepository;
    @Override
    public List<Educacion> getEducacion(){
        List<Educacion> listaEducacion = educacionRepository.findAll();
        return listaEducacion;
    }
    @Override
    public void saveEducacion(Educacion educacion) { educacionRepository.save(educacion); }
    @Override
    public void deleteEducacion(Long id) { educacionRepository.deleteById(id);}
    @Override
    public Educacion findEducacion(Long id){
        Educacion educacion = educacionRepository.findById(id).orElse(null);
        return educacion;
    }
    @Override
    public boolean existsEducacion(Long id) {
        return educacionRepository.existsById(id);
    }
}
