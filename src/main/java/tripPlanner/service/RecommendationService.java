package tripPlanner.service;

import java.util.*;

import tripPlanner.model.Item;

public interface RecommendationService {
	
	//Recommendation based on selected geolocation and user's favorite
	
	List<Item> getRecommendation(int userID, double lat, double lon);
	
}
