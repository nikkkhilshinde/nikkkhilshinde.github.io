<template>
  <div class="container">
    <app-navbar></app-navbar>
    <app-sidebar></app-sidebar>
    <app-content></app-content>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";
import Content from "./Content.vue";
export default {
  components: {
    appNavbar: Navbar,
    appSidebar: Sidebar,
    appContent: Content,
  },
};
</script>
<style scoped>
.container {
  width: 100%;
  height: fit-content;
  background-color: var(--background-color);
}
</style>
