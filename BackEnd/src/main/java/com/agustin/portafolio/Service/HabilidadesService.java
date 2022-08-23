package com.agustin.portafolio.Service;

import com.agustin.portafolio.Model.Habilidades;
import com.agustin.portafolio.Repository.HabilidadesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HabilidadesService implements IHabilidadesService{
    @Autowired
    private HabilidadesRepository habilidadesRepository;
    @Override
    public List<Habilidades> getHabilidades(){
        List<Habilidades> listaHabilidades = habilidadesRepository.findAll();
        return listaHabilidades;
    }
    @Override
    public void saveHabilidades(Habilidades habilidades) { habilidadesRepository.save(habilidades); }
    @Override
    public void deleteHabilidades(Long id) { habilidadesRepository.deleteById(id);}
    @Override
    public Habilidades findHabilidades(Long id){
        Habilidades habilidades = habilidadesRepository.findById(id).orElse(null);
        return habilidades;
    }
}
