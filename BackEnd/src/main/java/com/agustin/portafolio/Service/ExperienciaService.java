package com.agustin.portafolio.Service;

import com.agustin.portafolio.Model.Experiencia;
import com.agustin.portafolio.Repository.ExperienciaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExperienciaService implements IExperienciaService{
    @Autowired
    private ExperienciaRepository experienciaRepository;
    @Override
    public List<Experiencia> getExperiencia(){
        List<Experiencia> listaExperiencia = experienciaRepository.findAll();
        return listaExperiencia;

    }
    @Override
    public void saveExperiencia(Experiencia experiencia) { experienciaRepository.save(experiencia);}
    @Override
    public void deleteExperiencia(Long id){ experienciaRepository.deleteById(id);}
    @Override
    public Experiencia findExperiencia(Long id){
        Experiencia experiencia = experienciaRepository.findById(id).orElse(null);
        return experiencia;
    }
}
