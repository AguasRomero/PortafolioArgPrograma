package com.agustin.portafolio.repositorio;

import com.agustin.portafolio.perfil.perfil;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface perfilRepositorio extends JpaRepository <perfil, Long> {

}
