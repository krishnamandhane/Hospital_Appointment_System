package com.silchar.medicare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.silchar.medicare.entity.Receptionist;

@Repository
public interface ReceptionistRepository extends JpaRepository<Receptionist,Integer> {
	@Override 
	java.util.List<Receptionist> findAll();
}