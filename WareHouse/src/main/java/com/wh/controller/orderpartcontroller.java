package com.wh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.wh.model.orderpart;
import com.wh.service.orderpartservice;


@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class orderpartcontroller 
{
	@Autowired
	private orderpartservice opservice;
	
	
	@PostMapping("/orderpart")
	public boolean saveop(@RequestBody orderpart op)
	{
		System.out.println(op);
		return this.opservice.saveorderpart(op);
	}
	
	@GetMapping("/orderpart/{id}")
	public boolean chechpart(@PathVariable(name = "id") int id)
	{
		return this.opservice.ordergetidqty(id);
	}
	
	@GetMapping("/orderpart")
	public List<orderpart> returnallparts()
	{
		return this.opservice.getallorderpart();
	}

}
