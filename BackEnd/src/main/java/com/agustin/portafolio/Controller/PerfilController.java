package com.agustin.portafolio.Controller;

import com.agustin.portafolio.Model.Perfil;
import com.agustin.portafolio.Interface.IPerfilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/perfil")
@CrossOrigin(origins = "https://argprogramaportafolio.web.app")
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
    @PutMapping ("/editar/nombre/{idPerfil}")
    public Perfil editNombre (@PathVariable Long idPerfil,
                              @RequestParam ("nombre") String nuevoNombre) {
        Perfil perfil = interPerfil.findPerfil(idPerfil);
        perfil.setNombre(nuevoNombre);
        interPerfil.savePerfil(perfil);
        return perfil;
    }
    @PutMapping ("/editar/acerca/{idPerfil}")
    public Perfil editAcerca (@PathVariable Long idPerfil,
                              @RequestParam ("acercaDe") String nuevoAcerca) {
        Perfil perfil = interPerfil.findPerfil(idPerfil);
        perfil.setAcercaDe(nuevoAcerca);
        interPerfil.savePerfil(perfil);
        return perfil;
    }
    @PutMapping ("/editar/foto/{idPerfil}")
    public Perfil editFoto (@PathVariable Long idPerfil,
                              @RequestParam ("fotoPerfil") String nuevoFotoPerfil) {
        Perfil perfil = interPerfil.findPerfil(idPerfil);
        perfil.setFotoPerfil(nuevoFotoPerfil);
        interPerfil.savePerfil(perfil);
        return perfil;
    }
    @PutMapping ("/editar/fondo/{idPerfil}")
    public Perfil editFondo (@PathVariable Long idPerfil,
                              @RequestParam ("fotoFondo") String nuevoFotoFondo) {
        Perfil perfil = interPerfil.findPerfil(idPerfil);
        perfil.setFotoFondo(nuevoFotoFondo);
        interPerfil.savePerfil(perfil);
        return perfil;
    }
}
