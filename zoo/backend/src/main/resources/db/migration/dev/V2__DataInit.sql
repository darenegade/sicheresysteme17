INSERT INTO Animal (id,name, type, weight) VALUES (1, 'Paulchen', 'Katze', 5.5);
INSERT INTO Animal (id, name, type, weight) VALUES (2, 'Hans', 'Ente', 3.4);
INSERT INTO Animal (id,name, type, weight) VALUES (3, 'Robert', 'Roter Panda', 8.3);

INSERT INTO Enclosure(id, name, type, size) VALUES (1, 'Innen Gehege', 'Jungel', 5);
INSERT INTO Enclosure(id, name, type, size) VALUES (2, 'Außen Gehege', 'Mischgehege', 10);

INSERT INTO Keeper (id, name) VALUES (1, 'Rene');
INSERT INTO Keeper (id, name) VALUES (2, 'Stefan');

INSERT INTO Enclosure_Animals (enclosure_id, animal_id) VALUES (1, 1);
INSERT INTO Enclosure_Animals (enclosure_id, animal_id) VALUES (2, 2);
INSERT INTO Enclosure_Animals (enclosure_id, animal_id) VALUES (2, 3);

INSERT INTO Keeper_Enclosures (keeper_id, enclosure_id) VALUES (1, 1);
INSERT INTO Keeper_Enclosures (keeper_id, enclosure_id) VALUES (2, 2);


