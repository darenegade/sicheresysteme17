package de.muenchen.zoo.controller;

import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Organization: HM FK07.
 * Project: zoo, de.muenchen.zoo.controller
 * Author(s): Rene Zarwel
 * Date: 13.01.18
 * OS: MacOS 10.11
 * Java-Version: 1.8
 * System: 2,3 GHz Intel Core i7, 16 GB 1600 MHz DDR3
 */
@RestController
public class ErrorHandlingController implements ErrorController {

    private static final String PATH = "/error";

    @RequestMapping(value = PATH)
    public String error() {
        return "<img src=\"https://media.giphy.com/media/3ohzdQ1IynzclJldUQ/source.gif\" width=\"50%\"></img>";
    }

    @Override
    public String getErrorPath() {
        return PATH;
    }
}
