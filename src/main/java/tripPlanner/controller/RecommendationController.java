package tripPlanner.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import tripPlanner.model.Item;
import tripPlanner.service.FavoriteService;
import tripPlanner.service.ItemService;

@RestController
public class RecommendationController {
	
	@Autowired
	private FavoriteService favoriteService;
	
	@Autowired
	private ItemService itemManagementService;
	
	public List<Item> getRecommendation(int userID, double lat, double lon) {
		return null;
	}
	
}
