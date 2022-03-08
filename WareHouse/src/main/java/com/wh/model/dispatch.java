package com.wh.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@SequenceGenerator(name = "dispatch_id", initialValue = 900, allocationSize = 1)
public class dispatch 
{
	@Id
	@Column(name = "Diapatch_ID")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "dispatch_id")
	private int id;

	@ManyToOne
	private parts part;
	
	@Column(name = "Dispatch_Vednor")
	private String name;
	
	@Column(name= "Dispatch_Quantity")
	private int quantity;
	
	
	@CreationTimestamp
	@Column(name = "Dispatch_Date")
	private Date date;

	
	
	
	public parts getPart() {
		return part;
	}

	public void setPart(parts part) {
		this.part = part;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "dispatch [id=" + id + ", name=" + name + ", quantity=" + quantity + ", date=" + date + "]";
	}
	
	
}
