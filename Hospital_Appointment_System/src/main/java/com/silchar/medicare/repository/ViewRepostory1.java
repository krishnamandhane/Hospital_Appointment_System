package com.silchar.medicare.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.silchar.medicare.entity.Appoint;

public interface ViewRepostory1 extends JpaRepository<Appoint,Integer> {
	
	@Override 
	List<Appoint> findAll();
	
    @Query("SELECT e from Appoint e where e.type =:typeDoc ")       // using @query
    java.util.List<Appoint> findByUsername(@Param("typeDoc") String username);

}
