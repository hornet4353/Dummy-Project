package com.wh.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.wh.model.registrationuser;
import com.wh.service.userservice;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class usercontroller 
{
	@Autowired
	private userservice service;
	
	@PostMapping("/registrationuser")
	public boolean usermethod1(@RequestBody registrationuser user)
	{
		return this.service.addusermethod(user);
	} 
	
	@GetMapping("/registrationuser/{email}")
	public boolean methodcheckemail(@PathVariable("email") String email)
	{
		return this.service.emailvalidate(email);
	}
	
	@PutMapping("/registrationuser")
	public boolean medhtodupdate(@RequestBody registrationuser uu)
	{
		this.service.updateusernameandpassword(uu);
		return true;
	}

}
