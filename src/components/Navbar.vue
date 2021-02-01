<template>
  <div class="navbar">
    <div class="logo">
      <!-- <a href="../assets/Project2.png">s</a> -->
      <a href="./Resume.pdf" target="_blank"
        ><button @click="openPdf" id="resume">Resume</button>
      </a>
    </div>

    <div class="nav-items">
      <ul :class="navbarPosition">
        <li>
          <p>01.</p>
          <a href="#about"> About</a>
        </li>

        <li>
          <p>02.</p>
          <a href="#experience"> Experience</a>
        </li>
        <li>
          <p>03.</p>
          <a href="#projects"> Projects</a>
        </li>
        <li>
          <p>04.</p>
          <a href="#contact"> Contact</a>
        </li>
      </ul>
    </div>
    <button class="resume-mobile">Resume</button>
    <div :class="navbarPosition" @click="toggleNavbar" class="open-close">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
// document.querySelector("#resume").addEventListener("click", () => {
//   console.log("Hello");
// });
export default {
  data() {
    return {
      navbarPosition: "",
    };
  },
  methods: {
    toggleNavbar: function() {
      this.navbarPosition = this.navbarPosition === "" ? "open" : "";
    },
    openPdf: function() {
      // window.print();
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: unset;
}
.navbar {
  position: fixed;
  backdrop-filter: blur(20px);
  width: 100%;
  height: 70px;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  z-index: 10;
}

.nav-items {
  display: flex;
  justify-content: center;
}

.nav-items ul {
  color: white;
  list-style-type: none;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
}
.nav-items ul > li {
  align-self: center;
  margin-left: 35px;
  font-size: 1rem;
}
.nav-items ul > li:hover {
  color: var(--accent-color-light);
  cursor: pointer;
}

.nav-items ul > li p {
  display: inline-block;
  color: var(--light-color);
}
.open-close {
  display: none;
}
.logo {
  display: flex;
  align-self: center;
}
button {
  border: 1px solid var(--light-color);
  background: none;
  color: var(--light-color);
  padding: 8px 18px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
}
.logo button:hover {
  cursor: pointer;
  color: var(--accent-color-light);
  border-color: var(--accent-color-light);
}
.resume-mobile {
  display: none;
}
@media screen and (max-width: 992px) {
}

@media screen and (max-width: 600px) {
  .resume-mobile {
    display: unset;
    margin: 18px 0 15px 2%;
  }
  .logo {
    display: none;
  }
  .navbar {
    display: absolute;
    z-index: 10;
    width: 100%;
    height: 70px;
    padding: 0 5%;
    display: flex;
    flex-direction: row-reverse;
  }
  .open-close {
    display: unset;
  }

  .nav-items ul:before {
    filter: blur(10px);
  }
  .nav-items ul {
    height: 100vh;
    width: 0;
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.5s;
  }
  .nav-items .open {
    width: 100%;
    backdrop-filter: blur(20px);
    background-color: var(--background-color);
  }

  .nav-items ul {
    padding-top: 200px;
    flex-direction: column;
  }

  .nav-items ul > li {
    padding: 0;
    margin: 20px 0;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }
  .open-close {
    position: fixed;
    z-index: 10;
    margin-top: 20px;
    width: 60px;
    height: 45px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }

  .open-close span {
    display: block;
    position: absolute;
    height: 6px;
    width: 100%;
    background: var(--light-color);
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }
  .open-close span:nth-child(3) {
    width: 80%;
  }
  .open-close span:nth-child(2) {
    width: 80%;
  }
  .open-close span:nth-child(1) {
    width: 60%;
  }
  .open-close span:nth-child(4) {
    width: 100%;
  }

  .open.open-close span:nth-child(3) {
    width: 100%;
  }
  .open.open-close span:nth-child(2) {
    width: 100%;
  }

  .open-close span:nth-child(1) {
    top: 0px;
  }

  .open-close span:nth-child(2),
  .open-close span:nth-child(3) {
    top: 14px;
  }

  .open-close span:nth-child(4) {
    top: 29px;
  }

  .open-close.open span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  .open-close.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .open-close.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .open-close.open span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }
}
</style>
