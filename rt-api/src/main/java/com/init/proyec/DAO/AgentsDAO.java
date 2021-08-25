package com.init.proyec.DAO;

import java.util.Optional;

public interface DAO<T> {
	
	Optional<T> get(String id);
	

}
