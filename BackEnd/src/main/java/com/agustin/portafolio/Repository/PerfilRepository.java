package com.agustin.portafolio.Repository;

import com.agustin.portafolio.Model.Perfil;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PerfilRepository extends JpaRepository <Perfil, Long> {
}
