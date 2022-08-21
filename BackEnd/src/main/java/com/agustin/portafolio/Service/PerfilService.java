package com.agustin.portafolio.Service;

import com.agustin.portafolio.Model.Perfil;
import com.agustin.portafolio.Repository.PerfilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PerfilService implements IPerfilService{
    @Autowired
    private PerfilRepository perfilRepository;
    @Override
    public List<Perfil> getPerfil(){
        List<Perfil> listaPerfil = perfilRepository.findAll();
        return listaPerfil;
    }
    @Override
    public void savePerfil(Perfil perfil){
        perfilRepository.save(perfil);
    }
    @Override
    public void deletePerfil(Long id){
        perfilRepository.deleteById(id);
    }
    @Override
    public Perfil findPerfil(Long id){
        Perfil perfil = perfilRepository.findById(id).orElse(null);
        return perfil;
    }
}
