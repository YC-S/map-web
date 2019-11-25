package tripPlanner.service;

import tripPlanner.model.Item;
import java.util.*;

public interface ItemService {
	//	add all events into DB
	void addAllItems(Item[] itemArray);
	
	void addItem(Item item);
	
	// delete event from DB
	void deleteItem(int itemID);

	//	get details of an event
	Item getItem(int itemID);

	void updateItem(int itemID);
}
