package com.ecommerce.backend.models;

import org.springframework.security.core.GrantedAuthority;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "roles")
@Data
public class Role implements GrantedAuthority {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Override
    public String getAuthority() {
        return "ROLE_" + name;
    }
}
