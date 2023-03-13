package com.silchar.medicare.controller;


import com.silchar.medicare.entity.User;
import java.util.List;
import com.silchar.medicare.repository.UserRepository;
import com.silchar.medicare.validate.UserValidate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
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

@ComponentScan(basePackages = {"com.met.medicare.Controller"})
@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserController {
    @Autowired
    private UserRepository userRepository;
    
	@GetMapping(path="/loadpatient")
    public List<User> GetUsers () {
		return userRepository.findAll();
    } 
	
    @GetMapping("/updatebyiduser/{id}")
    public User GetUser(@PathVariable Integer id) {
        return userRepository.findById(id).orElse(null);
    }

    @PostMapping("/")
    public int PostUser(@RequestBody User user) {
    	
    	String username = user.getUsername();
    	String email = user.getEmail();
    	String mobile = user.getMobile();    
    	String pass = user.getPassword();  	

//		System.out.print(id+ "\n");
    	
        User n = new User();
        n.setUsername(username);
        n.setEmail(email);
        n.setMobile(mobile);
        n.setPassword(pass);
        User result = userRepository.save(n); 
        
        
		if(result != null) {
		System.out.print("Record inserted");
		return 0;
		
		} 
        
        return 1;
        
    }
    
   

    @PutMapping("/editpatient")
    public int update(@RequestBody User user){
    	
    	User result = userRepository.save(user); 
		
		if(result != null) {
		System.out.print("Record updated");
		return 0;
		
		} 
		
		return 1;
    }

    @PostMapping("/login")
    public int PostUser1(@RequestBody User user) {  
    	
	    UserValidate udao=new UserValidate();
		String username = user.getUsername();   
		String pass = user.getPassword(); 
		boolean checkingLogin=udao.validate(username, pass);
		System.out.print(username+ "\n");	
		if(checkingLogin) {
		    return 0;
		}
		return 1;
	
	    }

    
	@DeleteMapping("/deluser/{id}")
    public int DeleteUser(@PathVariable int id) { 		
		userRepository.deleteById(id);
        return 0;
    }   

}