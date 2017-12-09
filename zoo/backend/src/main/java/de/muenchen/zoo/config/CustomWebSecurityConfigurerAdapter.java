package de.muenchen.zoo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * Organization: HM FK07.
 * Project: zoo, de.muenchen.zoo.config
 * Author(s): Rene Zarwel
 * Date: 09.12.17
 * OS: MacOS 10.11
 * Java-Version: 1.8
 * System: 2,3 GHz Intel Core i7, 16 GB 1600 MHz DDR3
 */
@Configuration
@EnableWebSecurity
public class CustomWebSecurityConfigurerAdapter extends WebSecurityConfigurerAdapter {

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser("leiter").password("1234")
                .authorities("ROLE_READ", "ROLE_WRITE")
                .and()
                .withUser("pfleger").password("4321")
                .authorities("ROLE_READ");

    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests().anyRequest()
                .authenticated()
                .and()
                .httpBasic();

        http.csrf()
                .disable();
        //    Until Angular impl. matches the Spring way
        //  .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
    }
}