package com.react.back.end.exception;


public class TermsheetNotFoundException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public TermsheetNotFoundException(Long id) {
		super("Not present " + id);
	}
}
