package com.gmail.tlachy.e2e.json;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;


public class PersonProfile {

	// I think we should have internal IDs generated (by increments) by db and IDs which are random number so some bitch cannot iterate over all ids and get our complete list of companies
	@JsonIgnore
	private long internal_id;

	@JsonProperty("user_id")
	private long id;

	@JsonProperty("first_name")
	private String firstName;

	@JsonProperty("last_name")
	private String lastName;

	@Email
	@Length(max = 30)
	@JsonProperty("user_email")
	private String email;


	public PersonProfile() {
		// Jackson deserialization
	}

	public PersonProfile(long id, String email) {
		this.id = id;
		this.email = email;
	}



	//region J&Ss
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	//endregion
}