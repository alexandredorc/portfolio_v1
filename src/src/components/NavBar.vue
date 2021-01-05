<template>
  <div class="navBox">
    <div class="box">
      <div class="logo">
        <p><a href="#first-page">Portfolio</a></p>
      </div>
      <div class="navburger" @click="change()">
        <div class="burger">
          <span class="ham buns"></span>
          <span class="ham filling"></span>
          <span class="ham buns bunsinv"></span>
        </div>
        
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
export default{
  name: 'Nav',
  data:function(){
    return{state:1}
  },
  methods: {
    async change(){
      this.state=1-this.state;
      if (this.state==1){
        document.getElementsByClassName("burger")[0].classList.add("ham--is-expanded")
        console.log(document.getElementsByClassName("burger")[0].className);
        
      }
      else{
        document.getElementsByClassName("burger")[0].classList.remove("ham--is-expanded");
        console.log(document.getElementsByClassName("burger")[0].className);
      }
    }
  }
}
</script>

<style scoped>

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
input{
  display: none;
}
.navburger{
  height: 60px;
  width: 60px;
  position: absolute;
  margin: 0 auto;
  border-radius: 20%;
  border-color: white;
  background-color: white;
}
.burger{
  height: 20px;
  width: 30px;
  position: relative;
  display: block;
  display: inline-block;
  
  margin: 25%;
}

.ham{
  width: 30px;
  height: 3px;
  background-color:rgb(121, 121, 121);
  display: block;
  position: absolute;
}
.buns {
  width: 100%;
  display: block;
  transition: top 0.35s cubic-bezier(0.645, 0.045, 0.355, 1);
  height: 3px;
  top: 0px;
}
.bunsinv {
  top: 100%;
}
.filling{
  height: 3px;
  top: 49%;
}
.ham--is-expanded .buns{
  top: 10px;
  transform: rotate(45deg);
  transition: top 0.35s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.35s cubic-bezier(0.645, 0.045, 0.355, 1) 0.35s;
  }
.ham--is-expanded .bunsinv{
  top: 10px;
  transform: rotate(-45deg);
  }
.ham--is-expanded .filling{
  transition: opacity 0.35s linear 0.175s;
  opacity: 0;
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
  display: inline-block;
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

.nav-items:hover span {
  opacity: 1;
}
</style>