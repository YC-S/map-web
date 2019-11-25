package tripPlanner.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import tripPlanner.externalClient.SearchEventsFromYelp;
import tripPlanner.model.Item;
import tripPlanner.service.ItemService;
import tripPlanner.service.UserService;

@RestController
public class ItemController {
	
	@Autowired
	private ItemService itemService;
	
	@Autowired
	private SearchEventsFromYelp searchEventsFromYelp;
	
	//	add all events into DB
	@RequestMapping(value="/admin/addAllItems", method=RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> addAllItems(@RequestParam("lat") double lat, @RequestParam("lon") double lon) {
		
		// When limit < 0 or offest < 0, default value will be assigned;
		// maxLimit = 50; maxAmountOfEventsPull = 1000;
		// For test: lat = 47.6062, lon = -122.3321 (seattle);
		Item[] itemArray = searchEventsFromYelp.searchEvents(lat, lon, null, -1, -1);
		System.out.println(itemArray.length);
		
		if(itemArray != null) {
			itemService.addAllItems(itemArray);
			return ResponseEntity.ok("Events added sucessfully.");
		}		
		
		return ResponseEntity.notFound().build();
	}

	public void addItem(Item item) {
		
	}
	
	// delete event from DB
	public void deleteItem(int itemID) {
		
	}

	//	get details of an event
	public Item getItem(int itemID) {
		
		return null;
	}

	public void updateItem(int itemID) {
		
	}
	
}