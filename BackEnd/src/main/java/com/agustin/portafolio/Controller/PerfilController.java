package com.agustin.portafolio.Controller;

import com.agustin.portafolio.Model.Perfil;
import com.agustin.portafolio.Service.IPerfilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PerfilController {
    @Autowired
    private IPerfilService interPerfil;
    @GetMapping ("/perfil/traer")
    public List<Perfil> getPerfil() {
        return interPerfil.getPerfil();
    }
    @PostMapping ("/perfil/crear")
    public String createPerfil(@RequestBody Perfil perfil) {
        interPerfil.savePerfil(perfil);
        return "Perfil creado";
    }
    @DeleteMapping ("/perfil/borrar/{id}")
    public String deletePerfil (@PathVariable Long id){
        interPerfil.deletePerfil(id);
        return "Perfil borrado";
    }
    @PutMapping ("perfil/editar/{id}")
    public Perfil editPerfil (@PathVariable Long id, @RequestParam ("nombre") String nuevoNombre) {
        Perfil perfil = interPerfil.findPerfil(id);
        perfil.setNombre(nuevoNombre);
        interPerfil.savePerfil(perfil);
        return perfil;
    }
}
