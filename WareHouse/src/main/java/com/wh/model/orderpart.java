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
@SequenceGenerator(name = "o_id" , initialValue = 1000 , allocationSize = 3)
public class orderpart 
{
	@Id
	@Column(name = "order_id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE , generator = "o_id")
	private int id;
	
	@Column(name = "order_vendor")
	private String name;
	
	@Column(name = "order_quantiy")
	private int quantity;
	
	@ManyToOne
	private parts part;
	
	@Column(name = "order_date")
	@CreationTimestamp
	private Date date;
	
	public orderpart() {}
	
	
	public orderpart(int oid, String ovendor, int oquantity) {
		super();
		this.id = oid;
		this.name = ovendor;
		this.quantity = oquantity;
	}
	
	
	public parts getPart() {
		return part;
	}


	public void setPart(parts part) {
		this.part = part;
	}


	public Date getDate() {
		return date;
	}


	public void setDate(Date date) {
		this.date = date;
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


	@Override
	public String toString() {
		return "orderpart [id=" + id + ", name=" + name + ", quantity=" + quantity + ", part=" + part + ", date=" + date
				+ "]";
	}





	
	

}
