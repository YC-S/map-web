package tripPlanner.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import tripPlanner.model.Route;
import tripPlanner.service.RouteItemService;
import tripPlanner.service.RouteService;

@RestController
public class RouteController {
	
	@Autowired
	private RouteService routeService;
	
	@Autowired
	private RouteItemService routeItemService;
	
	@RequestMapping(value="/getRoute", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public Route getPlanByPlanID(int routeID) {
		
		
		
		return null;
	}
	
}
