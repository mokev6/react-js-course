package com.react.back.end.configuration;

import java.util.Locale;

import org.springframework.context.annotation.Bean;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.web.servlet.i18n.CookieLocaleResolver;

@org.springframework.context.annotation.Configuration
public class Configuration {

	@Bean
	public CookieLocaleResolver localeResolver() {
		CookieLocaleResolver clr = new CookieLocaleResolver();
		clr.setCookieName("i18next");
	    clr.setDefaultLocale(Locale.ENGLISH);
	    return clr;
	}
	
	
	@Bean
    public ResourceBundleMessageSource messageSource() {
        final ResourceBundleMessageSource source = new ResourceBundleMessageSource();
        source.setBasename("lang/messages");
        return source;
    }
}
