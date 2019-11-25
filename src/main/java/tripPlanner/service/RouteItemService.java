package tripPlanner.service;

import tripPlanner.model.Item;

public interface RouteItemService {

	void addItem(int itemID);
	
	void removeItem(int itemID);
	
	void updateItem(int oldItemID, int newItemID);
	
	Item getItem(int itemID);
}
