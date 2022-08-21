package com.agustin.portafolio.Service;

import com.agustin.portafolio.Model.Perfil;

import java.util.List;

public interface IPerfilService {
    public List<Perfil> getPerfil ();
    public void savePerfil (Perfil perfil);
    public void deletePerfil (Long id);
    public Perfil findPerfil (Long id);
}
