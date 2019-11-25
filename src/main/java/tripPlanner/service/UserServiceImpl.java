package tripPlanner.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tripPlanner.dao.UserDao;
import tripPlanner.model.User;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;
	
	public void addUser(User user) {
		// TODO Auto-generated method stub
		
	}

	public void deleteUser(int userID) {
		// TODO Auto-generated method stub
		
	}

	public void updateUser(int userID, User user) {
		// TODO Auto-generated method stub
		
	}

	public User getUserByUserName(int userID) {
		// TODO Auto-generated method stub
		return null;
	}


}
