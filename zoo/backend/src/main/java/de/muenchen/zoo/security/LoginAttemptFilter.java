package de.muenchen.zoo.security;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.web.util.matcher.RequestMatcher;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Organization: HM FK07.
 * Project: zoo, de.muenchen.zoo.security
 * Author(s): Rene Zarwel
 * Date: 11.12.17
 * OS: MacOS 10.11
 * Java-Version: 1.8
 * System: 2,3 GHz Intel Core i7, 16 GB 1600 MHz DDR3
 */
public class LoginAttemptFilter extends OncePerRequestFilter {

    private LoginAttemptService loginAttemptService;

    private AuthenticationFailureHandler failureHandler = new SimpleUrlAuthenticationFailureHandler("/login?error");
    private RequestMatcher requestMatcher = new AntPathRequestMatcher("/login", "POST");

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        if (!requiresAuthentication(request)) {
            filterChain.doFilter(request, response);

            return;
        }

        if (loginAttemptService == null) {
            ServletContext servletContext = request.getServletContext();
            WebApplicationContext webApplicationContext = WebApplicationContextUtils.getWebApplicationContext(servletContext);
            loginAttemptService = webApplicationContext.getBean(LoginAttemptService.class);
        }

        if (loginAttemptService.isBlocked(getClientIP(request))) {

            SecurityContextHolder.clearContext();
            failureHandler.onAuthenticationFailure(request, response, new BlockedUserException());
            return;
        }

        filterChain.doFilter(request, response);
    }

    private String getClientIP(HttpServletRequest request) {
        String xfHeader = request.getHeader("X-Forwarded-For");
        if (xfHeader == null) {
            return request.getRemoteAddr();
        }
        return xfHeader.split(",")[0];
    }

    protected boolean requiresAuthentication(HttpServletRequest request) {
        return requestMatcher.matches(request);
    }
}