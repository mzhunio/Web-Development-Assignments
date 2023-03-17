<script setup lang="ts"></script>

<template>
  <div class="myActivity">
    <div class="container">
      <div class="columns is-justify-content-center">
        <div
          class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen"
        >
          <button class="button is-warning is-focused is-fullwidth">
            Create Workout
          </button>
          <form>
            <div class="modal">
                <div class="block">
                  This text is within a <strong>block</strong>.
                </div>
                <div class="block">
                  This text is within a <strong>second block</strong>. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                  efficitur sit amet massa fringilla egestas. Nullam condimentum
                  luctus turpis.
                </div>
                <div class="block">
                  This text is within a <strong>third block</strong>. This block
                  has no margin at the bottom.
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.myActivity {
  display: inline;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
}

.button {
  width: 100%;
}
</style>
