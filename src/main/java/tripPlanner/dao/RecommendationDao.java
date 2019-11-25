package tripPlanner.dao;

import java.util.List;

import tripPlanner.model.Item;

public interface RecommendationDao {

	List<Item> getRecommendation(int userID, double lat, double lon);
	
}
