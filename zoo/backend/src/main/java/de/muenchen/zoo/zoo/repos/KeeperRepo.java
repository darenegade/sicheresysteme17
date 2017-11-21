package de.muenchen.zoo.zoo.repos;

import de.muenchen.zoo.zoo.domain.Keeper;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Organization: HM FK07.
 * Project: zoo, de.muenchen.zoo.zoo.repos
 * Author(s): Rene Zarwel
 * Date: 21.11.17
 * OS: MacOS 10.11
 * Java-Version: 1.8
 * System: 2,3 GHz Intel Core i7, 16 GB 1600 MHz DDR3
 */
@RepositoryRestResource
public interface KeeperRepo extends CrudRepository<Keeper, Long> {
}
