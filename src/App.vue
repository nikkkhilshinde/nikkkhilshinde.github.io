<template>
  <app-main></app-main>
</template>

<script>
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    appMain: Main,
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
</style>
