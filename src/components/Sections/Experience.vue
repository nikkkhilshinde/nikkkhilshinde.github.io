<template>
  <div class="experience" id="experience">
    <div class="box">
      <div class="column left" data-aos="fade-right" data-aos-delay="100">
        <!-- <div class="column left"> -->
        <div class="row"></div>
        <div class="horizontal-divider"></div>
        <div class="row">
          <div>
            <p>Netcracker</p>
          </div>
        </div>
      </div>
      <div class="column vertical-divider"></div>
      <div class="column right" data-aos="fade-right" data-aos-delay="100">
        <!-- <div class="column right"> -->
        <div class="row">
          <h1>02. Experience</h1>
        </div>
        <div class="horizontal-divider"></div>
        <div class="row">
          <div>
            <h2>Software engineer @ Netcracker</h2>
            <h3>July 2019 - Present</h3>
            <br />
            <p>
              During my time at NetCracker, I got opportunity to work on
              multiple latest technologies such as SpringBoot, React, Openshift,
              Kubernetes, Docket etc. I started my NetCracker journey as Junior
              Software engineer Where I was working on bugfixes, Unit testing
              and code smell fixing. Where I learned about microservices
              architecture and how to build REST APIs And in depth knowledge
              about system design. I was part of a team which was responsible
              for development of few microservices specifically backend part.
              <br />
              <br />
              After spending an year in the team i moved to another team called
              Test Automation team. The team was responsible for automating QA
              test cases for end to end flow for both front end and backend.
              Initially I was working on backend part only but gradually moved
              to automating front end test cases as well. Here I learned about
              testing framework such as TestCafe. As I was working on front end
              so I picked up few pieces of JavaScript as well, But I consider
              Java as my Primary language.
            </p>
            <br />
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.experience {
  height: 100vh;
}
.mobile-tab {
  display: none;
}
.box {
  height: 100%;
  /* width: 900px; */
  margin: 0 30% 0 10%;
  display: flex;
  flex-direction: row;
  padding: 10% 0 10% 0;
}
.box div {
  /* border: 1px solid white; */
}
.column.left {
  width: 25%;
}
.column.right {
  width: 85%;
}
.right .row {
  padding-left: 20px;
}
.column .row:first-child {
  height: 65px;
}
.horizontal-divider {
  height: 1px;
  background-color: white;
}
.vertical-divider {
  width: 1px;
  background-color: white;
}
.left > .row {
  display: flex;
  flex-direction: column;
  /* padding-top: 15px; */
}
.left > .row > div {
  display: flex;
  width: 100%;
  font-size: 1.4rem;
  flex-direction: row-reverse;
  justify-items: center;
  align-items: center;
  padding-right: 20px;
  height: 50px;
  background-color: #3282b87a;
  font-weight: 700;
  /* border: 1px solid white; */
  /* background-color: white; */
}
.left > .row > div > p {
  display: inline;
  /* justify-self: flex-end; */
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
  line-height: 2rem;
}
p {
  text-indent: 50px;
}
.right > .row:last-child {
  padding: 11px 0 0 20px;
  /* background-color: white; */
}
.mobile h1 {
  display: none;
}
@media screen and (max-width: 992px) {
  .box {
    margin: 0 15% 0 10%;
  }
}
@media screen and (max-width: 800px) {
  .experience {
    height: unset;
  }
  .box {
    margin: 0 10% 0 5%;
  }
  h1 {
    /* display: none; */
    font-size: 2.6rem;
  }
  .vertical-divider {
    display: none;
  }
  h2 {
    font-size: 1.8rem;
  }
  .mobile h1 {
    display: block;
  }
  .mobile-tab {
    display: flex;
    align-content: center;
    align-items: center;
    height: 100%;
  }
  .mobile-tab > div {
    display: inline-block;
    align-items: center;

    font-size: 1.4rem;
  }
  .column.left {
    display: none;
  }
}
@media screen and (max-width: 600px) {
  .column.right {
    width: 100%;
  }
}
@media screen and (max-width: 380px) {
}
@media screen and (max-width: 340px) {
}
</style>
