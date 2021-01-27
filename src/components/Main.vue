<template>
  <div class="container">
    <app-navbar></app-navbar>
    <app-sidebar></app-sidebar>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";
export default {
  components: {
    appNavbar: Navbar,
    appSidebar: Sidebar,
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
