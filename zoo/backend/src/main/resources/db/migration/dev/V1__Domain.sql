CREATE TABLE Animal (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  type varchar(50) NOT NULL,
  weight number,
  PRIMARY KEY (id),
);

CREATE TABLE Enclosure (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL UNIQUE,
  type varchar(50) NOT NULL,
  size number,
  PRIMARY KEY (id),
);

CREATE TABLE Keeper (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  PRIMARY KEY (id),
);

create table Enclosure_Animals (
  enclosure_id bigint(20) NOT NULL,
  animal_id bigint(20) NOT NULL UNIQUE,
  primary key ( enclosure_id, animal_id)
);

alter table Enclosure_Animals
  add constraint FK_enclosure_animals_TO_animal
foreign key (animal_id)
references Animal(id);

alter table Enclosure_Animals
  add constraint FK_enclosure_animals_TO_enclosure
foreign key (enclosure_id)
references Enclosure(id);

create table Keeper_Enclosures (
  enclosure_id bigint(20) NOT NULL,
  keeper_id bigint(20) NOT NULL,
  primary key ( enclosure_id, keeper_id)
);

alter table Keeper_Enclosures
  add constraint FK_keeper_enclosures_TO_enclosure
foreign key (enclosure_id)
references Enclosure(id);

alter table Keeper_Enclosures
  add constraint FK_keeper_enclosures_TO_keeper
foreign key (keeper_id)
references Keeper(id);