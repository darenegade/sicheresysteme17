package de.muenchen.zoo.domain;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.List;

/**
 * Organization: HM FK07.
 * Project: zoo, de.muenchen.zoo.zoo.domain
 * Author(s): Rene Zarwel
 * Date: 21.11.17
 * OS: MacOS 10.11
 * Java-Version: 1.8
 * System: 2,3 GHz Intel Core i7, 16 GB 1600 MHz DDR3
 */
@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "Enclosure")
public class Enclosure extends BaseEntity {

    @NonNull
    @NotNull
    @Size(min = 3, max = 30)
    @Pattern(regexp = "([A-Za-zäöüßÄÖÜ]|\\s)+")
    String name;

    @NonNull
    @NotNull
    @Size(min = 3, max = 30)
    @Pattern(regexp = "([A-Za-zäöüßÄÖÜ]|\\s)+")
    String type;

    @Min(0)
    int size;

    @OneToMany
    @JoinTable(
        name = "Enclosure_Animals",
        joinColumns = { @JoinColumn(name = "enclosure_id")},
        inverseJoinColumns = {@JoinColumn(name="animal_id")})
    List<Animal> animals;
}
