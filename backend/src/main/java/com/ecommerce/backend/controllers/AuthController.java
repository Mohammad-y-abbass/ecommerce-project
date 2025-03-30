package com.ecommerce.backend.controllers;

import com.ecommerce.backend.dto.AuthResponse;
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
    public ResponseEntity<AuthResponse> signUp(@RequestBody User user) {
        if (authService.userExists(user.getUsername())) {
            return ResponseEntity.badRequest().body(new AuthResponse(false, "Username is taken!"));
        }

        if (authService.emailExists(user.getEmail())) {
            return ResponseEntity.badRequest().body(new AuthResponse(false, "Email is taken!"));
        }

        authService.saveUser(user);
        return ResponseEntity.ok(new AuthResponse(true, "User registered successfully!"));
    }

    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> signIn(@RequestBody User user) {
        try {
            User authenticatedUser = authService.authenticateUser(user.getUsername(), user.getPassword());

            return ResponseEntity.ok(new AuthResponse(true, "User logged in successfully!"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new AuthResponse(false, e.getMessage()));
        }
    }

}
