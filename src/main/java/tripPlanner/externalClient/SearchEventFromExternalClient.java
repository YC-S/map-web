package tripPlanner.externalClient;

import java.util.List;

import tripPlanner.model.Item;

public interface SearchEventFromExternalClient {

	Item[] searchEvents (double lat, double lon, String category, int limit, int offset);
	
}
