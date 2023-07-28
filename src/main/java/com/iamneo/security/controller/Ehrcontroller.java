package com.iamneo.security.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.Ehr;
import com.iamneo.security.service.Ehrservice;

import lombok.RequiredArgsConstructor;
@RestController
@CrossOrigin
@RequestMapping("/api/v1/auth/demo")
@RequiredArgsConstructor
public class Ehrcontroller {
	@Autowired
	Ehrservice ehservice;
	@GetMapping("/getehr")
	public List <Ehr> getAllEhr()
	{
	 return ehservice.getAllEhr();
	}
}