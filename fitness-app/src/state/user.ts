import type { User } from "@/models/UserModel";
import { ref, computed } from "vue";

// export const users = ref([
//   { id: 0, username: "mzhunio", email: "mzhunio@a.com", isAdmin: true },
//   { id: 1, username: "rzhunio", email: "rzhunio@a.com", isAdmin: false },
//   { id: 2, username: "kzhunio", email: "kzhunio@a.com", isAdmin: false },
// ]);

export const user = ref<User | null>(null);
export const isUserLoggedIn = computed(() => !!user.value);
export const users = ref<User[]>([]);



// TODO: Switch from authState to session
// const session = reactive({
//   user: null as User | null,
// });

// export function getCurrentSession() {
//   return session;
// }
