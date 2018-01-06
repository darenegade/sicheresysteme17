CREATE TABLE users (
  username VARCHAR_IGNORECASE(50)  NOT NULL PRIMARY KEY,
  password VARCHAR_IGNORECASE(255) NOT NULL,
  enabled  BOOLEAN                 NOT NULL
);

CREATE TABLE authorities (
  username  VARCHAR_IGNORECASE(50) NOT NULL,
  authority VARCHAR_IGNORECASE(50) NOT NULL,
  CONSTRAINT fk_authorities_users FOREIGN KEY (username) REFERENCES users (username)
);
CREATE UNIQUE INDEX ix_auth_username
  ON authorities (username, authority);

CREATE TABLE Animal (
  id          BIGINT(20)  NOT NULL AUTO_INCREMENT,
  name        VARCHAR(50) NOT NULL,
  type        VARCHAR(50) NOT NULL,
  profileimg  VARCHAR     NOT NULL,
  description VARCHAR(100),
  size        NUMBER,
  PRIMARY KEY (id),
);

CREATE TABLE Enclosure (
  id   BIGINT(20)  NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL UNIQUE,
  type VARCHAR(50) NOT NULL,
  size NUMBER,
  PRIMARY KEY (id),
);

CREATE TABLE Keeper (
  id         BIGINT(20)  NOT NULL AUTO_INCREMENT,
  name       VARCHAR(50) NOT NULL,
  profileimg VARCHAR     NOT NULL,
  PRIMARY KEY (id),
);

CREATE TABLE Enclosure_Animals (
  enclosure_id BIGINT(20) NOT NULL,
  animal_id    BIGINT(20) NOT NULL UNIQUE,
  PRIMARY KEY (enclosure_id, animal_id)
);

ALTER TABLE Enclosure_Animals
  ADD CONSTRAINT FK_enclosure_animals_TO_animal
FOREIGN KEY (animal_id)
REFERENCES Animal (id);

ALTER TABLE Enclosure_Animals
  ADD CONSTRAINT FK_enclosure_animals_TO_enclosure
FOREIGN KEY (enclosure_id)
REFERENCES Enclosure (id);

CREATE TABLE Keeper_Enclosures (
  enclosure_id BIGINT(20) NOT NULL,
  keeper_id    BIGINT(20) NOT NULL,
  PRIMARY KEY (enclosure_id, keeper_id)
);

ALTER TABLE Keeper_Enclosures
  ADD CONSTRAINT FK_keeper_enclosures_TO_enclosure
FOREIGN KEY (enclosure_id)
REFERENCES Enclosure (id);

ALTER TABLE Keeper_Enclosures
  ADD CONSTRAINT FK_keeper_enclosures_TO_keeper
FOREIGN KEY (keeper_id)
REFERENCES Keeper (id);