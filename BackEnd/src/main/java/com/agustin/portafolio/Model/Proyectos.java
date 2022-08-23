package com.agustin.portafolio.Model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Getter @Setter
@Entity
public class Proyectos {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String proyecto;
    private String descripcion;
    private Short anoCreacion;
    private String fotoProyecto;
}
