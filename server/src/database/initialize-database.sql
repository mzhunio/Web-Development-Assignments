CREATE DATABASE IF NOT EXISTS fitness;

USE fitness;

CREATE TABLE IF NOT EXISTS User (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  isAdmin BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS Exercise (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    exerciseName VARCHAR (255) NOT NULL,
    sets INT NULL, 
    repetitions INT NULL
);

CREATE TABLE IF NOT EXISTS Workout (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (30) NOT NULL,
    duration VARCHAR(30) NULL,
    userId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES User(id)
);

INSERT INTO User (username, email, password, isAdmin) VALUES
("john", "john@fitnessapp.com", "123", false);

INSERT INTO Workout (name, duration, userId) VALUES 
("Workout #1", "1 hr", LAST_INSERT_ID()),
("Workout #2", "30 mins", LAST_INSERT_ID());

INSERT INTO User (username, email, password, isAdmin) VALUES
("maria", "maria@fitnessapp.com", "123", false);

INSERT INTO Workout (name, duration, userId) VALUES 
("Workout #3", "1 hr 5 mins", LAST_INSERT_ID()),
("Workout #4", "25 mins", LAST_INSERT_ID());