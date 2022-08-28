package com.agustin.portafolio.Security.Auth;

public class AuthResponse {
    private String usuario;
    private String accessToken;

    public AuthResponse() {
    }

    public AuthResponse(String usuario, String accessToken) {
        this.usuario = usuario;
        this.accessToken = accessToken;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }
}
