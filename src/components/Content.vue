<template>
  <div class="content">
    <section class="landing">
      <p class="subtitle">Hello, My name is</p>
      <p class="title name">Nikhil Shinde</p>
      <p class="title">I build things for the web</p>
      <p class="subtitle">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took.
      </p>

      <p class="scroll-text">
        Scroll to know more ↴
      </p>
    </section>
  </div>
</template>

<script>
document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    document.querySelector("p.scroll-text").style.visibility = "hidden";
  } else {
    document.querySelector("p.scroll-text").style.visibility = "visible";
  }
});
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.content {
  margin-right: 15%;
  margin-left: 5%;
  margin-top: 5%;
  color: white;
  padding-top: 60px;
}
section.landing p.title {
  font-weight: 700;
  font-size: 84px;
  line-height: 72px;
  color: var(--light-color);
}
section.landing p.name {
  color: white;
}
section.landing p.subtitle {
  font-size: 16px;
  width: 70%;
  margin-left: 4px;
  margin-top: 10px;
  color: var(--light-color);
}
.scroll-text {
  position: absolute;
  bottom: 20px;
  margin-left: 4px;
  transition: visibility 0s, opacity 0.5s linear;
}
@media screen and (max-width: 600px) {
  .content {
    padding-top: 0;
  }
  section.landing p.subtitle{
      width: 100%;
  }
}
</style>
