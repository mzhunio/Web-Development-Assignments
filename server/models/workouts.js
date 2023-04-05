const data = require("../data/workouts.json");

function getWorkouts() {
  data.getWorkouts;
}

function getWorkoutsById(id) {
  return data.workouts.find((workouts) => workouts.id === id);
}

function addWorkout(workout) {
  workout.id = data.workout.length + 1;
  data.workouts.push(workout);
}

function updateWorkout(workout) {
  const index = data.workout.findIndex((w) => w.id === workout.id);
  data.workouts[index] = workout;
}

function deleteWorkout(id) {
  const index = data.workouts.findIndex((w) => w.id === id);
  data.workouts.splice(index, 1);
}

function searchWorkouts(searchTerm) {
  return data.workouts.filter((workout) => {
    return (
      workout.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
}

module.exports = {
  getWorkouts,
  getWorkoutsById,
  addWorkout,
  updateWorkout,
  deleteWorkout,
  searchWorkouts,
};
