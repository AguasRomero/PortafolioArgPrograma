package com.agustin.portafolio.Interface;

import com.agustin.portafolio.Model.Perfil;

import java.util.List;

public interface IPerfilService {
    public List<Perfil> getPerfil ();
    public void savePerfil (Perfil perfil);
    public void deletePerfil (Long idPerfil);
    public Perfil findPerfil (Long idPerfil);
    public boolean existsPerfil (Long idPerfil);
}
