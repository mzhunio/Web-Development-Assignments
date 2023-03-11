<script setup lang="ts">

</script>

<template>
  <div class="register">
    <div class="container is-fluid">
      <div class="columns is-justify-content-center">
          <div
            class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen">
            <div class="card">
              <div class="card-content">
                <div class="title mt-2 has-text-centered">Register</div>

                <div class="field">
                  <label class="label">Username</label>
                  <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="Username" />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Password</label>
                  <div class="control has-icons-left">
                    <input
                      class="input"
                      type="password"
                      placeholder="Password"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Re-enter Password</label>
                  <div class="control has-icons-left">
                    <input
                      class="input"
                      type="password"
                      placeholder="Password"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Email</label>
                  <div class="control has-icons-left">
                    <input class="input" type="email" placeholder="Email" />
                    <span class="icon is-small is-left">
                      <i class="fa-solid fa-envelope"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <div class="control is-flex">
                    <button class="button is-warning is-flex-grow-1">
                      Register
                    </button>
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <label class="checkbox">
                      Need to login? Click <a href="">here</a>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
</style>
