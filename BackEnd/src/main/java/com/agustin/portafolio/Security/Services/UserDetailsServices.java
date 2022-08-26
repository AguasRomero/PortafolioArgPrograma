package com.agustin.portafolio.Security.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServices implements UserDetailsService {
    @Autowired
    AccesoService accesoService;

    @Override
    public UserDetails loadUserByUsername(String usuario) throws UsernameNotFoundException {
        return null;
    }
}
