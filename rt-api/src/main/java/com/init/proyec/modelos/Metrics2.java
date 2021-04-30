package com.init.proyec.modelos;

import java.sql.Timestamp;

public class Metrics2 {
	
	private int id;
	private String type;
	private double value;
	private Timestamp createdat;
	
	
	
	public Metrics2() {
		
	}
	public Metrics2(int id, String type, double value, Timestamp createdat) {
		this.id = id;
		this.type = type;
		this.value = value;
		this.createdat = createdat;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public double getValue() {
		return value;
	}
	public void setValue(double value) {
		this.value = value;
	}
	public Timestamp getCreatedat() {
		return createdat;
	}
	public void setCreatedat(Timestamp createdat) {
		this.createdat = createdat;
	}
	
	

}
