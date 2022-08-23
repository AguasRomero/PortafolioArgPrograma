package com.agustin.portafolio.Repository;

import com.agustin.portafolio.Model.Habilidades;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HabilidadesRepository extends JpaRepository <Habilidades, Long> {
}
