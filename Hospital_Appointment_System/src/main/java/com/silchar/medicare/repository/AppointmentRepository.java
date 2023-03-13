package com.silchar.medicare.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.silchar.medicare.entity.Appoint;

public interface AppointmentRepository extends JpaRepository<Appoint,Integer>{

	@Override 
	List<Appoint> findAll();
	
	List<Appoint> findByUsername(String username);

}
