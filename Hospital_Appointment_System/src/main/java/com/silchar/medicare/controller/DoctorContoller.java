package com.silchar.medicare.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import com.silchar.medicare.Entity.Doctor;
import com.silchar.medicare.Repository.DoctorRepository;
import com.silchar.medicare.validate.DoctorValidate;


@RestController
@RequestMapping("/")
@CrossOrigin
public class DoctorContoller {
	
	@Autowired
    private DoctorRepository doctorRepository;
    
	@GetMapping(path="/loaddoctor")
    public List<Doctor> GetUsers () {
		return doctorRepository.findAll();
    } 
	
	@GetMapping(path="/doctorlogin1/{username}")
    public Doctor GetUsers1 (@PathVariable String username) {
		return doctorRepository.findByUsername(username);
		
    } 
	
    @GetMapping("/updatebyiddoctor/{id}")
    public Doctor GetUser(@PathVariable Integer id) {
        return doctorRepository.findById(id).orElse(null);
    }
    
    @DeleteMapping("/deldoctor/{id}")
    public int DeleteUser(@PathVariable int id) { 

    	doctorRepository.deleteById(id);
        return 0;
    } 
    
    @PostMapping("/doctor")
    public int PostUser(@RequestBody Doctor doctor) {
    	

    	String username = doctor.getUsername();
    	String fname = doctor.getFname();
    	String type = doctor.getType();
    	String email = doctor.getEmail();
    	String mobile = doctor.getMobile();    
    	String pass = doctor.getPassword();   	

//		System.out.print(id+ "\n");
    	
    	Doctor n = new Doctor();
        n.setUsername(username);
        n.setFname(fname);
        n.setType(type);
        n.setEmail(email);
        n.setMobile(mobile);
        n.setPassword(pass);
        Doctor result = doctorRepository.save(n); 
        
        
		if(result != null) {
		System.out.print("Record inserted");
		return 0;
		
		} 
        
        return 1;
//      return userRepository.save(user);
    }
    
    @PostMapping("/doctorlogin")
    public int PostUser1(@RequestBody Doctor doctor) { 
    	
	    DoctorValidate ddao=new DoctorValidate();
		String username = doctor.getUsername();   
		String pass = doctor.getPassword(); 
		boolean checkingLogin=ddao.validate(username, pass);
		System.out.print(username+ "\n");	
		if(checkingLogin) {
		    return 0;
		}
		return 1;
	
	    }
    
    @PutMapping("/editdoctor")
    public int GetUser(@RequestBody Doctor doctor) {
//        return userRepository.findById(id).orElse(null);
    	
    	Doctor result = doctorRepository.save(doctor); 
		
		if(result != null) {
		System.out.print("Record updated");
		return 0;
		
		} 
		
		return 1;
    }

}
