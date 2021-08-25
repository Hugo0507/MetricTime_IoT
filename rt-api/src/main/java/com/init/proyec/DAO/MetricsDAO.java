package com.init.proyec.DAO;

import java.util.List;

public interface DAO4<T> {
	
	List<T> getmetricas(String uuid, String type);

}
