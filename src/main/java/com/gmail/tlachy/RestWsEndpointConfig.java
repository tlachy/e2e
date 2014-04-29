package com.gmail.tlachy;

import org.glassfish.jersey.filter.LoggingFilter;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.server.ServerProperties;
import org.glassfish.jersey.server.TracingConfig;


public class RestWsEndpointConfig extends ResourceConfig {

    public RestWsEndpointConfig() {

        packages(HelloWorld.class.getPackage().getName());

        // Logging.
        register(LoggingFilter.class);

        // Tracing support.
        property(ServerProperties.TRACING, TracingConfig.ON_DEMAND.name());
    }
}
