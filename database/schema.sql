DROP DATABASE IF EXISTS dishPlease;

CREATE DATABASE dishPlease;

USE dishPlease;

CREATE TABLE roommates {
  id int NOT NULL AUTO_INCREMENT,
  name varchar(20) NOT NULL UNIQUE,
  PRIMARY KEY(id)
}

CREATE TABLE chores {
  id int NOT NULL AUTO_INCREMENT,
  name varchar(40) NOT NULL UNIQUE,
  assignee_id int,
  FOREIGN KEY(assignee) references roommates(id)
  PRIMARY KEY(id)
}

CREATE TABLE log {
  id int NOT NULL AUTO_INCREMENT,
  roommate_id int,
  chore_id int,
  date timestamp
  FOREIGN KEY(roommate_id) references roommates(id),
  FOREIGN KEY(chore_id) references chores(id)
  PRIMARY KEY(id)
}