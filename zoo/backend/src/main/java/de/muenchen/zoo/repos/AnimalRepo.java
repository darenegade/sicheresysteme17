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
@PreAuthorize("hasAuthority('READ')")
public interface AnimalRepo extends CrudRepository<Animal, Long> {

    @Override
    @PreAuthorize("hasAuthority('WRITE')")
    <S extends Animal> S save(S s);

    @Override
    @PreAuthorize("hasAuthority('WRITE')")
    <S extends Animal> Iterable<S> save(Iterable<S> iterable);

    @Override
    @PreAuthorize("hasAuthority('WRITE')")
    void delete(Long aLong);

    @Override
    @PreAuthorize("hasAuthority('WRITE')")
    void delete(Animal animal);

    @Override
    @PreAuthorize("hasAuthority('WRITE')")
    void delete(Iterable<? extends Animal> iterable);

    @Override
    @PreAuthorize("hasAuthority('WRITE')")
    void deleteAll();
}
