package tripPlanner.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import tripPlanner.model.Item;
import tripPlanner.service.RouteItemService;

@RestController
public class RouteItemController {
	
	@Autowired
	private RouteItemService planItemService;

	public void addItem(int itemID) {
		
	}
	
	public void removeItem(int itemID) {
		
	}
	
	public void updateItem(int oldItemID, int newItemID) {
		
	}
	
	public Item getItem(int itemID) {
		return null;
	}
	
}
