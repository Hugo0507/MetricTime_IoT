package com.init.proyec.DAO;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import com.init.proyec.modelos.Agent;
import com.init.proyec.modelos.Agents;
import com.init.proyec.modelos.Metrics;
import com.init.proyec.modelos.Metrics2;


@Component
public class ServiciosDao implements DAO<Agents>, DAO2<Agent>, DAO3<Metrics>, DAO4<Metrics2>{
	
	private static final Logger log = LoggerFactory.getLogger(ServiciosDao.class);
	JdbcTemplate jdbcTemplate;
	

	public ServiciosDao(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	
	RowMapper<Agents> rowMapper = (rs, rowNum) -> {
        Agents agente = new Agents();
        agente.setId(rs.getInt("id"));
        agente.setName(rs.getString("name"));
        agente.setHostname(rs.getString("hostname"));
        agente.setConnected(rs.getBoolean("Connected"));
        agente.setPid(rs.getInt("pid"));
        return agente;
    };
    
    RowMapper<Agent> rowMapper2 = (rs, rowNum) -> {
        Agent agente = new Agent();
        agente.setUuid(rs.getString("uuid"));
        return agente;
    };
    
    RowMapper<Metrics> rowMapper3 = (rs, rowNum) -> {
        Metrics metricas = new Metrics();
        metricas.setType(rs.getString("type"));
        return metricas;
    };
    
    RowMapper<Metrics2> rowMapper4 = (rs, rowNum) -> {
        Metrics2 metricas2 = new Metrics2();
        metricas2.setId(rs.getInt("id"));
        metricas2.setType(rs.getString("type"));
        metricas2.setValue(rs.getDouble("value"));
        metricas2.setCreatedat(rs.getTimestamp("created_at"));
        return metricas2;
    };



	@Override
	public Optional<Agents> get(String uuid) {
		 String sql = "SELECT id, name, hostname, connected, pid FROM agents WHERE uuid LIKE ?";
	        Agents agente = null;
	        try {
	        	agente = jdbcTemplate.queryForObject(sql,rowMapper,uuid);
	        }catch (DataAccessException ex) {
	            log.info("UUID no encontrada: "+ uuid );
	        }
	        return Optional.ofNullable(agente);
	}


	@Override
	public List<Agent> getLis(int id) {
		
		String sql = "SELECT uuid FROM agents WHERE user_id = ? ORDER BY created_at DESC";
		return jdbcTemplate.query(sql,rowMapper2, id);
	}

	@Override
	public List<Metrics> gettype(String uuid) {
		String sql = "SELECT type FROM metrics JOIN agents ON agents.id = metrics.agent_id WHERE agents.uuid LIKE ? GROUP BY type";
		return jdbcTemplate.query(sql, rowMapper3, uuid);
	}


	@Override
	public List<Metrics2> getmetricas(String uuid, String type) {
		String sql = "SELECT * FROM (SELECT metrics.id, type , value , metrics.created_at FROM metrics INNER JOIN agents ON  metrics.agent_id = agents.id WHERE agents.uuid LIKE ? and  metrics.type LIKE ? ORDER BY metrics.created_at DESC) as metric_filter LIMIT 20";
		return jdbcTemplate.query(sql, rowMapper4, new Object[]{uuid, type});
	}


	
	
	

}
