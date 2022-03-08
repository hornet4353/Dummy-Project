package com.wh.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import com.wh.model.parts;

import com.wh.repository.partsrepo;

@Component
public class partsservice 
{
	@Autowired
	private partsrepo whr;
	
//	public String saveparts()
//	{
//		Random r = new Random();
//		parts p = new parts();
//		for(int i=101;i<=150;i++)
//		{
//			p.setPnumber(i);
//			p.setPname("Name[100"+i+"]");
//			p.setPquantity(r.nextInt(20));
//			p.setPlocation("Facility A");
//			
//			whr.save(p);
//			
//			System.out.println("Data Added");
//		}
//		return "SuccessFull";
//	}
	
	public parts saveparts(parts p)
	{
		return this.whr.save(p);
	}
	
	public List<parts> partesgreater(int i)
	{
		return this.whr.findByPquantityGreaterThan(i);
	}
	
	public List<parts> servicefindall()
	{
		return this.whr.findAll();
	}
	
	public boolean servicedelete(int i)
	{
		if(whr.existsById(i))
		{
			whr.deleteById(i);
			return true;
		}
		return false;
	}
	
	public parts serviceupdate(parts p)
	{
		return this.whr.saveAndFlush(p);
	}

	public boolean deletepartmethod(int n)
	{
		this.whr.deleteById(n);
		return true;
	}
	
}
