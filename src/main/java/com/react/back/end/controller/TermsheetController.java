package com.react.back.end.controller;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.web.bind.annotation.*;

import com.react.back.end.bo.Termsheet;
import com.react.back.end.exception.TermsheetNotFoundException;

@RestController
@CrossOrigin(value="*")
@RequestMapping("/api/termsheet")
public class TermsheetController {
	
	private static Map<Long, Termsheet> map = new HashMap<Long, Termsheet>();
	
	@Autowired
	private MessageSource messageSource;

	@GetMapping("/{id}")
	public Termsheet findById(@PathVariable("id") Long id,
							  Locale locale) {
		System.out.println(messageSource.getMessage("test.welcome", null, locale));
		
		Termsheet t1 = new Termsheet(1L, messageSource.getMessage("type", null, locale) + " 1", messageSource.getMessage("sous.type", null, locale) + " 1");
		Termsheet t2 = new Termsheet(2L, messageSource.getMessage("type", null, locale) + " 2", messageSource.getMessage("sous.type", null, locale) + " 2");
		Termsheet t3 = new Termsheet(3L, messageSource.getMessage("type", null, locale) + " 3", messageSource.getMessage("sous.type", null, locale) + " 3");
		map.put(1L, t1);
		map.put(2L, t2);
		map.put(3L, t3);
		
		return Optional.ofNullable(map.get(id)).orElseThrow(() -> new TermsheetNotFoundException(id));
		
	}
}
