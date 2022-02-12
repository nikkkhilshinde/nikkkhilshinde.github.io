<template>
  <div id="about">
    <div class="box">
      <section class="about">
        <div class="picture" data-aos="fade-right" data-aos-delay="100">
          <!-- <div class="picture"> -->
          <img src="../../assets/profile.jpeg" alt="profile" />
        </div>
        <div class="divider"></div>
        <div class="text" data-aos="fade-right" data-aos-delay="100">
          <!-- <div class="text"> -->
          <h1>01. About me</h1>
          <p>
            Computers always fascinated me I knew that I wanted to do something
            related to it. So I joined college for pursuing computer science
            where I managed to learn about programming and how computers works,
            During this time I explored lot of Computer Science fields but found
            my interest to be in the webservices, Specifically in the backend
            development.
          </p>
          <br />
          <p>
            When I graduated, I joined the NetCracker Technology as an Junior
            Java Developer ( Backend ) and have been here since! I'm now a
            Software Developer on the Test Automation Team and over the last
            year, I've automated test cases covering more than 70% features of
            the product for back-end as well as front-end.
          </p>
          <br />
          <p>
            Outside of work, I am also active on competitive programming sites
            like CodeChef and CodeForces, competing with similar minds. I've
            highest rating of 1771 on CodeChef and beginner profile on
            CodeForces. I frequently challenge myself with data structure and
            algorithm problems on leetcode as well.
          </p>
          <div class="bullets">
            <div>01. Java</div>
            <div>02. SpringBoot</div>
            <div>03. Vue</div>
            <div>04. HTML & CSS</div>
            <div>05. JavaScript</div>
            <div>06. Cloud</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  height: 100vh;
}
section.about {
  display: flex;
  height: 100vh;
  /* border: 1px solid white; */
  margin-left: 20%;
  margin-right: 20%;
  padding-top: 100px;
  padding-bottom: 100px;
}
section.about > div.divider {
  flex-wrap: unset;
  flex-grow: unset;
  margin: 0 10px;
  /* border: 1px solid white; */
  background-color: white;
  width: 1px;
}
section.about > div.picture {
  width: 30%;
}
section.about > div.text {
  /* border: 1px solid white; */
  padding: 0 10px;
  width: 70%;
}
section.about p {
  text-indent: 50px;
}
section.about > div.picture > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}
h1 {
  font-size: 3rem;
}
.bullets {
  display: grid;
  grid-template-columns: auto auto;
  width: 100%;
  margin-top: 20px;
  /* border: 1px solid white; */
  /* flex-direction: row; */
}
.bullets div {
  /* border: 1px solid white; */
}
.bullets .row {
  display: flex;
  /* flex-direction: column; */
  /* flex-grow: 1;
  flex-wrap: 0; */
  flex-direction: column;
}

@media screen and (max-width: 992px) {
  section.about {
    margin-left: 10%;
    margin-right: 15%;
    margin-top: 50px;
    /* border: 1px solid white; */
  }
  section.about > div.text {
    width: 100%;
  }
  section.about > div.divider {
    display: none;
  }
  section.about > div.picture {
    display: none;
  }
}
@media screen and (max-width: 600px) {
  section.about {
    margin-left: 5%;
    margin-right: 15%;
    margin-top: 50px;
    /* border: 1px solid white; */
  }
  h1 {
    font-size: 2.8rem;
  }
}
@media screen and (max-width: 440px) {
  section.about {
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 0;
    /* border: 1px solid white; */
  }
  section.about {
    padding-top: 20px;
  }
}
@media screen and (max-width: 380px) {
}
@media screen and (max-width: 340px) {
}
</style>
