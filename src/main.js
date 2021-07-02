import { createApp } from "vue";
import App from "./App.vue";
import "aos/dist/aos.css";
import router from "./router";

createApp(App)
  .use(router)
  .mount("#app");
