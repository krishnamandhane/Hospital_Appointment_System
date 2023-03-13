package com.silchar.medicare.controller;

import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.silchar.medicare.entity.Receptionist;
import com.silchar.medicare.repository.ReceptionistRepository;
import com.silchar.medicare.validate.ReceptionistValidate;

@ComponentScan(basePackages = {"com.met.medicare.Controller"})
@RestController
@RequestMapping("/")
@CrossOrigin
public class ReceptionistController {
	
	@Autowired
    private ReceptionistRepository receptionistRepository;
    
	@GetMapping(path="/loadreceptionist")
    public List<Receptionist> GetUsers () {
		return receptionistRepository.findAll();
    } 
	
    @GetMapping("/updatebyidreceptionist/{id}")
    public Receptionist GetUser(@PathVariable Integer id) {
        return receptionistRepository.findById(id).orElse(null);
    }
    
    @PostMapping("/receptionist")
    public int PostUser(@RequestBody Receptionist receptionist) {
    	

    	String username = receptionist.getUsername();
    	String email = receptionist.getEmail();
    	String mobile = receptionist.getMobile();    
    	String pass = receptionist.getPassword();  	

    	Receptionist n = new Receptionist();
        n.setUsername(username);
        n.setEmail(email);
        n.setMobile(mobile);
        n.setPassword(pass);
        Receptionist result = receptionistRepository.save(n); 
        
        
		if(result != null) {
		System.out.print("Record inserted");
		return 0;
		
		} 
        
        return 1;
    }
    
    @PostMapping("/receptionistlogin")
    public int PostUser1(@RequestBody Receptionist receptionist) { 
    	
    	ReceptionistValidate rdao=new ReceptionistValidate();
		String username = receptionist.getUsername();   
		String pass = receptionist.getPassword(); 
		boolean checkingLogin=rdao.validate(username, pass);
		System.out.print(username+ "\n");	
		if(checkingLogin) {
		    return 0;
		}
		return 1;
	
	    }
    
    @PutMapping("/editreceptionist")
    public int GetUser(@RequestBody Receptionist receptionist) {
//        return userRepository.findById(id).orElse(null);
    	
    	Receptionist result = receptionistRepository.save(receptionist); 
		
		if(result != null) {
		System.out.print("Record updated");
		return 0;
		
		} 
		
		return 1;
    }
    
    @DeleteMapping("/delreceptionist/{id}")
    public int DeleteUser(@PathVariable int id) { 	

    	receptionistRepository.deleteById(id);
        return 0;
    } 

}
