package com.iamneo.security.entity;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Appoinment{
	@Id
   private String name;
   private String doctorname;
   private Date date;
   private int fees;
   private String history;
   private String time;
 
}