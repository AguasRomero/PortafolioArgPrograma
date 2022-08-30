package com.agustin.portafolio;

import com.agustin.portafolio.Model.Acceso;
import com.agustin.portafolio.Repository.AccesoRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.annotation.Rollback;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
public class UserRepositoryTest {
    @Autowired
    AccesoRepository repository;
    @Test
    public void testCrearUsuario(){
        PasswordEncoder passwordEncoder=new BCryptPasswordEncoder();
        String rawPassword = "agustin96";
        String encodePassword=passwordEncoder.encode(rawPassword);
        Acceso newUser=new Acceso("agustin",encodePassword);
        Acceso savedUser=repository.save(newUser);
        assertThat(savedUser).isNotNull();
        assertThat(savedUser.getId()).isGreaterThan(0);
    }
}
