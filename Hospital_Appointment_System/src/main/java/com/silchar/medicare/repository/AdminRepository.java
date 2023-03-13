package com.silchar.medicare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.silchar.medicare.entity.Admin;


public interface AdminRepository extends JpaRepository<Admin,Integer> {
	
}