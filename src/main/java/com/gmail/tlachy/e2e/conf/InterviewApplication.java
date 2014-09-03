package com.gmail.tlachy.e2e.conf;

import javax.ws.rs.ext.ExceptionMapper;

import com.gmail.tlachy.e2e.auth.openid.OpenIDAuthenticator;
import com.gmail.tlachy.e2e.auth.openid.OpenIDRestrictedToProvider;
import com.gmail.tlachy.e2e.json.User;
import com.gmail.tlachy.e2e.resources.CompanyResource;
import com.gmail.tlachy.e2e.resources.OpenIDResource;
import com.gmail.tlachy.e2e.resources.PersonResource;
import com.gmail.tlachy.e2e.resources.RuntimeExceptionMapperResource;
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

		OpenIDAuthenticator authenticator = new OpenIDAuthenticator();
		environment.jersey().register(new OpenIDRestrictedToProvider<User>(authenticator, "OpenID"));

		//////////////////
		// I would like to write it the way that later on one server can take care of just one resource
		//////////////////

		environment.jersey().setUrlPattern("/service/*");                                       //this is needed to set otherwise jetty cannot handle html at root (/*)

		final CompanyResource companyResource = new CompanyResource(configuration.getTemplate());
		final PersonResource personResource = new PersonResource(configuration.getTemplate());
		final OpenIDResource openIDResource = new OpenIDResource();
		final ExceptionMapper runtimeExceptionMapperResource = new RuntimeExceptionMapperResource();

		environment.jersey().register(companyResource);
		environment.jersey().register(personResource);
		environment.jersey().register(runtimeExceptionMapperResource);
		environment.jersey().register(openIDResource);
	}

	@Override
	public String getName() {
		return "Interview application";                                                         //localize - how to localize js and backend together
	}

	@Override
	public void initialize(Bootstrap<InterviewConfiguration> bootstrap) {
		bootstrap.addBundle(new AssetsBundle("/assets/", "/","html/common/index.html","html")); //this register servlet with /* mapping to handle html in src/java/main/resources/assets
	}

}
