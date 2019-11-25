package tripPlanner.externalClient;

import java.io.IOException;
import java.util.List;

import org.json.JSONObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import tripPlanner.model.Item;

public class SearchEventsFromYelp implements SearchEventFromExternalClient {
	
	private static final String HOST = "https://api.yelp.com/v3";
	private static final String PATH = "/businesses/search";
	private static final String DEFAULT_Category = "parks,arts,localflavor,publicservicesgovt";
	private static final int DEFAULT_RADIUS = 40000;
	private static final String API_KEY = "YOURAPIKEY";
	private static final int LIMIT = 50;
	private static final int OFFSET = 0;
	private static final String SORT_BY = "review_count";
	
	public Item[] searchEvents(double lat, double lon, String category, int limit, int offset) {
		// TODO Auto-generated method stub
		
		if (category == null) {
			category = DEFAULT_Category;
		}
		
		if (limit < 0) {
			limit = LIMIT;
		}
		
		if (offset < 0) {
			offset = OFFSET;
		}
		
		// Send request to yelp API to retrieve events
		HttpHeaders headers = new HttpHeaders();
		headers.set("Authorization", String.format("Bearer %s", API_KEY));
		
		HttpEntity<String> entity = new HttpEntity(headers);
		
		RestTemplate restTemplate = new RestTemplate();
		String query = String.format("sort_by=%s&categories=%s&latitude=%s&longitude=%s&limit=%s&offset=%s&radius=%s", SORT_BY, category, lat, lon, limit, offset,40000);
		String url = new String(HOST + PATH + "?" + query);
		
		ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
		
		// Get business : [] jsonObject from response body;
		JSONObject jsonObject = new JSONObject(responseEntity.getBody());
		
		Item[] itemArray = null;
		
		try {
			// Map the items pulled from yelp to item model using ObjectMapper;
			itemArray = new ObjectMapper().readValue(jsonObject.getJSONArray("businesses").toString(), Item[].class);
			System.out.println(itemArray.length);
		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}	
		
		return itemArray;
	}
}
