package com.ecommerce.backend.controllers;

import com.ecommerce.backend.models.User;
import com.ecommerce.backend.repositories.UserRepository;
import com.ecommerce.backend.security.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class SignUpController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody User user) {
        // Check if username already exists
        if (userRepository.existsByUsername(user.getUsername())) {
            return ResponseEntity.badRequest().body("Username is already taken.");
        }

        // Encrypt password before saving
        user.setPassword(user.getPassword());

        // Save the new user to the database
        userRepository.save(user);

        return ResponseEntity.ok("User registered successfully!");
    }
}
