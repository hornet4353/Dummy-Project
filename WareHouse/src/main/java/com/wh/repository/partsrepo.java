package com.wh.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wh.model.parts;


public interface partsrepo extends JpaRepository<parts, Integer>
{
	List<parts> findByPquantityGreaterThan(int pquantity);
}
