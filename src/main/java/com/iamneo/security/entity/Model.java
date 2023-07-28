package com.iamneo.security.entity;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Model {
      @Id
      @GeneratedValue(strategy = GenerationType.IDENTITY)
      private int id;
      private String name;
      private int contact;
      private String dob;
      private String gender;
      private String insurance;
      private String password;
}
