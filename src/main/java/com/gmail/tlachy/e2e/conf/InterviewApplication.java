package com.gmail.tlachy.e2e.conf;

import com.gmail.tlachy.e2e.resources.CompanyResource;
import com.gmail.tlachy.e2e.resources.PersonResource;
import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;

public class InterviewApplication extends Application<InterviewConfiguration>  {

	public static void main(String[] args) throws Exception {
		new InterviewApplication().run(args);
	}

	@Override
	public void run(InterviewConfiguration configuration, Environment environment) {

		//////////////////
		// I would like to write it the way that later one server can take care of just one resource
		//////////////////

		final CompanyResource companyResource = new CompanyResource(configuration.getTemplate());
		final PersonResource personResource = new PersonResource(configuration.getTemplate());

		// registering resources and other stuff
		environment.jersey().register(companyResource);
		environment.jersey().register(personResource);
	}

	@Override
	public String getName() {
		return "Interview application"; //localize - how to localize js and backend together
	}

	@Override
	public void initialize(Bootstrap<InterviewConfiguration> bootstrap) {

		//This tells Dropwizard that we want to take resources stored under /src/main/resources/assets and serve them
		// from the root of our application (/) and that we want index.html to be the default index file name.
		bootstrap.addBundle(new AssetsBundle("/assets/", "/", "index.html"));
	}



}
