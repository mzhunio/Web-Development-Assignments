<script setup lang="ts">
import router from "@/router";
import { users } from "@/state/user";
import { friendsActivityWorkouts } from "@/state/workout";

function goToWorkout(username: string) {
  router.push("/friendsActivity/workout/" + username);
}
</script>

<template>
  <div class="columns is-justify-content-center mt-5">
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

      <!-- <div v-for="friend in users">
        <div class="box">
          <article class="media">
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
                <p>
                  <strong>{{ friend.id }} {{ friend.username }}</strong
                  ><small></small>
                  <small>31m</small>
                  <button class="button is-link is-light ml-6">
                    <small @click="goToWorkout(friend.username)"
                      >See Workouts</small
                    >
                  </button>
                </p>
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
      </div> -->
    </div>
  </div>
  <!-- <div v-for="friend in friends">
    <h1>{{ friend.username }}</h1>
    <h1>{{ friend.somethingElse }}</h1>
    <button @click="goToWorkout(friend.username)">{{ friend.username }}</button>
  </div> -->
</template>

<style scoped></style>
