package com.gmail.tlachy.e2e.conf;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.dropwizard.Configuration;

public class InterviewConfiguration extends Configuration {

	public static final String SESSION_TOKEN_NAME ="OpenIDDemo-Session";

//
//	 These properties are read from yaml file submited as program parameter when starting the jar file
//

	//@NotEmpty
	@JsonProperty
	private String template;


	//region G&Ss
	public String getTemplate() {
		return template;
	}
	public void setTemplate(String template) {
		this.template = template;
	}

	//endregion
}
