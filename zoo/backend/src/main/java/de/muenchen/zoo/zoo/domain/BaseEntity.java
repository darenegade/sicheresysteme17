package de.muenchen.zoo.zoo.domain;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import java.io.Serializable;

/**
 * Organization: HM FK07.
 * Project: zoo, de.muenchen.zoo.zoo.domain
 * Author(s): Rene Zarwel
 * Date: 21.11.17
 * OS: MacOS 10.11
 * Java-Version: 1.8
 * System: 2,3 GHz Intel Core i7, 16 GB 1600 MHz DDR3
 */
@MappedSuperclass
@Data
public abstract class BaseEntity implements Cloneable, Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Override
    public Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}