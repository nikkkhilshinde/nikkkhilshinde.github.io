<template>
  <div>
    <div class="box">
      <div class="row content">
        <section class="landing">
          <!-- <p class="subtitle" data-aos="fade-down">Hello, My name is</p> -->
          <p class="subtitle">Hello, My name is</p>
          <!-- <p class="title name" data-aos="fade-down" data-aos-delay="150"> -->
          <p class="title name">
            Nikhil Shinde
          </p>
          <!-- <p class="title" data-aos="fade-down" data-aos-delay="250"> -->
          <p class="title">
            I build things for the web
          </p>
          <!-- <p class="subtitle" data-aos="fade-down" data-aos-delay="350"> -->
          <p class="subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took.
          </p>
        </section>
      </div>
      <div class="row footer">
        <p>Scroll to know more ↴</p>
      </div>
    </div>
  </div>
</template>

<script>
document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    document.querySelector(".footer").style.visibility = "hidden";
  } else {
    document.querySelector(".footer").style.visibility = "visible";
  }
});

export default {

};
</script>

<style scoped>
section.landing p.title {
  font-weight: 700;
  font-size: 5rem;
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

.box {
  display: flex;
  flex-flow: column;
  height: 100vh;
  margin: 0 15% 0 5%;
}

.box .row.header {
  flex: 0 1 auto;
}
.box .row.content {
  padding-top: 210px;
  flex: 1 1 auto;
}
.box .row.footer {
  flex: 0 1 40px;
  padding-bottom: 0px;
}
@media screen and (max-width: 600px) {
  h1 {
    font-size: 2.8rem;
  }
  .box .row.content {
    padding-top: 100px;
  }
  .content {
    padding-top: 0;
  }
  section.landing p.subtitle {
    width: 100%;
  }
  .box .row.footer {
    flex: 0 1 40px;
    padding-bottom: 80px;
  }
}
@media screen and (max-width: 380px) {
  .box .row.content {
    padding-top: 70px;
  }
  section.landing p.title {
    font-size: 4rem;
    line-height: 55px;
  }
}
@media screen and (max-width: 340px) {
  section.landing p.title {
    font-size: 3rem;
    line-height: 50px;
  }
}
</style>
