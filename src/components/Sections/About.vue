<template>
  <div>
    <div class="box">
      <section class="about">
        <div class="picture">
          <img src="../../assets/profile.jpg" alt="profile" />
        </div>
        <div class="divider"></div>
        <div class="text">
          <h1>01. About me</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <br />
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s.
          </p>
          <br />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book .
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
  section.about{
      padding-top: 20px;
  }
}
@media screen and (max-width: 380px) {
}
@media screen and (max-width: 340px) {
}
</style>
