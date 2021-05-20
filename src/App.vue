<template>
  <div
    class="text-white"
    id="app"
    style="
      background-image: url('https://cdn.wallpapersafari.com/61/18/enT9XV.jpg');
    "
  >
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer/Footer";

export default {
  name: "App",
  components: { Footer },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
