package com.agustin.portafolio.Service;

import com.agustin.portafolio.Interface.IPerfilService;
import com.agustin.portafolio.Model.Perfil;
import com.agustin.portafolio.Repository.PerfilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class PerfilService implements IPerfilService {
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
    @Override
    public boolean existsPerfil(Long id) {
        return perfilRepository.existsById(id);
    }
}
