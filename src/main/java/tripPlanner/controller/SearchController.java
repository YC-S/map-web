package tripPlanner.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import tripPlanner.model.Item;
import tripPlanner.service.SearchService;

@RestController
public class SearchController {
	
	private static final String DEFAULT_CATEGORY = "restaurants";
	private static final int DEFAULT_RADIUS = 40000;

	@Autowired
	private SearchService searchService;
	
	@RequestMapping(value="/search", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Item>> searchEvents(@RequestParam("lat") double lat, @RequestParam("lon") double lon) {
		
		
		
		return null;
	}
}
