DROP DATABASE IF EXISTS dishPlease;

CREATE DATABASE dishPlease;

USE dishPlease;

CREATE TABLE roommates (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(20) NOT NULL UNIQUE,
  PRIMARY KEY(id)
);

CREATE TABLE chores (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(40) NOT NULL UNIQUE,
  assignee_id int,
  FOREIGN KEY(assignee_id) references roommates(id),
  PRIMARY KEY(id)
);

CREATE TABLE log (
  id int NOT NULL AUTO_INCREMENT,
  roommate_id int,
  chore_id int,
  date timestamp,
  FOREIGN KEY(roommate_id) references roommates(id),
  FOREIGN KEY(chore_id) references chores(id),
  PRIMARY KEY(id)
);

INSERT INTO roommates (id, name) VALUES (1, 'Annie');
INSERT INTO roommates (id, name) VALUES (2, 'Nora');

INSERT INTO chores (id, name, assignee_id) VALUES (1, 'Dishes', 1);
INSERT INTO chores (id, name, assignee_id) VALUES (2, 'Take out the trash', 2);
INSERT INTO chores (id, name, assignee_id) VALUES (3, 'Laundry', 1);
INSERT INTO chores (id, name, assignee_id) VALUES (4, 'Vacuum/Sweep', 2);

INSERT INTO log (id, roommate_id, chore_id, date) VALUES (1, 1, 1, '2021-10-12 07:31:14');
INSERT INTO log (id, roommate_id, chore_id, date) VALUES (2, 2, 1, '2021-10-13 16:04:32');
INSERT INTO log (id, roommate_id, chore_id, date) VALUES (3, 2, 2, '2021-10-09 17:34:09');
INSERT INTO log (id, roommate_id, chore_id, date) VALUES (4, 1, 2, '2021-10-12 09:02:07');
INSERT INTO log (id, roommate_id, chore_id, date) VALUES (5, 1, 3, '2021-10-06 10:29:29');
INSERT INTO log (id, roommate_id, chore_id, date) VALUES (6, 2, 3, '2021-10-13 19:04:59');
INSERT INTO log (id, roommate_id, chore_id, date) VALUES (7, 2, 4, '2021-10-08 18:41:44');
INSERT INTO log (id, roommate_id, chore_id, date) VALUES (8, 1, 4, '2021-10-13 11:01:17');