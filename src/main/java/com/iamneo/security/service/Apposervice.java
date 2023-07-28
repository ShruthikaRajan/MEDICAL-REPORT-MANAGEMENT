
package com.iamneo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Appoinment;
import com.iamneo.security.repository.Appoinmentrepo;

@Service
public class Apposervice {
	@Autowired
    Appoinmentrepo appoinment;
	public List<Appoinment> getAllApp(){
		return appoinment.findAll();
	}
}

