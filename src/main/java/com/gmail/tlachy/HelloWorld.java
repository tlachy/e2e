package com.gmail.tlachy;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;


@Path("/helloworld")
public class HelloWorld {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getHello() {
        return "Hello from B2B";
    }

} 