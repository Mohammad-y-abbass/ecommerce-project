package com.ecommerce.backend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.backend.models.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

    public List<Order> findByUserId(Long userId);
}
