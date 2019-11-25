package tripPlanner.dao;

import tripPlanner.model.Item;

public interface RouteItemDao {

	void addItem(int itemID);
	
	void removeItem(int itemID);
	
	void updateItem(int oldItemID, int newItemID);
	
	Item getItem(int itemID);
}
