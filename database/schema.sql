DROP DATABASE IF EXISTS dishPlease;

CREATE DATABASE dishPlease;

USE dishPlease;

CREATE TABLE roommates (
  name varchar(20) NOT NULL UNIQUE,
  PRIMARY KEY(name)
);

CREATE TABLE chores (
  name varchar(40) NOT NULL UNIQUE,
  assignee varchar(20),
  FOREIGN KEY(assignee) references roommates(name),
  PRIMARY KEY(name)
);

CREATE TABLE log (
  id int NOT NULL AUTO_INCREMENT,
  roommate varchar(20),
  chore varchar(40),
  date timestamp,
  FOREIGN KEY(roommate) references roommates(name),
  FOREIGN KEY(chore) references chores(name),
  PRIMARY KEY(id)
);

INSERT INTO roommates (name) VALUES ('Annie');
INSERT INTO roommates (name) VALUES ('Nora');

INSERT INTO chores (name, assignee) VALUES ('Dishes', 'Annie');
INSERT INTO chores (name, assignee) VALUES ('Take out the trash', 'Nora');
INSERT INTO chores (name, assignee) VALUES ('Laundry', 'Annie');
INSERT INTO chores (name, assignee) VALUES ('Vacuum/Sweep', 'Nora');

INSERT INTO log (id, roommate, chore, date) VALUES (1, 'Annie', 'Dishes', '2021-10-12 07:31:14');
INSERT INTO log (id, roommate, chore, date) VALUES (2, 'Nora', 'Dishes', '2021-10-13 16:04:32');
INSERT INTO log (id, roommate, chore, date) VALUES (3, 'Nora', 'Take out the trash', '2021-10-09 17:34:09');
INSERT INTO log (id, roommate, chore, date) VALUES (4, 'Annie', 'Take out the trash', '2021-10-12 09:02:07');
INSERT INTO log (id, roommate, chore, date) VALUES (5, 'Annie', 'Laundry', '2021-10-06 10:29:29');
INSERT INTO log (id, roommate, chore, date) VALUES (6, 'Nora', 'Laundry', '2021-10-13 19:04:59');
INSERT INTO log (id, roommate, chore, date) VALUES (7, 'Nora', 'Vacuum/Sweep', '2021-10-08 18:41:44');
INSERT INTO log (id, roommate, chore, date) VALUES (8, 'Annie', 'Vacuum/Sweep', '2021-10-13 11:01:17');