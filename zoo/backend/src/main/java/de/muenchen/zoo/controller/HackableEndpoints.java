package de.muenchen.zoo.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.muenchen.zoo.domain.Animal;
import de.muenchen.zoo.repos.AnimalRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

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
@RequestMapping("/api")
public class HackableEndpoints {

    @Autowired
    AnimalRepo animalRepo;

    @Autowired
    ObjectMapper mapper;

    @PostMapping(path = "/animal", consumes = MediaType.TEXT_PLAIN_VALUE)
    public String saveAnimal(@RequestBody String animalString) throws Exception {

        Animal animal = mapper.readValue(animalString, Animal.class);

        animalRepo.save(animal);

        return "";
    }

}
