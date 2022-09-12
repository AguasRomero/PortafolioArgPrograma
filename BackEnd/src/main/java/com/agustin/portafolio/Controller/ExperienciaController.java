package com.agustin.portafolio.Controller;

import com.agustin.portafolio.Interface.IExperienciaService;
import com.agustin.portafolio.Model.Educacion;
import com.agustin.portafolio.Model.Experiencia;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/experiencia")
@CrossOrigin(origins = "http://localhost:4200")
public class ExperienciaController {
    @Autowired
    private IExperienciaService interExperiencia;
    @GetMapping ("/todos")
    public List<Experiencia> getExperiencia() { return interExperiencia.getExperiencia();}
    @RequestMapping("/obtener/{id}")
    public Experiencia findExperiencia(@PathVariable Long id) { return interExperiencia.findExperiencia(id);}
    @PostMapping("/crear")
    public String createExperiencia(@RequestBody Experiencia experiencia) {
        interExperiencia.saveExperiencia(experiencia);
        return "Experiencia creada";
    }
    @DeleteMapping("/borrar/{id}")
    public String deleteExperiencia (@PathVariable Long id){
        if(!interExperiencia.existsExperiencia(id)) return "No existe esa experiencia";
        interExperiencia.deleteExperiencia(id);
        return "Experiencia borrada";
    }
    @PutMapping ("/editar/{id}")
    public Experiencia editExperiencia (@PathVariable Long id,
                                        @RequestBody Experiencia nuevaExperiencia) {
        Experiencia experiencia = interExperiencia.findExperiencia(id);
        experiencia = nuevaExperiencia;
        interExperiencia.saveExperiencia(experiencia);
        return experiencia;
    }
}
