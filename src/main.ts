import { createApp } from "vue";
import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";
import App from "./App.vue";
import "./assets/main.css";

createApp(App).use(createPinia().use(createPersistedState())).mount("#app");
