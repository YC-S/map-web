package tripPlanner.service;

import java.util.List;

import tripPlanner.model.Item;

public interface SearchService {

	//	search events from a given geolocation (probably type of event)
	List<Item> searchEvents(double lat, double lon);

	
}
