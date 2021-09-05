package com.init.proyec.entity;

/**
 * Modelo de datos de Token
 * @author MetricTime
 *
 */
public class Token {
	
	private String token;

	public Token() {}

	public Token(String token) {
		this.token = token;
	
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	
}
