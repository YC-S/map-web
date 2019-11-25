package tripPlanner.dao;

import java.util.List;

import tripPlanner.model.Item;

public interface FavoriteDao {

	void addFavorite(int itemID);
	
	void deleteFavorite(int itemID);
	
	List<Item> getFavorite(int userID);

}
