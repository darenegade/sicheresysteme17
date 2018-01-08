package de.muenchen.zoo.config;

import de.muenchen.zoo.domain.Animal;
import de.muenchen.zoo.domain.Enclosure;
import de.muenchen.zoo.domain.Keeper;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.stereotype.Component;

/**
 * Organization: HM FK07.
 * Project: zoo, de.muenchen.zoo.zoo.config
 * Author(s): Rene Zarwel
 * Date: 25.11.17
 * OS: MacOS 10.11
 * Java-Version: 1.8
 * System: 2,3 GHz Intel Core i7, 16 GB 1600 MHz DDR3
 */
@Component
public class CustomizedRestMvcConfiguration extends RepositoryRestConfigurerAdapter {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Animal.class);
        config.exposeIdsFor(Enclosure.class);
        config.exposeIdsFor(Keeper.class);

        config.setBasePath("/api");
    }
}
