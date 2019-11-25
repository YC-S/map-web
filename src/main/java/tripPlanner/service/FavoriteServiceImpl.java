package tripPlanner.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tripPlanner.dao.FavoriteDao;
import tripPlanner.model.Item;

@Service
public class FavoriteServiceImpl implements FavoriteService {
	
	@Autowired
	private FavoriteDao favoriteDao;
	
	public void addFavorite(int itemID) {
		// TODO Auto-generated method stub
		
	}

	public void deleteFavorite(int itemID) {
		// TODO Auto-generated method stub
		
	}

	public List<Item> getFavorite(int userID) {
		// TODO Auto-generated method stub
		return null;
	}

}
