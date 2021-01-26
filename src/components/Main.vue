<template>
  <div class="container">
    <app-navbar></app-navbar>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  components: {
    appNavbar: Navbar,
  },
};
</script>
<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  background-color: var(--background-color);
}
</style>
