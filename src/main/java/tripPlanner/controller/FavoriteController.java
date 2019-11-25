package tripPlanner.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import tripPlanner.model.Item;
import tripPlanner.service.FavoriteService;
import tripPlanner.service.ItemService;

@RestController
public class FavoriteController {
	
	@Autowired
	private FavoriteService favoriteService;
	
	@Autowired
	private ItemService itemService;
	
	
	public void addFavorite(int itemID) {
		
	};
	
	public void deleteFavorite(int itemID) {
		
	}
	
	public List<Item> getFavorite(int userID) {
		
		return null;
	}
	
}
