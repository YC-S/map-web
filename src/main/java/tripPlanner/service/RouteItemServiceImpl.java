package tripPlanner.service;

import org.springframework.beans.factory.annotation.Autowired;

import tripPlanner.dao.RouteItemDao;
import tripPlanner.model.Item;

public class RouteItemServiceImpl implements RouteItemService {

	@Autowired
	private RouteItemDao planItemDao;
	
	public void addItem(int itemID) {
		// TODO Auto-generated method stub
		
	}

	public void removeItem(int itemID) {
		// TODO Auto-generated method stub
		
	}

	public void updateItem(int oldItemID, int newItemID) {
		// TODO Auto-generated method stub
		
	}

	public Item getItem(int itemID) {
		// TODO Auto-generated method stub
		return null;
	}

}
