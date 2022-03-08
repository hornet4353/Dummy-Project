package com.wh.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.wh.model.dispatch;

public interface dispatchrepo extends JpaRepository<dispatch, Integer> 
{
	@Query("from dispatch order by diapatch_id desc")
	List<dispatch> getsortedbyId();

}
