package de.muenchen.zoo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Organization: HM FK07.
 * Project: zoo, de.muenchen.zoo.controller
 * Author(s): Rene Zarwel
 * Date: 14.01.18
 * OS: MacOS 10.11
 * Java-Version: 1.8
 * System: 2,3 GHz Intel Core i7, 16 GB 1600 MHz DDR3
 */
@Controller
public class ViewController {

    @RequestMapping({ "/animals", "/enclosures", "/keepers" })
    public String index() {
        return "forward:/index.html";
    }
}
