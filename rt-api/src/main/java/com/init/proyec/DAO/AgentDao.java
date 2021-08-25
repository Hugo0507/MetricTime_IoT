package com.init.proyec.DAO;

import java.util.List;

public interface DAO2<T> {
	List<T> getLis(int id);
	List<T> getListHistory(int id);
}
