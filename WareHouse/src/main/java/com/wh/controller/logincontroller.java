package com.wh.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.wh.model.login;
import com.wh.model.registrationuser;
import com.wh.repository.repouser;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class logincontroller 
{
	
	@Autowired
	private repouser ur;
	

	@PostMapping("/login")
	public registrationuser loginUser(@RequestBody login userdata) 
	{
		registrationuser loginUser = new registrationuser();
		System.out.println("Email = " + userdata.getUsername() + "Password = " + userdata.getPassword() );
		String username = userdata.getUsername();
		loginUser =this.ur.findByUsername(username);
		System.out.println("this is data of the repository search: "+loginUser);
		
		if(loginUser == null)
		{
			System.out.println("First If mai bahar");
			return null;
	
		}
		else
		{
			System.out.println("else part");
			return loginUser;
		}
		
	}

}
