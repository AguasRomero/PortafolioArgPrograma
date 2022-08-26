package com.agustin.portafolio.Interface;

import com.agustin.portafolio.Model.Experiencia;

import java.util.List;

public interface IExperienciaService {
    public List<Experiencia> getExperiencia ();
    public void saveExperiencia (Experiencia experiencia);
    public void deleteExperiencia (Long id);
    public Experiencia findExperiencia (Long id);
    public boolean existsExperiencia (Long id);
}
