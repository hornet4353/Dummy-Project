package com.wh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.wh.model.dispatch;
import com.wh.service.dispatchservice;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class dispatchcontroller 
{
	@Autowired
	private dispatchservice ds;
	
	@PostMapping("/dispatch")
	public boolean saved(@RequestBody dispatch d)
	{
		return this.ds.savedispatch(d);
	}
	
	@GetMapping("/dispatch/{id}/{qty}")
	boolean getquatntityandpart(@PathVariable(name = "id") int id, @PathVariable("qty") int qty)
	{
		return this.ds.getidqty(id, qty);
	}
	
	@GetMapping("/dispatch")
	public List<dispatch> dd()
	{
		return this.ds.getall();
	}

}
