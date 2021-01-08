<template>
    <div class="boxAll">
            <div class="content">
                <div class="text">
                        <h1 class="text-item">
                            <strong>
                            Hello !!
                            </strong>
                        </h1>
                        <h2 class="text-item">
                            My name is Dorcival Alexandre<br> and this is my portfolio
                        </h2>
                        <h3 class="text-item">
                            I am a student at the IMT Lille Douai engineering school <br>
                            I am keen on science and IT <br>
                        </h3>
                </div>

                <div class="brand">
                  <div class="brand-title"> <strong>My contents online</strong></div>
                  <div class="collapsable">
                    <div class="coll-content">
                    <p>
                        <a href="https://github.com/alexandredorc" target="_blank"
                        ><font-awesome-icon :icon="['fab', 'github']"
                        /></a>
                    </p>
                    <p>
                        <a
                        href="https://www.linkedin.com/in/alexandre-dorcival-48a7a21a1/"
                        target="_blank"
                        ><font-awesome-icon :icon="['fab', 'linkedin']"/>
                        </a>
                    </p>
                  </div>
                  </div>
                </div>
            </div>
            <a href="#second-page">
                <div class="down">
                    <font-awesome-icon :icon="['fas', 'arrow-down']"/>
                </div>
            </a>
    </div>
</template>

<script>
import CV from 'CV-en-anglais.pdf';
import { gsap } from "gsap";
export default {
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  mounted: () => {
    let tl = gsap.timeline();
    tl.from(".text .text-item", { duration: 0.5, opacity: 0, y: -50, stagger: 0.1 });
    tl.from(".brand p", { duration: 0.5, opacity: 0, y: 50, stagger: 0.1 });
    tl.from(".down", {
      duration: 0.5,
      opacity: 0,
      y: -50,
    });
    var content = document.getElementsByClassName("collapsable")[0];
    var brand = document.getElementsByClassName("brand")[0]
    brand.addEventListener("mouseleave", function() {
      content.style.width = "0";
      content.style.padding = "10px 0px 10px 0px";
      content.firstElementChild.style.transform ='scale(0,1)';
    });
    brand.addEventListener("mouseover", function() {
      content.style.width = "auto";
      content.style.padding = "10px 40px 10px 30px" ;
      content.firstElementChild.style.transform ='scale(1)';
    });
  },

};
</script>

<style scoped>


@media all and (max-width: 1489px) {
  .content {
    width: 100% !important;
    justify-content: space-around !important;
  }
}
@media all and (max-width: 1100px) {
  
  span {
    font-weight: bold;
    font-size: 43px !important;
    letter-spacing: 0.15em;
  }
  p {
    letter-spacing: 0.075em;
    font-size: 18px !important;
  }
}
@media all and (max-width: 696px) {
  .boxAll {
    display: block !important;
    position: static !important;
  }
}
@media all and (max-width: 1660px) and (min-width: 769px) {
  .down {
    bottom: 80px !important;
  }
}
.boxAll {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.content {
  display: inline-block;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: left;
  margin-top: 70px;
  padding-left:20% ;
  position: relative;
}
span {
  font-weight: bold;
  font-size: 45px;
  letter-spacing: 0.15em;
}
p {
  letter-spacing: 0.075em;
  font-size: 24px;
}

.text{
  font-size: 25px;
  width:50% ;
  padding: 10px;
  background: #ffffff60;
  float: left;
}

.brand {
  width: auto;
  position: absolute;
  right: 0;
  top: 0;
  align-items: center;
  justify-content: space-between;
  display: flex;
  background: #ffffff1f;
}
.collapsable {
  width:0;
  padding:10px 0px 10px 0px;
  background: linear-gradient(0.25turn , #353535c7, #ffffff00);
  border-left: solid #2c2c2c 5px;
  transition: 0.5s;
}
.coll-content{
  transition: 0.5s;
  transform: scale(0,1);
}

.brand-title{
  writing-mode: vertical-rl;
  margin-right: 20px;
  padding-left: 20px;
  border-left: solid #2c2c2c 5px;
}

.brand p {
  color: black;
  font-size: 40px;
}
.down {
  color: rgb(255, 255, 255);
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 20px;
  left: 50%;
  cursor: pointer;
  font-size: 20px;
}
</style>