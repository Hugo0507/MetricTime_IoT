package com.init.proyec;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.init.proyec.DAO.DAO;
import com.init.proyec.DAO.DAO2;
import com.init.proyec.DAO.DAO3;
import com.init.proyec.DAO.DAO4;
import com.init.proyec.DAO.ServiciosDao;
import com.init.proyec.modelos.Agent;
import com.init.proyec.modelos.Agents;
import com.init.proyec.modelos.Metrics;
import com.init.proyec.modelos.Metrics2;

@RestController
@CrossOrigin(origins = "http://localhost:4000")
public class Controlador {
	private DAO<Agents> dao;
	private DAO2<Agent> dao2;
	private DAO3<Metrics> dao3;
	private DAO4<Metrics2> dao4;


	public Controlador(DAO<Agents> dao, DAO2<Agent> dao2, DAO3<Metrics> dao3, DAO4<Metrics2> dao4) {
		super();
		this.dao = dao;
		this.dao2 = dao2;
		this.dao3 = dao3;
		this.dao4 = dao4;
	}

	@Autowired
	ServiciosDao servicioDao;
	
	@RequestMapping(value="/agent/{uuid}", method = RequestMethod.GET)
    public Agents getAgente(@PathVariable String uuid) {
        Optional<Agents> agente = dao.get(uuid);
        if(!agente.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Persona no encontrada.");
        }
        return agente.get();
    }
	
	@RequestMapping(value="/agents/{id}", method = RequestMethod.GET)
	public List<Agent> list(@PathVariable int id) {
        return dao2.getLis(id);
    }
	
	@RequestMapping(value="/metrics/{uuid}", method = RequestMethod.GET)
	public List<Metrics> listtype(@PathVariable String uuid) {
        return dao3.gettype(uuid);
    }
	@RequestMapping(value="/metrics/{uuid}/{type}", method = RequestMethod.GET)
	public List<Metrics2> listmetrics(@PathVariable String uuid, @PathVariable String type) {
        return dao4.getmetricas(uuid, type);
    }
	
	
	
	

}
