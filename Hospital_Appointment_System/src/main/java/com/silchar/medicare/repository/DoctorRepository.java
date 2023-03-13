package com.silchar.medicare.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.silchar.medicare.Entity.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor,Integer> {
	
	@Override 
	java.util.List<Doctor> findAll();
	
	      
	Doctor findByUsername(String username);
	
}
