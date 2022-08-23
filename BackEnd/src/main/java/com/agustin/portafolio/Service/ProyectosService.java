package com.agustin.portafolio.Service;

import com.agustin.portafolio.Model.Proyectos;
import com.agustin.portafolio.Repository.ProyectosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProyectosService implements IProyectosService{
    @Autowired
    private ProyectosRepository proyectosRepository;
    @Override
    public List<Proyectos> getProyectos(){
        List<Proyectos> listaProyectos = proyectosRepository.findAll();
        return listaProyectos;
    }
    @Override
    public void saveProyectos(Proyectos proyectos) { proyectosRepository.save(proyectos);}
    @Override
    public void deleteProyectos(Long id) { proyectosRepository.deleteById(id);}
    @Override
    public Proyectos findProyectos(Long id){
        Proyectos proyectos = proyectosRepository.findById(id).orElse(null);
        return proyectos;
    }
}
