<script setup lang="ts">
function addWorkout() {
  console.log(true);
}

function onSave() {}
</script>

<template>
  <div class="myActivity">
    <div class="container">
      <div class="columns is-justify-content-center">
        <div
          class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen"
        >
          <button
            type="button"
            class="button is-warning is-focused is-fullwidth"
            data-toggle="modal"
            data-target="add-workout"
          >
            Create Workout
          </button>

          <div id="add-workout" class="modal" role="dialog">
            <div class="modal-dialog">
              <div class="modal-card">
                <header class="modal-card-head">
                  <p class="modal-card-title">Create Workout</p>
                  <button class="close" type="button" data-dismiss="modal">
                    &times;
                  </button>
                </header>
                <section class="modal-card-body"></section>
                <form id="contact-form">
                  <div class="field">
                    <label class="label">Workout Name</label>
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        placeholder="Text input"
                      />
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Sets</label>
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        placeholder="Text input"
                      />
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Repetitions</label>
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        placeholder="Text input"
                      />
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Weight</label>
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        placeholder="Text input"
                      />
                    </div>
                  </div>
                </form>
                <footer class="modal-card-foot">
                  <button
                    class="button is-success"
                    id="closeModal"
                    @click="onSave()"
                  >
                    Save changes
                  </button>
                  <button class="button">Cancel</button>
                </footer>
              </div>
            </div>
          </div>
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
