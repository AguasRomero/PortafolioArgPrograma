package com.agustin.portafolio.Security.jwt;

import com.agustin.portafolio.Security.Services.UserDetailsServices;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtFilter extends OncePerRequestFilter {
    private final static Logger logger = LoggerFactory.getLogger(JwtProvider.class);
    @Autowired
    JwtProvider jwtProvider;
    @Autowired
    UserDetailsServices userDetailsServices;
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws IOException, ServletException{
        try{
            String token = getToken(request);
            if(token !=null&& jwtProvider.validateToken(token)){
                String usuario = jwtProvider.getUsuarioFromToken(token);
                UserDetails userDetails = userDetailsServices.loadUserByUsername(usuario);
                UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                SecurityContextHolder.getContext().setAuthentication(auth);
            }
        }catch (Exception e){
            logger.error("Fallo el método doFilterInternal");
        }
        filterChain.doFilter(request, response);
    }
    private String getToken(HttpServletRequest request){
        String header = request.getHeader("Authorization");
        if(header!=null&&header.startsWith("Bearer"))
            return header.replace("Bearer", "");
        return null;
    }
}
