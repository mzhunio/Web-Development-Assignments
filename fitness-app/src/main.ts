import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import GoogleSignInPlugin from "vue3-google-signin";

import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(GoogleSignInPlugin, {
  clientId:
    "604624309641-0u1q7muvq5846qk8ir64qa5b8m5e3597.apps.googleusercontent.com",
});

app.mount("#app");
