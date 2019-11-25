package tripPlanner.service;

import java.util.List;

import tripPlanner.model.Item;

public interface FavoriteService {
	
	void addFavorite(int itemID);
	
	void deleteFavorite(int itemID);
	
	List<Item> getFavorite(int userID);
}
