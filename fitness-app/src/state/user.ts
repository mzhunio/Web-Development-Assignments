import type { User } from "@/models/UserModel";
import { ref, computed } from "vue";

export const user = ref<User | null>(null);
export const isUserLoggedIn = computed(() => !!user.value);
export const users = ref<User[]>([]);
