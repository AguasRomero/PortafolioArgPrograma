package com.agustin.portafolio.Service;

import com.agustin.portafolio.Model.Perfil;
import com.agustin.portafolio.Model.Proyectos;

import java.util.List;

public interface IProyectosService {
    public List<Proyectos> getProyectos ();
    public void saveProyectos (Proyectos proyectos);
    public void deleteProyectos (Long id);
    public Proyectos findProyectos (Long id);
}
