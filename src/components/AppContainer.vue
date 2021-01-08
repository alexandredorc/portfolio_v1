<template>
  <div id="app">
    <div class="nav">
        <NavBar/>
    </div>
    <div class="pages" id="pages">
        <div class="pages-item" id="first-page"><Home/></div>
        <div class="pages-item" id="second-page"><About/></div>
        <div class="pages-item" id="third-page"><Exper/></div>
        <div class="pages-item" id="fourth-page"><Projects/></div>
    </div>
    
  </div>
</template>

<script>
import Home from './Home.vue';
import About from './About.vue';
import NavBar from './NavBar.vue';
import Exper from './Exper.vue';
import Projects from './Projects';

export default {
  name: 'App',
  components: {
    Home,
    About,
    NavBar,
    Exper,
    Projects
  },
  data() {
    return {
      index: 0,
      pages: ["first-page", "second-page", "third-page","fourth-page"],
    };
  },
}
</script>

<style>
@media all and (max-width: 1440px) {
  .down {
    font-size: 30px !important;
    border: 2px solid var(--txt) !important;
    width: 20px !important;
    height: 20px !important;
  }
}
@media all and (max-width: 696px) {
  .pages {
    height: auto !important;
  }
  .pages-item {
    height: auto !important;
  }
}
@import url(//fonts.googleapis.com/css?family=Roboto+Condensed);

#app {
  font-family: Roboto Condensed;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 0;
}
.nav {
  width: 100%;
  position: relative;
  z-index: 2;
}

@media all and (max-width: 1660px) and (min-width: 769px) {
  .pages {
    height: 100% !important;
  }
}
.pages {
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 1;
  overflow-y: scroll;
  background-image: url('~@/assets/patern.png');
  background-size:100% 100%;
  
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}
@media all and (max-width: 768px) {
  .pages {
    scroll-snap-type: none !important;
  }
  .down {
    display: none !important;
  }
}
.pages-item {
  width: 100%;
  height: 100vh;
  padding-top: 50px;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
