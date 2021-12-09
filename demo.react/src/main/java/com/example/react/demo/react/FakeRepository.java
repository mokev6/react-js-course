package com.example.react.demo.react;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public class FakeRepository {

		
	
	private static  final List<Person> people = new ArrayList<Person>();
	
	static {
		Person p1 = new Person();
		p1.setId(1L);
		p1.setLastname("moust");
		p1.setName("kek");
		p1.setEmail("toto@fsdfds");
		people.add(p1);
	}
	
	public List<Person> getAll() {
		return people;
	}
	
	public void add(String name, String email) {
		Integer id = people.size() + 1;
		Person p = new Person();
		p.setId(id.longValue());
		p.setName(name);
		p.setLastname(email);
		p.setEmail(email);
		
		people.add(p);
	}
	
	public List<Person> clear() {
		people.clear();
		return people;
	}

}
