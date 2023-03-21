import { ref } from "vue";

const username = ref("");

export const authState = {
  username,
};
interface User {
    id: number;
    username: string;
    email: string;
    isAdmin: boolean;
  }
  
  export const users = ref<User[]>([
    { "id": 0, "username": "mzhunio", "email": "mzhunio@a.com", "isAdmin": true },
    { "id": 1, "username": "rzhunio", "email": "rzhunio@a.com", "isAdmin": false },
    { "id": 2, "username": "kzhunio", "email": "kzhunio@a.com", "isAdmin": false },
  ]);
  