package com.ecommerce.backend.controllers;

import com.ecommerce.backend.models.User;
import com.ecommerce.backend.services.AuthService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody User user) {

        if (authService.userExists(user.getUsername())) {
            return ResponseEntity.badRequest().body("Username is taken!");
        }

        if (authService.emailExists(user.getEmail())) {
            return ResponseEntity.badRequest().body("Email is taken!");
        }
        authService.saveUser(user);

        return ResponseEntity.ok().body("User registered successfully!");

    }
}
