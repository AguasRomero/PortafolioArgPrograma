package com.agustin.portafolio.Security.jwt;
import com.agustin.portafolio.Model.Acceso;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;
import org.springframework.web.filter.OncePerRequestFilter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtFilter extends OncePerRequestFilter {
    @Autowired
    private JwtProvider jwtProvider;
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
        throws ServletException, IOException{
        if(!hasAuthorizationBearer(request)){
            filterChain.doFilter(request, response);
            return;
        }
        String token = getAccessToken(request);
        if(!jwtProvider.validateToken(token)){
            filterChain.doFilter(request, response);
            return;
        }
        setAuthenticationContext(token, request);
        filterChain.doFilter(request, response);
    }
    private boolean hasAuthorizationBearer(HttpServletRequest request){
        String header = request.getHeader("Authorization");
        return !ObjectUtils.isEmpty(header) && header.startsWith("Bearer");
    }
    private String getAccessToken(HttpServletRequest request){
        String header = request.getHeader("Authorization");
        String token = header.split("")[1].trim();
        return token;
    }
    private void setAuthenticationContext(String token, HttpServletRequest request){
        UserDetails userDetails = getUserDetails(token);
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails, null, null);
        authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }
    private UserDetails getUserDetails(String token){
        Acceso acceso = new Acceso();
        String[] jwtSubject = jwtProvider.getSubject(token).split(",");
        acceso.setId(Long.parseLong(jwtSubject[0]));
        acceso.setUsuario(jwtSubject[1]);
        return acceso;

    }
}
