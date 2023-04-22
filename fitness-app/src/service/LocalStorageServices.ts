import type { User } from "@/models/UserModel";

const enum LocalStorageKeys {
  currentUser = "user",
}

export const LocalStorage = {
  getCurrentUser(): User {
    const user = localStorage.getItem(LocalStorageKeys.currentUser);

    return user ? JSON.parse(user) : null;
  },

  setCurrentUser(user: User): void {
    localStorage.setItem(LocalStorageKeys.currentUser, JSON.stringify(user));
  },

  removeCurrentUser(): void {
    localStorage.removeItem(LocalStorageKeys.currentUser);
  },
};
