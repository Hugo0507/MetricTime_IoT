package com.init.proyec.modelos;

public class Agents {
	
	private int id;
	private String name;
	private String hostname;
	private boolean connected;
	private int pid;
	
	public Agents() {

	}

	public Agents(int id, String name, String hostname, boolean connected, int pid) {
		super();
		this.id = id;
		this.name = name;
		this.hostname = hostname;
		this.connected = connected;
		this.pid = pid;
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


	public String getHostname() {
		return hostname;
	}


	public void setHostname(String hostname) {
		this.hostname = hostname;
	}


	public boolean isConnected() {
		return connected;
	}


	public void setConnected(boolean connected) {
		this.connected = connected;
	}


	public int getPid() {
		return pid;
	}


	public void setPid(int pid) {
		this.pid = pid;
	}


	
	
	
	

}
