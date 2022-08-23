package com.agustin.portafolio.Service;

import com.agustin.portafolio.Model.Habilidades;

import java.util.List;

public interface IHabilidadesService {
    public List<Habilidades> getHabilidades ();
    public void saveHabilidades (Habilidades habilidades);
    public void deleteHabilidades (Long id);
    public Habilidades findHabilidades (Long id);
}
