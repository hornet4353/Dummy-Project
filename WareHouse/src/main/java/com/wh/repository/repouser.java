package com.wh.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.wh.model.registrationuser;

public interface repouser extends JpaRepository<registrationuser, Integer> 
{

	public registrationuser findByUsername(String username);
	public registrationuser findByEmail(String email);
}
