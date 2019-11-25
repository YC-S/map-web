package tripPlanner.model;

import org.json.JSONArray;
import org.json.JSONObject;

import tripPlanner.model.Category.Category;
import tripPlanner.model.Coordinate.Coordinate;
import tripPlanner.model.Location.Location;

public class Item {

	private String id;
	private String alias;
	private String name;
	private String price;
	private String image_url;
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	private boolean is_closed;
	private String url;
	private int review_count;
	private Category[] categories;
	private double rating;
	private Coordinate coordinates;
	private String[] transactions;
	private Location location;
	private String phone;
	private String display_phone;
	private double distance;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getAlias() {
		return alias;
	}
	public void setAlias(String alias) {
		this.alias = alias;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getImage_url() {
		return image_url;
	}
	public void setImage_url(String image_url) {
		this.image_url = image_url;
	}
	public boolean isIs_closed() {
		return is_closed;
	}
	public void setIs_closed(boolean is_closed) {
		this.is_closed = is_closed;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public int getReview_count() {
		return review_count;
	}
	public void setReview_count(int review_count) {
		this.review_count = review_count;
	}
	public Category[] getCategories() {
		return categories;
	}
	public void setCategories(Category[] categories) {
		this.categories = categories;
	}
	public double getRating() {
		return rating;
	}
	public void setRating(double rating) {
		this.rating = rating;
	}
	public Coordinate getCoordinates() {
		return coordinates;
	}
	public void setCoordinates(Coordinate coordinates) {
		this.coordinates = coordinates;
	}
	public String[] getTransactions() {
		return transactions;
	}
	public void setTransactions(String[] transactions) {
		this.transactions = transactions;
	}
	public Location getLocation() {
		return location;
	}
	public void setLocation(Location location) {
		this.location = location;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getDisplay_phone() {
		return display_phone;
	}
	public void setDisplay_phone(String display_phone) {
		this.display_phone = display_phone;
	}
	public double getDistance() {
		return distance;
	}
	public void setDistance(double distance) {
		this.distance = distance;
	}
	
	
}
