<script setup lang="ts">
import { onDeleteWorkout } from "@/state/modal";
import router from "@/router";
import { users } from "@/state/user";
import { friendsActivityWorkouts, workout } from "@/state/workout";

function goToWorkout(username: string) {
  router.push("/friendsActivity/workout/" + username);
}
</script>

<template>
  <!-- list of workouts -->
  <div class="box mt-5">
    <article class="media" v-for="user in friendsActivityWorkouts">
      <div class="media-left">
        <figure class="image is-64x64">
          <img
            src="https://bulma.io/images/placeholders/128x128.png"
            alt="Image"
          />
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <div class="level">
            <div class="level-left">
              <strong>{{ user.username }}</strong>
            </div>
            <div class="level-right" v-for="workout in user.workouts">
              Workout Name ({{ workout.workoutName }})
            </div>
          </div>
          <div v-for="exercise in workout.exercises">
            <div class="exercise-title has-text-weight-bold">
              <div>Exercise Name</div>
              <div class="has-text-centered">Sets</div>
              <div class="has-text-centered">Reps</div>
            </div>
            <nav class="exercise">
              <div>{{ exercise.exerciseName }}</div>
              <div class="has-text-centered">{{ exercise.repetitions }}</div>
              <div class="has-text-centered">
                {{ exercise.repetitions }}
              </div>
            </nav>
          </div>
        </div>

        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item" aria-label="reply">
              <span class="icon is-small">
                <i class="fas fa-reply" aria-hidden="true"></i>
              </span>
            </a>
            <a class="level-item" aria-label="retweet">
              <span class="icon is-small">
                <i class="fas fa-retweet" aria-hidden="true"></i>
              </span>
            </a>
            <a class="level-item" aria-label="like">
              <span class="icon is-small">
                <i class="fas fa-heart" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </nav>
      </div>
      <div class="media-right">
        <button class="delete"></button>
      </div>
    </article>
  </div>

  <!-- <div class="columns is-justify-content-center mt-5">
    <div class="column is-half-tablet is-one-quarter">
      <div v-for="user in friendsActivityWorkouts">
        {{ user.username }}
        <div v-for="workout in user.workouts">
          {{ workout.workoutName }}
          <div v-for="exercise in workout.exercises">
            {{ exercise.exerciseName }}
          </div>
        </div>
      </div>
    </div>
  </div>   -->
</template>

<style scoped>
.exercise-title,
.exercise {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
}

.exercise-list {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
}
</style>
