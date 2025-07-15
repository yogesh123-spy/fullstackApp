package com.person.details;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200") 
@RestController
@RequestMapping("/api/details")
public class PersonController {
	
	private final PersonRepository personRepository;

    public PersonController(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @GetMapping("/all")
    public List<Person> getAllPersonDetails() {
        return personRepository.findAll();
    }
    
    @PostMapping("/add")
    public Person createPersonDetail(@RequestBody Person person) {
        return personRepository.save(person);
    }
    
    @PostMapping("/delete")
    public ResponseEntity<Map<String, String>> removeEntry(@RequestBody Map<String, Long> payload) {
    	 Long id = payload.get("id");
    	if(!personRepository.existsById(id)) {
    		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("message", "User not found with id: " + id));
    	}
    	personRepository.deleteById(id);
    	return ResponseEntity.ok(Map.of("message", "User deleted successfully with id: " + id));
    }

}
