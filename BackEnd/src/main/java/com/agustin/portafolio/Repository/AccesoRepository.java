package com.agustin.portafolio.Repository;

import com.agustin.portafolio.Model.Acceso;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface AccesoRepository extends JpaRepository<Acceso, Long> {
    Optional<Acceso> findByUsuario(String usuario);
}
