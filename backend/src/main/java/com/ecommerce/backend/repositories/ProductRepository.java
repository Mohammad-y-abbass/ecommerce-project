package com.ecommerce.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.backend.models.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
