package de.muenchen.zoo.repos;

import de.muenchen.zoo.domain.Animal;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

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
@PreAuthorize("hasRole('READ')")
public interface AnimalRepo extends CrudRepository<Animal, Long> {

    @Override
    @PreAuthorize("hasRole('WRITE')")
    <S extends Animal> S save(S s);

    @Override
    @PreAuthorize("hasRole('WRITE')")
    <S extends Animal> Iterable<S> save(Iterable<S> iterable);

    @Override
    @PreAuthorize("hasRole('WRITE')")
    void delete(Long aLong);

    @Override
    @PreAuthorize("hasRole('WRITE')")
    void delete(Animal animal);

    @Override
    @PreAuthorize("hasRole('WRITE')")
    void delete(Iterable<? extends Animal> iterable);

    @Override
    @PreAuthorize("hasRole('WRITE')")
    void deleteAll();
}
