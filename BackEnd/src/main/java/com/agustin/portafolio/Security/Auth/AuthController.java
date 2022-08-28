package com.agustin.portafolio.Security.Auth;
import com.agustin.portafolio.Model.Acceso;
import com.agustin.portafolio.Security.jwt.JwtProvider;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtProvider jwtProvider;
    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody AuthRequest request){
       try{Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
               request.getUsuario(), request.getContrasena())
       );
           Acceso acceso = (Acceso) authentication.getPrincipal();
           String accessToken = jwtProvider.generateToken(acceso);
           AuthResponse response = new AuthResponse(acceso.getUsuario(), accessToken);

           return ResponseEntity.ok().body(response);
    }catch (BadCredentialsException exception){
           return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
       }
    }
}
