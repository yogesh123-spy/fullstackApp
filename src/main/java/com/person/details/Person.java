package com.person.details;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Person {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name = "emp_name")
	private String name;
	@Column(name = "emp_address")
	private String address;
	@Column(name = "emp_city")
	private String city;
	@Column(name = "emp_mob_no")
	private int contact;
	
	
	

	public Person() {
		
	}




	public Person(int id, String name, String address, String city, int contact) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.city = city;
		this.contact = contact;
	}




	public int getId() {
		return id;
	}




	public void setId(int id) {
		this.id = id;
	}




	public String getName() {
		return name;
	}




	public void setName(String name) {
		this.name = name;
	}




	public String getAddress() {
		return address;
	}




	public void setAddress(String address) {
		this.address = address;
	}




	public String getCity() {
		return city;
	}




	public void setCity(String city) {
		this.city = city;
	}




	public Number getContact() {
		return contact;
	}




	public void setContact(int contact) {
		this.contact = contact;
	}

	
	

}
