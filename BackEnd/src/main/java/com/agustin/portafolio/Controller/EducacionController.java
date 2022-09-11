package com.agustin.portafolio.Controller;

import com.agustin.portafolio.Interface.IEducacionService;
import com.agustin.portafolio.Model.Educacion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/educacion")
@CrossOrigin(origins = "http://localhost:4200")
public class EducacionController {
    @Autowired
    private IEducacionService interEducacion;
    @GetMapping ("/todos")
    public List<Educacion> getEducacion() { return interEducacion.getEducacion();}
    @RequestMapping("/obtener/{id}")
    public Educacion findEducacion(@PathVariable Long id) { return interEducacion.findEducacion(id); }
    @PostMapping ("/crear")
    public String createEducacion(@RequestBody Educacion educacion) {
        interEducacion.saveEducacion(educacion);
        return "Educacion creado";
    }
    @DeleteMapping("/borrar/{id}")
    public String deleteEducacion (@PathVariable Long id){
        if(!interEducacion.existsEducacion(id)) return "No existe esa educacion";
        else interEducacion.deleteEducacion(id);
        return "Educacion borrado";
    }
    @PutMapping ("/edita/{id}")
    public Educacion editEducacion (@PathVariable Long id,
                                @RequestParam ("titulo") String nuevoTitulo,
                                @RequestParam ("institucion") String nuevaInstitucion,
                                @RequestParam ("anoIngreso") Short nuevoIngreso,
                                @RequestParam ("anoEgreso") Short nuevoEgreso) {
        Educacion educacion = interEducacion.findEducacion(id);
        educacion.setTitulo(nuevoTitulo);
        educacion.setInstitucion(nuevaInstitucion);
        educacion.setAnoIngreso(nuevoIngreso);
        educacion.setAnoEgreso(nuevoEgreso);
        interEducacion.saveEducacion(educacion);
        return educacion;
    }
}
