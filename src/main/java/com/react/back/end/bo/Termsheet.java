package com.react.back.end.bo;


public class Termsheet {
	private Long id;
	private String type;
	private String sousType;
	
	
	
	public Termsheet(Long id, String type, String sousType) {
		super();
		this.id = id;
		this.type = type;
		this.sousType = sousType;
	}

	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getType() {
		return type;
	}
	
	public void setType(String type) {
		this.type = type;
	}
	
	public String getSousType() {
		return sousType;
	}
	
	public void setSousType(String sousType) {
		this.sousType = sousType;
	}
	
	
}
