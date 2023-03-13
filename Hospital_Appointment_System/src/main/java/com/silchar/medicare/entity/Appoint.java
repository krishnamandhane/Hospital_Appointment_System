package com.silchar.medicare.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;



@Entity
@Table(name="appointment")
public class Appoint {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	
	int id;
    private String username;
    private String fname;
    private String email;
    private String address;
    private String city;
    private String type;
    private String timeofapp;
	private String dateofapp;
	private String doctorname;
	private String status;
	public String getDoctorname() {
		return doctorname;
	}

	public void setDoctorname(String doctorname) {
		this.doctorname = doctorname;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getTimeofapp() {
		return timeofapp;
	}

	public void setTimeofapp(String timeofapp) {
		this.timeofapp = timeofapp;
	}

	public String getDateofapp() {
		return dateofapp;
	}

	public void setDateofapp(String dateofapp) {
		this.dateofapp = dateofapp;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
   
}

