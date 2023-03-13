package com.silchar.medicare.controller;

import java.util.List;

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


import com.silchar.medicare.entity.Appoint;
import com.silchar.medicare.mail.sendEmailThread;
import com.silchar.medicare.repository.AppointmentRepository;
import com.silchar.medicare.repository.ViewRepostory1;

import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;



@RestController
@RequestMapping("/")
@CrossOrigin
public class Appointment {
    
    @Autowired
	private AppointmentRepository appointmentRepository;
    
   
    
    @Autowired
	private ViewRepostory1 viewRepostory1;
    

	@GetMapping(path="/loadappointmentbyusername/{username}")
    public List<Appoint> GetUsers1 (@PathVariable String username) {
		return appointmentRepository.findByUsername(username);
		
    } 
	
	@GetMapping(path="/loadappointmentbytype/{type}")
    public List<Appoint> GetUsers11 (@PathVariable String type) {
		return viewRepostory1.findByUsername(type);
	}
	
    
	@GetMapping(path="/loadappointment")
    public List<Appoint> GetUsers () {
		return appointmentRepository.findAll(Sort.by(Direction.ASC, "dateofapp"));
    } 
	
    @PostMapping("/appointment")
    public int PostUser(@RequestBody Appoint apponit) {    	
 
    	String username = apponit.getUsername();
    	String fanme = apponit.getFname();
    	String mob = apponit.getEmail();
    	String add = apponit.getAddress();    
    	String city = apponit.getCity();    
    	String type = apponit.getType();    
    	String timeof = apponit.getTimeofapp();    
    	String dateof = apponit.getDateofapp();     
    	String doctoename = apponit.getDoctorname();     
    	String status = apponit.getStatus();   

    	Appoint n = new Appoint();
        n.setUsername(username);
        n.setFname(fanme);
        n.setEmail(mob);
        n.setAddress(add);
        n.setCity(city);
        n.setType(type);
        n.setTimeofapp(timeof);
        n.setDateofapp(dateof);
        n.setDoctorname(doctoename);
        n.setStatus(status);
        Appoint result = appointmentRepository.save(n); 
        
        
		if(result != null) {
		System.out.print("Record inserted");
		return 0;
		
		} 
        
        return 1;
//      return userRepository.save(user);
    }
    
    @PutMapping("/edit")
    public int GetUser(@RequestBody Appoint apponit) {
//        return userRepository.findById(id).orElse(null);
    	
    	Appoint result = appointmentRepository.save(apponit); 
		
		if(result != null) {
		System.out.print("Record updated"); 
		return 0;
		
		} 
		
		return 1;
    }
    
    @DeleteMapping("/delappointment/{id}")
    public int DeleteUser(@PathVariable int id) { 	

    	appointmentRepository.deleteById(id);
        return 0;
    }
    
    @PutMapping("/approved")
    public int PostUser1(@RequestBody Appoint apponit) {    	
 
    	Appoint result = appointmentRepository.save(apponit); 
    	
    	int id = apponit.getId();
    	String email = apponit.getEmail();    
    	String timeof = apponit.getTimeofapp();    
    	String dateof = apponit.getDateofapp();    	
    	String doctoename = apponit.getDoctorname();

		System.out.print(id+"\n"); 
		System.out.print(email+ "\n"); 
		System.out.print(timeof+"\n"); 
		System.out.print(dateof+"\n"); 
		System.out.print(doctoename+"\n"); 
    	
		sendEmailThread sendEmail = new sendEmailThread(email, "Medicare Hospital", "Your appointment is booked by the Dr. '"+doctoename+"' On date '"+dateof+"' at '"+timeof+"' ,Your patient ID is '"+id+"'");
        Thread t = new Thread(sendEmail);
        t.start();
		
		if(result != null) {
		System.out.print("Appointment approved");
		return 0;
		
		} 
		
		return 1;
    }
}

