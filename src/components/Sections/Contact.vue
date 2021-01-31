<template>
  <div class="contact">
    <h1>04. Want to contact ?</h1>
    <div class="text">
      Although I'm not currently looking for any new opportunities, my inbox is
      always open. Whether you have a question or just want to say hi, I'll try
      my best to get back to you!
    </div>
    <button>Say Hi</button>
  </div>
</template>

<style scoped>
.contact {
  /* border: 1px solid white; */
  margin: 50px 15% 50px 5%;
}
.text {
  width: 500px;
}
h1 {
  font-size: 3rem;
}
button {
  margin: 20px 0;
  border: 1px solid var(--light-color);
  background: none;
  color: var(--light-color);
  padding: 8px 18px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
}
button:hover {
  cursor: pointer;
  color: var(--accent-color-light);
  border-color: var(--accent-color-light);
}
@media screen and (max-width: 600px) {
  .text {
    width: 100%;
  }
}
</style>
