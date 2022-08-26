package com.agustin.portafolio.Model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter @Setter
@Entity
public class Perfil {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String nombre;
    private String fotoPerfil;
    private String fotoFondo;
    private String acercaDe;
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "id")
    private List<Educacion> educacionList;
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "id")
    private List<Experiencia> experienciaList;
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "id")
    private List<Proyectos> proyectosList;
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "id")
    private List<Habilidades> habilidadesList;
}
