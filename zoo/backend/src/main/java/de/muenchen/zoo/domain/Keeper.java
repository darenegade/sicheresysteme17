package de.muenchen.zoo.domain;

import lombok.*;

import javax.persistence.*;
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
@Table(name = "Keeper")
public class Keeper extends BaseEntity {
    @NonNull
    @NotNull
    @Size(min = 3, max = 30)
    @Pattern(regexp = "([A-Za-zäöüßÄÖÜ]|\\s)+")
    String name;

    @NonNull
    @NotNull
    @Pattern(regexp = "data:image\\/(jpeg|png|jpg);base64,.*")
    String profileimg;

    @ManyToMany
    @JoinTable(
        name = "Keeper_Enclosures",
        joinColumns = {@JoinColumn(name = "keeper_id")},
        inverseJoinColumns = {@JoinColumn(name = "enclosure_id")})
    List<Enclosure> enclosures;
}
