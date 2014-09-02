package com.gmail.tlachy.e2e.resources;

import java.util.concurrent.atomic.AtomicLong;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import com.codahale.metrics.annotation.Timed;
import com.gmail.tlachy.e2e.json.PersonProfile;
import com.google.common.base.Optional;


@Path("/person")
@Produces(MediaType.APPLICATION_JSON)
public class PersonResource {

	private static AtomicLong counter = new AtomicLong();

	public PersonResource(String someConfigurationOfResourceFromYaml) {
		someConfigurationOfResourceFromYaml = "maybe usefull for testing";
	}

	@GET
	@Timed
	@Path("/profile")
	public PersonProfile profile(@QueryParam("id") Optional<Long> id) {

		if (id.isPresent()) {
			// return profile for company with id = id
		}

		return new PersonProfile(id.or(counter.getAndIncrement()), "email@mail.com");
	}
}


