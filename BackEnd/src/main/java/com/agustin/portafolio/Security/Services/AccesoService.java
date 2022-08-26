package com.agustin.portafolio.Security.Services;

import com.agustin.portafolio.Security.Model.Acceso;
import com.agustin.portafolio.Security.Repository.AccesoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class AccesoService {
    @Autowired
    AccesoRepository accesoRepository;
    public Optional<Acceso> getByUsuario(String usuario){
        return accesoRepository.findByUsuario(usuario);
    }
    public boolean existsByUsuario(String usuario) { return accesoRepository.existsByUsuario(usuario);}
}
