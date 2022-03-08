package com.wh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.wh.model.parts;
import com.wh.service.partsservice;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class partscontroller 
{
	@Autowired
	partsservice service;
	
	
//	@PostMapping("/part")
//	public String save()			//for creating dummy data in db
//	{
//		 return this.service.saveparts();
//	}
	
	
	@PostMapping("/part")
	public parts save(@RequestBody parts p)			//@requestbody is used when we send raw data from client
	{
		 return this.service.saveparts(p);
	}
	
	@GetMapping("/part/{id}")
	public List<parts> show(@PathVariable(name = "id") int i)
	{
		return this.service.partesgreater(i);
	}
	
	@GetMapping(path = "/part")
	public List<parts> parts()
	{
		return this.service.servicefindall();
	}
	
	@PutMapping("/part")
	public parts partupdate(@RequestBody parts p)
	{
		return this.service.serviceupdate(p);
		
	}
	
	@DeleteMapping("/part/{number}")
	public boolean deletemethod( @PathVariable("number") int n )
	{
		return this.service.deletepartmethod(n);
	}
	
}
