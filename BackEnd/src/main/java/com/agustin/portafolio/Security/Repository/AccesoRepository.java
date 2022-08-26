package com.agustin.portafolio.Security.Repository;

import com.agustin.portafolio.Security.Model.Acceso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccesoRepository extends JpaRepository <Acceso, Long>{
    Optional<Acceso> findByUsuario(String usuario);
    boolean existsByUsuario(String usuario);
}