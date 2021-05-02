package com.init.proyec.modelos;

public class Agent {

	private String uuid;
	private String name;
	private Integer pid;
	private String hostname;

	public Agent() {
	
	}
	public Agent( String uuid , String name , Integer pid , String hostname) {
		super();
		this.uuid = uuid;
	    this.name = name;
	    this.pid = pid;
	}
	public String getUuid() {
		return uuid;
	}
	public void setUuid(String uuid) {
		this.uuid = uuid;
	}
	public String getName() {
		return this.name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getPid() {
		return this.pid;
	}
	public void setPid(Integer pid) {
		this.pid = pid;
	}
	
	public String getHostname() {
		return this.hostname;
	}
	public void setHostname(String hostname) {
		this.hostname = hostname;
	}
	
	

}
