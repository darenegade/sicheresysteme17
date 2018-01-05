CREATE TABLE animal (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  type varchar(50) NOT NULL,
  profileimg text(65000) NOT NULL,
  description varchar(100),
  size INT,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

CREATE TABLE enclosure (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL UNIQUE,
  type varchar(50) NOT NULL,
  size INT,
  PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

CREATE TABLE keeper (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  profileimg text(65000) NOT NULL,
  PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

create table enclosure_animals (
  enclosure_id bigint(20) NOT NULL,
  animal_id bigint(20) NOT NULL UNIQUE,
  primary key ( enclosure_id, animal_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

alter table enclosure_animals
  add constraint FK_enclosure_animals_TO_animal
foreign key (animal_id)
references animal(id);

alter table enclosure_animals
  add constraint FK_enclosure_animals_TO_enclosure
foreign key (enclosure_id)
references enclosure(id);

create table keeper_enclosures (
  enclosure_id bigint(20) NOT NULL,
  keeper_id bigint(20) NOT NULL,
  primary key ( enclosure_id, keeper_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

alter table keeper_enclosures
  add constraint FK_keeper_enclosures_TO_enclosure
foreign key (enclosure_id)
references enclosure(id);

alter table keeper_enclosures
  add constraint FK_keeper_enclosures_TO_keeper
foreign key (keeper_id)
references keeper(id);