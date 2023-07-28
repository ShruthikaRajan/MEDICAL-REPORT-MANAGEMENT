
package com.iamneo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.Appoinment;
import com.iamneo.security.service.Apposervice;
import com.iamneo.security.service.AuthenticationService;

import lombok.RequiredArgsConstructor;


@RestController
@CrossOrigin
@RequestMapping("/api/v1/auth/demo")
@RequiredArgsConstructor
public class appoinmentContro {
	@Autowired
	Apposervice apposervice;
	@GetMapping("/getApp")
	public List <Appoinment> getAllApp()
	{
	 return apposervice.getAllApp();
	}
}