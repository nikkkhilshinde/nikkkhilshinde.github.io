<template>
  <div class="content">
    <landing-section></landing-section>
    <about-section></about-section>
    <experience-section></experience-section>
    <projects-section></projects-section>
  </div>
</template>

<script>
import Landing from "./Sections/Landing.vue";
import About from "./Sections/About.vue";
import Experience from "./Sections/Experience.vue";
import Projects from "./Sections/Projects.vue";
export default {
  components: {
    LandingSection: Landing,
    AboutSection: About,
    ExperienceSection: Experience,
    ProjectsSection: Projects,
  },
};
</script>
<style scoped>
.content {
  color: white;
  height: 100%;
}

@media screen and (max-width: 992px) {
}
@media screen and (max-width: 600px) {
}
@media screen and (max-width: 380px) {
}
@media screen and (max-width: 340px) {
}
</style>
