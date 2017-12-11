package de.muenchen.zoo.domain;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

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
@Table(name = "Animal")
public class Animal extends BaseEntity {
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

    @NonNull
    @NotNull
    @Pattern(regexp = "data:image\\/(jpeg|png|jpg);base64,.*")
    String profileimg;

    @Size(max = 50)
    @Pattern(regexp = "([A-Za-zäöüßÄÖÜ]|\\s)+")
    String description;

    @Min(0)
    double size;
}
