<template>
  <div class="credits">
    <h1>Credits</h1>
    <br />
    <div>
      Icons made by
      <a href="https://www.freepik.com" title="Freepik" target="_blank"
        >Freepik</a
      >
      from
      <a href="https://www.flaticon.com/" title="Flaticon" target="_blank"
        >www.flaticon.com</a
      >
    </div>
    <br />
    <div>
      Color pallet by
      <a href="https://colorhunt.co/palette/167893" target="_blank">
        colorhunt.co</a
      >
    </div>
    <br />
    <div>
      Big thanks to
      <a href="https://brittanychiang.com/" target="_blank">Brittany Chiang</a>
      for her inspirational design
    </div>
    <br />
    <br />
    <h1>Resources</h1>
    <br />
    <div>Hosted on <a href="https://www.netlify.com/">netlify.com</a></div>
    <br />
    <div>
      Source code at
      <a href="https://github.com/nikkkhilshinde/nikkkhilshinde.github.io"
        >github.com/nikkkhilshinde/nikkkhilshinde.github.io</a
      >
    </div>
    <br />
    <button><router-link to="/">Back to home</router-link></button>
  </div>
</template>

<style scoped>
.credits {
  height: 100vh;
  padding: 15% 0;
  color: white;
  text-align: center;
}
a {
  text-decoration: none;
  color: unset;
}
a:hover {
  cursor: pointer;
  color: var(--light-color);
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
</style>
