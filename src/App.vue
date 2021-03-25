<template>
  <app-main></app-main>
</template>

<script>
import Wrapper from "./components/Wrapper.vue";
// import AOS from "aos";

export default {
  name: "App",
  components: {
    appMain: Wrapper,
  },
  created() {
    // AOS.init();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quantico:wght@400;700&display=swap");
@import url("https://unpkg.com/aos@next/dist/aos.css");
:root {
  --background-color: #1b262c;
  --accent-color-light: #3282b8;
  --accent-color-dark: #0f4c75;
  --light-color: #bbe1fa;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Quantico", sans-serif;
  /* border: 1px solid red; */
}
html {
  scroll-behavior: smooth;
}
#app {
  height: 100%;
}
html,
body {
  width: 100%;
  height: 100%;
}
button:focus {
  outline: none;
}
a {
  text-decoration: none;
  color: unset;
}
a:hover {
  cursor: pointer;
  color: var(--light-color);
}
</style>
