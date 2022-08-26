package com.agustin.portafolio.Controller;

import com.agustin.portafolio.Interface.IHabilidadesService;
import com.agustin.portafolio.Model.Habilidades;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/habilidades")
@CrossOrigin(origins = "http://localhost:4200")
public class HabilidadesController {
    @Autowired
    private IHabilidadesService interHabilidades;
    @GetMapping("/todos")
    public List<Habilidades> getHabilidades() { return interHabilidades.getHabilidades();}
    @RequestMapping("/obtener/{id}")
    public Habilidades findHabilidades(@PathVariable Long id) { return interHabilidades.findHabilidades(id);}
    @PostMapping("/crear")
    public String createHabilidades(@RequestBody Habilidades habilidades) {
        interHabilidades.saveHabilidades(habilidades);
        return "Habilidad creada";
    }
    @DeleteMapping("/borrar/{id}")
    public String deleteHabilidades (@PathVariable Long id){
        if(!interHabilidades.existsHabilidades(id)) return "No existe esa habilidad";
        interHabilidades.deleteHabilidades(id);
        return "Habilidad borrada";
    }
}
