<script setup lang="ts">
import { workouts } from "@/service/MyActivityService";
import axios from "axios";

async function reloadWorkouts() {
  const { data } = await axios.get(
    `https://fitness-app-api-s9v9.onrender.com/workout`
  );
  workouts.value = data;
}

reloadWorkouts();
</script>

<template>
  <!-- list of workouts -->
  <div class="box mt-5" v-if="workouts.length > 0">
    <article class="media" v-for="workout in workouts">
      <div class="media-content">
        <div class="content">
          <div class="level">
            <div class="level-left">
              <strong>{{ workout.name }}</strong>
              <small class="ml-1"> @{{ workout.user?.username }}</small>
            </div>
            <div class="level-right">
              Duration ({{ workout.duration }} mins)
            </div>
          </div>

          <div class="exercise-title has-text-weight-bold">
            <div>Exercise Name</div>
            <div class="has-text-centered">Sets</div>
            <div class="has-text-centered">Reps</div>
          </div>
          <nav class="exercise" v-for="exercise in workout.exercises">
            <div>{{ exercise.name }}</div>
            <div class="has-text-centered">{{ exercise.sets }}</div>
            <div class="has-text-centered">
              {{ exercise.reps }}
            </div>
          </nav>
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
    </article>
  </div>
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
