<template>
  <div class="experience" id="experience">
    <div class="box">
      <div class="column left" data-aos="fade-right" data-aos-delay="100">
        <!-- <div class="column left"> -->
        <div class="row"></div>
        <div class="horizontal-divider"></div>
        <div class="row">
          <div
            v-for="(job, index) in experience"
            :key="index"
            :class="{ active: activeTab === index }"
            @click="activeTab = index"
          >
            <p>{{ job.company }}</p>
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
        <div class="mobile-tabs">
          <span
            v-for="(job, index) in experience"
            :key="index"
            :class="{ active: activeTab === index }"
            @click="activeTab = index"
          >
            {{ job.company }}
          </span>
        </div>
        <div class="row content">
          <div>
            <h2>{{ experience[activeTab].role }} @ {{ experience[activeTab].company }}</h2>
            <h3>{{ experience[activeTab].from }} - {{ experience[activeTab].to }}</h3>
            <br />
            <p v-for="(desc, i) in experience[activeTab].description" :key="i">
              {{ desc }}
              <br v-if="i < experience[activeTab].description.length - 1" />
              <br v-if="i < experience[activeTab].description.length - 1" />
            </p>
            <br />
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../../../metadata.json";

export default {
  data() {
    return {
      experience: data.experience,
      activeTab: 0,
    };
  },
};
</script>

<style scoped>
.experience {
  min-height: 100vh;
  height: auto;
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
  /* background-color: #3282b87a; */
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  border-right: 3px solid transparent; /* default border */
  /* border: 1px solid white; */
  /* background-color: white; */
}
.left > .row > div.active {
  background-color: #3282b830; /* Highlight background */
  border-right: 3px solid #3282b8; /* Highlight border */
  color: #3282b8; /* Highlight text if needed, though not specified */
}
.left > .row > div:hover {
    background-color: #3282b810;
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

/* Mobile Tabs Styles */
.mobile-tabs {
  display: none;
  flex-direction: row;
  gap: 20px;
  padding: 15px 20px;
  overflow-x: auto;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-tabs span {
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.mobile-tabs span.active {
  opacity: 1;
  color: #3282b8;
  border-bottom: 2px solid #3282b8;
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
  /* Show mobile tabs and hide left column */
  .mobile-tabs {
    display: flex;
  }
  .column.left {
    display: none;
  }
  /* Reuse mobile-tab class if needed or keep using mobile-tabs */
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
