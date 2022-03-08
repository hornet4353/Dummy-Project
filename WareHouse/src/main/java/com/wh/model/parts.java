package com.wh.model;


import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;


@Entity
public class parts 
{
	@Id
	private int pnumber;
	private String pname;
	private int pquantity;
	private String plocation;
	
	@Column(updatable = false)
	@CreationTimestamp()
	private Date createdate;
	
	@UpdateTimestamp
	private Date updatedate;
	
	
	
	
	public Date getCreatedate() {
		return createdate;
	}
	public void setCreatedate(Date createdate) {
		this.createdate = createdate;
	}
	public Date getUpdatedate() {
		return updatedate;
	}
	public void setUpdatedate(Date updatedate) {
		this.updatedate = updatedate;
	}
	public int getPnumber() {
		return pnumber;
	}
	public void setPnumber(int pnumber) {
		this.pnumber = pnumber;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public int getPquantity() {
		return pquantity;
	}
	public void setPquantity(int pquantity) {
		this.pquantity = pquantity;
	}
	public String getPlocation() {
		return plocation;
	}
	public void setPlocation(String plocation) {
		this.plocation = plocation;
	}
	@Override
	public String toString() {
		return "parts [pnumber=" + pnumber + ", pname=" + pname + ", pquantity=" + pquantity + ", plocation="
				+ plocation + "]";
	}
	
		

}
