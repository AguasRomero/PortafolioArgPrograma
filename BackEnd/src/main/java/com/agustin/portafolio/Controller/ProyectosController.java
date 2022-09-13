package com.agustin.portafolio.Controller;

import com.agustin.portafolio.Interface.IProyectosService;
import com.agustin.portafolio.Model.Proyectos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/proyectos")
@CrossOrigin(origins = "http://localhost:4200")
public class ProyectosController {
    @Autowired
    private IProyectosService interProyectos;
    @GetMapping ("/todos")
    public List<Proyectos> getProyectos() { return interProyectos.getProyectos();}
    @RequestMapping("/obtener/{id}")
    public Proyectos findProyectos(@PathVariable Long id) { return interProyectos.findProyectos(id);}
    @PostMapping("/crear")
    public String createProyectos(@RequestBody Proyectos proyectos) {
        interProyectos.saveProyectos(proyectos);
        return "Proyecto creado";
    }
    @DeleteMapping("/borrar/{id}")
    public String deleteProyectos (@PathVariable Long id){
        if(!interProyectos.existsProyectos(id)) return "No existe ese proyecto";
        interProyectos.deleteProyectos(id);
        return "Proyecto borrado";
    }
    @PutMapping ("/editar/{id}")
    public Proyectos editProyecto (@PathVariable Long id,
                                   @RequestBody Proyectos nuevoProyecto) {
        Proyectos proyecto = interProyectos.findProyectos(id);
        proyecto = nuevoProyecto;
        interProyectos.saveProyectos(proyecto);
        return proyecto;
    }
}
