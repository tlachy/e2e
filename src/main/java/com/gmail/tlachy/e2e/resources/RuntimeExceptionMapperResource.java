package com.gmail.tlachy.e2e.resources;

import static javax.ws.rs.core.Response.Status.*;

import java.net.URI;
import java.net.URISyntaxException;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class RuntimeExceptionMapperResource implements ExceptionMapper<RuntimeException> {

	private static final Logger log = LoggerFactory.getLogger(RuntimeExceptionMapperResource.class);

	private static final URI ERROR_500 = initUri(500); // new URI throws checked exception thus this hack

	private static final URI ERROR_401 = initUri(401);

	private static final URI ERROR_404 = initUri(404);




	@Override
	public Response toResponse(RuntimeException runtime) {

		Response defaultResponse = Response.serverError().location(ERROR_500).build();

		if (runtime instanceof WebApplicationException) {
			return handleWebApplicationException(runtime, defaultResponse);
		}

		log.error(runtime.getMessage(), runtime);
		return defaultResponse;
	}

	private Response handleWebApplicationException(RuntimeException exception, Response defaultResponse) {
		WebApplicationException webAppException = (WebApplicationException) exception;
		final int status = webAppException.getResponse().getStatus();

		if (status == UNAUTHORIZED.getStatusCode()) {
			return  Response.seeOther(ERROR_401).build();
		}

		if (status == NOT_FOUND.getStatusCode()) {
			return Response.seeOther(ERROR_404).build();
		}

		log.error(exception.getMessage(), exception);
		return defaultResponse;
	}





	private static URI initUri(int code) {
		try {
			switch (code) {
				case 500:
					return new URI("../html/common/500.html");  // without ".." at the begginig it looks for /service/html/common/500.html
				case 401:
					return new URI("../html/common/401.html");
				case 404:
					return new URI("../html/common/404.html");
			}

		} catch (URISyntaxException e) {
			log.error(" THIS SHOULD NEVER HAPPEN", e);
			throw new RuntimeException();
		}
		log.error(" THIS SHOULD NEVER HAPPEN");
		throw new RuntimeException();
	}

}
