<template>
  <div class="navBox">
    <div class="box">
      <a href="#first-page">
        <div class="logo">
          <p>My Portfolio</p>
        </div>
      </a>
      <div class="navburger" >
        <div class="burger-packing" @click="change()">
        <div class="burger">
          <span class="ham buns"></span>
          <span class="ham filling"></span>
          <span class="ham buns bunsinv"></span>
        </div>
        </div>
        <div class="menu">
            <div class="nav-items-box">
              <div class="nav-items">
                <p><a href="#second-page" >experiences</a></p>
                <span></span>
              </div>
            <div class="nav-items">
              <a href="#third-page"><p>projects</p></a>
              <span></span>
            </div>
            <div class="nav-items">
              <a href="#fourth-page"><p>my experiences</p></a>
              <span></span>
            </div>
            <div class="nav-items">
              <a href="#fifth-page"><p>others</p></a>
              <span></span>
            </div>
          </div>
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
        console.log(1);
        document.querySelector('.navburger').classList.add("open");
      }
      else{
        document.getElementsByClassName("burger")[0].classList.remove("ham--is-expanded");
        console.log(0);
        document.querySelector('.navburger').classList.remove("open");
      }
    }
  }
}
</script>

<style scoped>
@import url(//fonts.googleapis.com/css?family=Yellowtail);


.navBox {
  width: 100%;
  background-color: white;
  padding-top: 5px;
  color: rgb(0, 0, 0);
}
.box {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  margin: 0 30px;
}

.navburger{
  height: 60px;
  width: 60px;
  position: absolute; 
  border-radius: 10px;
  background-color: white;
  display: flex;
  border:solid rgb(82, 82, 82);
  transition: 1s;
}

.open{
  width: 95%;
}

.menu{
flex-direction: row;
width: 100%;
display: inline;
}

.open .burger{
  display: block;
}

.burger-packing{
  width: 60px;
  height: 60px;
}
.burger{
  height: 20px;
  width: 30px;
  position: relative;
  display: inline-block;
  margin-left: 15px;
  margin-top: 20px;
}


.ham{
  width: 30px;
  height: 3px;
  background-color:rgb(70, 70, 70);
  display: block;
  position: absolute;
}
.buns {
  width: 30px;
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
  top: 50%;
}
.ham--is-expanded .buns{
  top: 10px;
  transform: rotate(45deg);
  transition: top 0.50s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.35s cubic-bezier(0.645, 0.045, 0.355, 1) 0.35s;
  }
.ham--is-expanded .bunsinv{
  top: 10px;
  transform: rotate(-45deg);
  }
.ham--is-expanded .filling{
  transition: opacity 0.35s linear 0.175s;
  opacity: 0;
}


.nav-items-box{
  display: flex;
  width: auto;
  align-items: center;
  height: 100%;
  overflow: hidden;
}

p,
.nav-items {
  font-weight: bold;
  letter-spacing: 0.075em;
  font-style: normal;
  font-size: 18px;

}
.logo p {
  margin-left: 80px;
  font-family: Yellowtail;
  font-size: 36px;
  cursor: pointer;
  display: inline-block;
}
.nav-items {
  font-size: 14px;
  cursor: pointer;
  transition: all ease 20ms;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 80px;
  padding: 5px 10px;
  border-radius: 5px;
}
.nav-items:hover{
  background-color: rgba(105, 105, 105, 0.13);
}

@keyframes shadow {
  from {
    text-shadow: 0px 0px #474747;
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
  margin: 20px 0;
  padding: 0;
}

.nav-items:hover span {
  opacity: 1;
}
</style>