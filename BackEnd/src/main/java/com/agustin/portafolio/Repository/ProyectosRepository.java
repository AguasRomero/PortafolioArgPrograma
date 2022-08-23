package com.agustin.portafolio.Repository;

import com.agustin.portafolio.Model.Proyectos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProyectosRepository extends JpaRepository <Proyectos, Long> {
}
