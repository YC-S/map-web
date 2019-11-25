package tripPlanner.service;

import tripPlanner.model.User;

public interface UserService {
	
	void addUser(User user);
	
	void deleteUser(int userID);
	
	void updateUser(int userID, User user);
	
	User getUserByUserName(int userID);
}
