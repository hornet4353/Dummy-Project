package com.wh.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.wh.model.orderpart;
import com.wh.model.parts;
import com.wh.repository.orderpartrepo;
import com.wh.repository.partsrepo;

@Component
public class orderpartservice 
{
	@Autowired
	private partsrepo pr;
	
	@Autowired
	private orderpartrepo opr;
	
	
	public boolean saveorderpart(orderpart op)
	{
		System.out.println(op);
		parts p = new parts();
		p = pr.getById(op.getId());
		System.out.println(op.getId());
		if(pr.existsById(op.getId()) == false)
		{
			System.out.println("1st mai IF bahar");
			return false;
		}
		else
		{
			updateorderpart(op);
			op.setPart(p);
			opr.save(op);
			return true;
		}
	}

	public void updateorderpart(orderpart op)
	{
		parts p = new parts();
		p = pr.getById(op.getId());
		int q = p.getPquantity();
		p.setPquantity(q + op.getQuantity());
		this.pr.saveAndFlush(p);
	}
	
	
	
	
	public boolean ordergetidqty(int id)
	{
		if(pr.existsById(id))
		{
			return true;
		}
		else
			return false;
		
	}
	
	
	
	public List<orderpart> getallorderpart()
	{
		return this.opr.getdescendingorder();
	}
}
