package tripPlanner.dao;

import java.util.List;

import tripPlanner.model.Item;

public interface SearchDao {

	List<Item> searchEvents(double lat, double lon);
	
}
