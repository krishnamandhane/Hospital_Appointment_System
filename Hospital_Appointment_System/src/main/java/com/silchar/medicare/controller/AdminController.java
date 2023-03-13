package com.silchar.medicare.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.silchar.medicare.entity.Admin;
import com.silchar.medicare.entity.Appoint;
import com.silchar.medicare.repository.AdminRepository;
import com.silchar.medicare.repository.AppointmentRepository;

@RestController
@RequestMapping("/")
@CrossOrigin
public class AdminController {

	@Autowired
    private AdminRepository adminRepository;
   
    @Autowired
	private AppointmentRepository appointmentRepository;

    @PostMapping("/adminlogin")
    public int PostUser1(@RequestBody Admin admin) { 

    	String username = admin.getUsername();   
    	String pass = admin.getPassword(); 
    	
    	if(username.equals("admin") && pass.equals("admin")) {
            return 0;
    	}
        return 1;


    }
    
    @GetMapping("/updatebyid/{id}")
    public Appoint GetUser(@PathVariable Integer id) {
        return appointmentRepository.findById(id).orElse(null);
    }
    
}



