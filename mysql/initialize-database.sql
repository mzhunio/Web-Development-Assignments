Active: 1680705093392@@127.0.0.1@3306@fitness_app

CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR (25) NOT NULL UNIQUE,
    email VARCHAR (50) NOT NULL UNIQUE,
    password VARCHAR (50) NOT NULL,
    is_admin BOOLEAN 
);

CREATE TABLE exercises(
    id INT AUTO_INCREMENT PRIMARY KEY,
    exercise_name VARCHAR (50) NOT NULL,
    sets INT NOT NULL, 
    repetitions int NOT NULL
);

CREATE TABLE workouts(
    id INT AUTO_INCREMENT PRIMARY KEY,
    exercise_id INT,
    workout_name VARCHAR (30) NOT NULL,
    duration VARCHAR(30),
    FOREIGN KEY (exercise_id) REFERENCES exercises(id)
);