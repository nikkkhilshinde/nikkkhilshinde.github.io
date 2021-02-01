<template>
  <app-main></app-main>
</template>

<script>
import Wrapper from "./components/Wrapper.vue";

export default {
  name: "App",
  components: {
    appMain: Wrapper,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quantico:wght@400;700&display=swap");

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
</style>
