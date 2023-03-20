<script setup lang="ts">
import { ref } from "vue";

const people = ref([
  { firstName: "Karo", lastName: "Zhunio", age: '25' },
  { firstName: "Michelle", lastName: "Zhunio", age: '26' },
]);

const firstName = ref("Richard");
const lastName = ref("Zhunio");
const age = ref("27");

function addPerson() {
  const person = { firstName: firstName.value, lastName: lastName.value, age: age.value };

  people.value.push(person);
}

function deletePerson(index: number) {
    people.value.splice(index, 1);
}
</script>

<template>
  <h1 class="title">Wedding List</h1>

  <input type="text" placeholder="First Name" v-model="firstName" />
  <input type="text" placeholder="Last Name" v-model="lastName" />
  <input type="number" placeholder="Age" v-model="age" />

  <button class="mb-5" @click="addPerson()">Add Person</button>

  <div v-for="person, index in people">
    <div>
      {{ person.firstName }} {{ person.lastName }} {{ person.age }} years old <button @click="deletePerson(index)">x</button>
    </div>
  </div>
</template>

<style scoped></style>
