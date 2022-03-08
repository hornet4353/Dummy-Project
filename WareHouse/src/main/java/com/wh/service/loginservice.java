package com.wh.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.wh.model.login;
import com.wh.repository.loginrepo;

@Component
public class loginservice 
{
	@Autowired
	private loginrepo lr;
	
	public login loginUser(String username,String password)
	{
		return this.lr.findByUsernameAndPassword(username, password);
	}

}
