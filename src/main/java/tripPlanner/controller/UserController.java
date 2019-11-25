package tripPlanner.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import tripPlanner.model.User;
import tripPlanner.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	public void addUser(User user) {
		
	}
	
	public void deleteUser(int userID) {
		
	}
	
	public void updateUser(int userID, User user) {
		
	}
	
	public User getUserByUserName(int userID) {
		
		return null;
	}
	
}
