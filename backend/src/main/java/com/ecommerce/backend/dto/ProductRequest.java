package com.ecommerce.backend.dto;

import lombok.Data;

@Data
public class ProductRequest {
    private String title;
    private String description;
    private String imageUrl;
    private double price;
    private Long categoryId;
}
