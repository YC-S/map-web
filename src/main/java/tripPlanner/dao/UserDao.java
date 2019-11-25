package tripPlanner.dao;

import tripPlanner.model.User;

public interface UserDao {
	
	void addUser(User user);
	
	void deleteUser(int userID);
	
	void updateUser(int userID, User user);
	
	User getUserByUserName(int userID);
	
}
