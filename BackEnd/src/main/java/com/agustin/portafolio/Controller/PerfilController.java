package com.agustin.portafolio.Controller;

import com.agustin.portafolio.Model.Perfil;
import com.agustin.portafolio.Interface.IPerfilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    @RequestMapping("/obtener/{idPerfil}")
    public Perfil findPerfil(@PathVariable Long idPerfil){
        return interPerfil.findPerfil(idPerfil);
    }
    @PostMapping ("/crear")
    public String createPerfil(@RequestBody Perfil perfil) {
        interPerfil.savePerfil(perfil);
        return "Perfil creado";
    }
    @DeleteMapping ("/borrar/{idPerfil}")
    public String deletePerfil (@PathVariable Long idPerfil){
        if(!interPerfil.existsPerfil(idPerfil)) return "No existe ese perfil";
        interPerfil.deletePerfil(idPerfil);
        return "Perfil borrado";
    }
    @PutMapping ("/editar/{idPerfil}")
    public Perfil editPerfil (@PathVariable Long idPerfil,
                              @RequestParam ("nombre") String nuevoNombre,
                              @RequestParam ("fotoPerfil") String nuevoPerfil,
                              @RequestParam ("fotoFondo") String nuevoFondo,
                              @RequestParam ("acercaDe") String nuevoAcerca) {
        Perfil perfil = interPerfil.findPerfil(idPerfil);
        perfil.setNombre(nuevoNombre);
        perfil.setFotoPerfil(nuevoPerfil);
        perfil.setFotoFondo(nuevoFondo);
        perfil.setAcercaDe(nuevoAcerca);
        interPerfil.savePerfil(perfil);
        return perfil;
    }
}
