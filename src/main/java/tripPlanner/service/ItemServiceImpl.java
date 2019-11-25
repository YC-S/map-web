package tripPlanner.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tripPlanner.dao.ItemDao;
import tripPlanner.model.Item;

@Service
public class ItemServiceImpl implements ItemService {

	@Autowired
	private ItemDao itemDao;

	public void addAllItems(Item[] itemArray) {
		// TODO Auto-generated method stub
		
	}

	public void addItem(Item item) {
		// TODO Auto-generated method stub
		
	}

	public void deleteItem(int itemID) {
		// TODO Auto-generated method stub
		
	}

	public Item getItem(int itemID) {
		// TODO Auto-generated method stub
		return null;
	}

	public void updateItem(int itemID) {
		// TODO Auto-generated method stub
		
	}


}
