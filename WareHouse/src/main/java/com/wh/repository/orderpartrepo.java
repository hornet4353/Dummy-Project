package com.wh.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.wh.model.orderpart;

public interface orderpartrepo extends JpaRepository<orderpart, Integer> 
{
	@Query("from orderpart order by order_id desc")
	public List<orderpart> getdescendingorder();
}
