package de.muenchen.zoo.security;

import org.springframework.security.core.AuthenticationException;

/**
 * Organization: HM FK07.
 * Project: zoo, de.muenchen.zoo.security.authentication
 * Author(s): Rene Zarwel
 * Date: 11.12.17
 * OS: MacOS 10.11
 * Java-Version: 1.8
 * System: 2,3 GHz Intel Core i7, 16 GB 1600 MHz DDR3
 */
public class BlockedUserException extends AuthenticationException {

    public static final String USER_IS_BLOCKED =
            LoginAttemptService.MAX_ATTEMPT + " attempts exceeded. User is blocked for " +
                    LoginAttemptService.BLOCK_TIME + " Minutes";

    public BlockedUserException(Throwable t) {
        super(USER_IS_BLOCKED, t);
    }

    public BlockedUserException() {
        super(USER_IS_BLOCKED);
    }
}
