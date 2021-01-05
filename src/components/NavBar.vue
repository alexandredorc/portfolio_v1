<template>
  <div class="navBox">
    <div class="box">
      <div class="logo">
        <p><a href="#first-page">Portfolio</a></p>
      </div>
      <div class="nav-items-box">
        <div class="nav-items">
          <p><a href="#second-page">about me</a></p>
          <span></span>
        </div>
        <div class="nav-items">
          <a href="#third-page"><p>projets</p></a>
          <span></span>
        </div>
        <div class="nav-items">
          <a href="#fourth-page"><p>formations</p></a>
          <span></span>
        </div>
        <div class="nav-items">
          <a href="#fifth-page"><p>expériences</p></a>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media all and (max-width: 860px) {
  .nav-items-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    flex: 1 !important;
  }
}
@media all and (max-width: 634px) {
  .nav-items-box {
    display: none !important;
  }
  .logo {
    width: 100% !important;
    text-align: center;
  }
}
.navBox {
  width: 100%;
  background-color: none;
  color: rgb(255, 255, 255);
  background: rgb(168, 168, 168);
}
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px;
}
.nav-items-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 50%;
}
p,
.nav-items {
  color: var(--brown);
  font-weight: bold;
  letter-spacing: 0.075em;
  font-style: normal;
  font-size: 18px;
}
.logo p {
  font-size: 36px;
  cursor: pointer;
}
.nav-items {
  font-size: 14px;
  cursor: pointer;
  transition: all ease 20ms;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@keyframes shadow {
  from {
    text-shadow: 0px 0px #a3a3a3;
  }
  to {
    translate: -5px -5px;
    text-shadow: 5px 5px 3px #242424;
  }
}
.nav-items:hover {
  animation-direction: normal;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-name: shadow;
  text-shadow: 5px 5px 3px #505050;
}
.nav-items p {
  margin: 5px 0;
  padding: 0;
}
span {
  width: 110%;
  transition: all ease 200ms;
  opacity: 0;
  margin: 0;
}
.nav-items:hover span {
  opacity: 1;
}
</style>