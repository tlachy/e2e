package com.gmail.tlachy.e2e.auth.openid;

import com.gmail.tlachy.e2e.auth.annotation.RestrictedTo;
import com.sun.jersey.api.model.Parameter;
import com.sun.jersey.core.spi.component.ComponentContext;
import com.sun.jersey.core.spi.component.ComponentScope;
import com.sun.jersey.spi.inject.Injectable;
import com.sun.jersey.spi.inject.InjectableProvider;
import io.dropwizard.auth.Authenticator;


/**
 * <p>Authentication provider to provide the following to Jersey:</p>
 * <ul>
 * <li>Bridge between Dropwizard and Jersey for HMAC authentication</li>
 * <li>Provides additional {@link com.gmail.tlachy.e2e.auth.Authority} information</li>
 * </ul>
 *
 * @param <T> the principal type.
 * @since 0.0.1
 */
public class OpenIDRestrictedToProvider<T> implements InjectableProvider<RestrictedTo, Parameter> {

	private final Authenticator<OpenIDCredentials, T> authenticator;

	private final String realm;

	/**
	 * Creates a new {@link OpenIDRestrictedToProvider} with the given {@link io.dropwizard.auth.Authenticator} and realm.
	 *
	 * @param authenticator the authenticator which will take the {@link OpenIDCredentials} and
	 *                      convert them into instances of {@code T}
	 * @param realm         the name of the authentication realm
	 */
	public OpenIDRestrictedToProvider(Authenticator<OpenIDCredentials, T> authenticator, String realm) {
		this.authenticator = authenticator;
		this.realm = realm;
	}

	@Override
	public ComponentScope getScope() {
		return ComponentScope.PerRequest;
	}

	@Override
	public Injectable<?> getInjectable(ComponentContext ic, RestrictedTo a, Parameter c) {
		return new OpenIDRestrictedToInjectable<T>(authenticator, realm, a.value());
	}
}

