<script setup lang="ts"></script>

<template>
  <div class="user">
    <div class="container is-max-desktop">
      <div class="buttons mt-5">
        <button
          class="button fa-light fa-plus is-info is-light"
        >
          Add User
        </button>
      </div>
      <div class="column is-three-fifths">
        <div class="box">
          <table class="table">
            <thead>
              <tr>
                <th><abbr title="id">Id</abbr></th>
                <th><abbr title="username">Username</abbr></th>
                <th><abbr title="email">Email</abbr></th>
                <th><abbr title="isAdmin">Is Admin</abbr></th>
                <th><abbr title="box"></abbr></th>
              </tr>
            </thead>
            <tfoot></tfoot>
            <tbody>
              <tr>
                <th>1</th>
                <th><abbr title="Position">mzhunio</abbr></th>
                <th><abbr title="Played">mzhunio@a.com</abbr></th>
                <th><abbr title="Played">true</abbr></th>
                <th>
                  <abbr title="Played">
                    <button class="button"><i class="fas fa-edit"></i></button>
                    <button class="button"><i class="fas fa-trash"></i></button>
                  </abbr>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.user {
display: block;
margin-left: auto;
margin-right:5rem;
}
.buttons {
margin-left: 1em;
}

</style>
