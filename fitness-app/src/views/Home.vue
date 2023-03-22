<script setup lang="ts">
let count = 0;
</script>

<template>
  <div class="container">
    <div class="column">
        <div class="box">
        <h2 class="tittle">Today</h2>
        <div class="columns is-mobile is-centered is-multiline">
            <div class="column is-half">
              <h3 class="value">Arm Day</h3>
              <caption class="caption">
                Exercise Name
              </caption>
            </div>
            <div class="column is-half">
              <h3 class="value">40 min</h3>
              <caption class="caption">
                Duration
              </caption>
            </div>
            <div class="column is-half">
              <h3 class="value">1000</h3>
              <caption class="caption">
                Calories
              </caption>
            </div>
            <div class="column is-half">
              <h3 class="value">1.5</h3>
              <caption class="caption">
                Ave Page
              </caption>
            </div>
        </div>
      </div>

      <div class="box">
        <h2 class="tittle">Last Week</h2>
        <div class="columns is-mobile is-centered is-multiline">
            <div class="column is-half">
              <h3 class="value">Leg Day</h3>
              <caption class="caption">
               Exercise Name
              </caption>
            </div>
            <div class="column is-half">
              <h3 class="value">2 Hours</h3>
              <caption class="caption">
                Duration
              </caption>
            </div>
            <div class="column is-half">
              <h3 class="value">1000</h3>
              <caption class="caption">
                Calories
              </caption>
            </div>
            <div class="column is-half">
              <h3 class="value">1.5</h3>
              <caption class="caption">
                Ave Page
              </caption>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  margin-top: 60px;
  height: 100%;
}

.columns {
  display: block;
  padding: 2;
  padding: 0.75%;
}
.columns:not(.is-desktop) {
  display: flex;
}

</style>
