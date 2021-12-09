package com.example.react.demo.react;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/people")
public class PeopleController {
 
	private PeopleService peopleService;
	
	@Autowired
	public PeopleController(PeopleService service) {
		this.peopleService = service; 
	}
	
	@GetMapping("/get")
	public List<Person> savePeople() {
		return peopleService.getAll();
	}
	
	@PostMapping("/save")
	public List<Person> save(@RequestBody Person person) {
		
		peopleService.add(person.getName(), person.getEmail());
		return peopleService.getAll();
	}
	
	@GetMapping("/clear")
	public List<Person> clear() {
		peopleService.clear();
		return peopleService.getAll();
	}
}
