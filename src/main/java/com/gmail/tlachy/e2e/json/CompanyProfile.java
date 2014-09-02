package com.gmail.tlachy.e2e.json;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

public class CompanyProfile {


	// I think we should have internal IDs generated (by increments) by db and IDs which are random number so some bitch cannot iterate over all ids and get our complete list of companies
	@JsonIgnore
	private long internal_id;

	@JsonProperty("company_id")
	private long id;

	@JsonProperty("company_short_name")
	private String companyShortName;

	@JsonProperty("company_full_name")
	private String companyFullName;

	@JsonProperty("company_email")
	@Email
	@Length(max = 50)
	private String companyEmail;


	public CompanyProfile() {
		// Jackson deserialization
	}

	public CompanyProfile(long id, String companyShortName, String companyFullName, String companyEmail) {
		this.id = id;
		this.companyShortName = companyShortName;
		this.companyFullName = companyFullName;
		this.companyEmail = companyEmail;
	}

	//region G&Ss
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCompanyShortName() {
		return companyShortName;
	}

	public void setCompanyShortName(String companyShortName) {
		this.companyShortName = companyShortName;
	}

	public String getCompanyFullName() {
		return companyFullName;
	}

	public void setCompanyFullName(String companyFullName) {
		this.companyFullName = companyFullName;
	}

	public String getCompanyEmail() {
		return companyEmail;
	}

	public void setCompanyEmail(String companyEmail) {
		this.companyEmail = companyEmail;
	}

	public long getInternal_id() {
		return internal_id;
	}

	public void setInternal_id(long internal_id) {
		this.internal_id = internal_id;
	}
	//endregion
}
