package tripPlanner.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tripPlanner.dao.RouteDao;
import tripPlanner.model.Item;
import tripPlanner.model.Route;

@Service
public class RouteServiceImpl implements RouteService {
	
	@Autowired
	private RouteDao planDao;
	
	public Route getPlanByPlanID(int PlanID) {
		// TODO Auto-generated method stub
		
		return null;
	}

}
