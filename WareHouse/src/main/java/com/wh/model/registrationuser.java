package com.wh.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@SequenceGenerator(name = "user_id_generation", initialValue = 586758, allocationSize = 1)
@Entity
@Table(name = "user")
public class registrationuser 
{
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE , generator = "user_id_generation")
	@Column(name = "user_id")
	private int userid;
	
	private String fullname;
	private String username;
	private String email;
	private long mob;
	
	private String password;
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public long getMob() {
		return mob; 
	}
	public void setMob(long mob) {
		this.mob = mob;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmailid(String email) {
		this.email = email;
	}
	@Override
	public String toString() {
		return "registrationuser [userid=" + userid + ", fullname=" + fullname + ", mob=" + mob + ", username="
				+ username + ", password=" + password + ", emailid=" + email + "]";
	}
	
	
	

}
