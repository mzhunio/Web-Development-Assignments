<script setup lang="ts"></script>

<template>
  <div id="add-workout" class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Create Workout</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body"></section>
      <div class="field">
        <label class="label">Workout Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input" />
        </div>
      </div>

      <div class="field">
        <label class="label">Sets</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input" />
        </div>
      </div>

      <div class="field">
        <label class="label">Repetitions</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input" />
        </div>
      </div>

      <div class="field">
        <label class="label">Weight</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input" />
        </div>
      </div>

      <footer class="modal-card-foot">
        <button class="button is-success">Save changes</button>
        <button class="button">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<style scoped></style>
