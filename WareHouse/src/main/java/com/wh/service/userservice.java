package com.wh.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.wh.model.login;
import com.wh.model.registrationuser;
import com.wh.repository.loginrepo;
import com.wh.repository.repouser;

@Component
public class userservice 
{
	@Autowired
	private repouser ur;
	
	@Autowired
	private loginrepo lr;
	
	public boolean addusermethod(registrationuser u)
	{
		
		String un = u.getUsername();
		String pass = u.getPassword();
		login l = new login();
		l.setUsername(un);
		l.setPassword(pass);
		lr.save(l);
		
		ur.save(u);
		return true;
		
	}
	
	
	
	public boolean emailvalidate(String e)
	{
		e = e.toLowerCase();
		if(ur.findByEmail(e)==null)
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	
	
	public void updateusernameandpassword(registrationuser u)
	{
		String e = u.getEmail();
		String un = u.getUsername();
		String pass  = u.getPassword();
		e=e.toLowerCase();
		
		login l = new login();
		l.setUsername(un);
		l.setPassword(pass);
		lr.saveAndFlush(l);
		
		registrationuser user = new registrationuser();
		user = ur.findByEmail(e);
		user.setUsername(un);
		user.setPassword(pass);
		ur.saveAndFlush(user);
	}
	
	

}
