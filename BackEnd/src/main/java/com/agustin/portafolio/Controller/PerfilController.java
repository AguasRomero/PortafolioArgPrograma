package com.agustin.portafolio.Controller;

import com.agustin.portafolio.Model.Perfil;
import com.agustin.portafolio.Service.IPerfilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/perfil")
@CrossOrigin(origins = "http://localhost:4200")
public class PerfilController {
    @Autowired
    private IPerfilService interPerfil;
    @GetMapping ("/todos")
    public List<Perfil> getPerfil() {
        return interPerfil.getPerfil();
    }
    @RequestMapping("/obtener/{id}")
    public Perfil findPerfil(@PathVariable Long id){
        return interPerfil.findPerfil(id);
    }
    @PostMapping ("/crear")
    public String createPerfil(@RequestBody Perfil perfil) {
        interPerfil.savePerfil(perfil);
        return "Perfil creado";
    }
    @DeleteMapping ("/borrar/{id}")
    public String deletePerfil (@PathVariable Long id){
        interPerfil.deletePerfil(id);
        return "Perfil borrado";
    }
    @PutMapping ("/editar/{id}")
    public Perfil editPerfil (@PathVariable Long id, @RequestParam ("nombre") String nuevoNombre) {
        Perfil perfil = interPerfil.findPerfil(id);
        perfil.setNombre(nuevoNombre);
        interPerfil.savePerfil(perfil);
        return perfil;
    }
}
