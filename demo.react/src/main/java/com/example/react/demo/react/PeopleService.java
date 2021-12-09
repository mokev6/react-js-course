package com.example.react.demo.react;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PeopleService {

	@Autowired
	private FakeRepository fakeRepo;
	
	public List<Person> getAll() {
		return fakeRepo.getAll();
	}
	
	public void add(String name, String email) {
		fakeRepo.add(name, email);
	}
	
	public List<Person> clear() {
		return fakeRepo.clear();
	}
}
