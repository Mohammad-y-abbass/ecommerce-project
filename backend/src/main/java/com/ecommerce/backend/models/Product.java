package com.ecommerce.backend.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "products")
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description;

    private String imageUrl;

    private double price;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
}
