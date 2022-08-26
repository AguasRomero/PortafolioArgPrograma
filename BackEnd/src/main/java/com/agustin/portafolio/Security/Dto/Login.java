package com.agustin.portafolio.Security.Dto;

import com.sun.istack.NotNull;

public class Login {
    @NotNull
    private String usuario;
    @NotNull
    private String password;

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
