package com.gmail.tlachy.e2e.resources;

import java.util.concurrent.atomic.AtomicLong;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.codahale.metrics.annotation.Timed;
import com.gmail.tlachy.e2e.json.CompanyProfile;


@Path("/company")
@Produces(MediaType.APPLICATION_JSON)
public class CompanyResource {

	private static AtomicLong counter = new AtomicLong();

	public CompanyResource(String someConfigurationOfResourceFromYaml) {
		someConfigurationOfResourceFromYaml = "maybe usefull for testing";
	}

	@GET
	@Timed
	@Path("/{company_id}/profile")
	public CompanyProfile getProfile(@PathParam("company_id") long companyId) {

		if (companyId != 0) {
			// return profile for company with id = id
		}
		return new CompanyProfile(counter.getAndIncrement(),"short name", "full name", "email@neco.cz");
	}

	@GET
	@Timed
	@Path("/{company_id}/interview/{interview_id}")
	public CompanyProfile getInterview(@PathParam("company_id") long companyId, @PathParam("interview_id") long interviewId) {

		if (companyId != 0) {
			// return profile for company with id = id
		}
		return new CompanyProfile(counter.getAndIncrement(),"short name", "full name", "email@neco.cz");
	}

}