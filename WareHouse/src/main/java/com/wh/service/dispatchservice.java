package com.wh.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.wh.model.dispatch;
import com.wh.model.parts;
import com.wh.repository.dispatchrepo;
import com.wh.repository.partsrepo;

@Component
public class dispatchservice 
{
	@Autowired
	private dispatchrepo dr;
	
	@Autowired
	private partsrepo pr;
	
	
	public boolean savedispatch(dispatch d)
	{
		System.out.println(d);
		parts p = new parts();
		p = pr.getById(d.getId());
		if(pr.existsById(d.getId()) == false)
		{
			System.out.println("1st if madhei baher");
			return false;
		}
		else if(p.getPquantity() <= d.getQuantity())
		{
			System.out.println("2st if madhei baher");
			return false;
		}
		else if(d.getQuantity() <= 0)
		{
			return false;
		}
		else
		{
			updateparts(d);
			d.setPart(p);
			this.dr.save(d);
			return true;
		}
	}
	
	public void updateparts(dispatch d)
	{
		parts p = new parts();
		p = pr.getById(d.getId());
		int q = p.getPquantity();
		p.setPquantity(q - d.getQuantity());
		this.pr.saveAndFlush(p);
	}
	
	
	public boolean getidqty(int id, int qty)
	{
		parts p = new parts();
		p = pr.getById(id);
		if(p == null)
		{
			return false;
		}
		else if ( pr.existsById(id) && p.getPquantity() > qty )
		{
			return true;
		}
		else
			return false;
		
	}
	
	
	public List<dispatch> getall()
	{
		return this.dr.getsortedbyId();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
