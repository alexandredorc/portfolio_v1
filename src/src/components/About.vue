<template>
    <div class="boxAll">
        <div class="content">
            <div class="top">
                <div>
                    <h1 style="text-decoration: underline;">About Me</h1>
                    I'm a third year student at 
                    <a class="lien" href="http://imt-lille-douai.fr/en/"> IMT Lille Douai</a><br>
                    it's a generalist engineering school, <br>
                    I wish to specialise in computer science and industrial
                </div>
                <div class="myTechs">
                    <h3>These are the Technologies with which I work</h3>
                    <div class="techs">
                      <div class="tech">HTML</div>
                      <div class="tech">CSS</div>
                      <div class="tech">JavaScript</div>
                      <div class="tech">Vue.js</div>
                      <div class="tech">Node.js</div>
                      <div class="tech">Java</div>
                      <div class="tech">Git</div>
                      <div class="tech">GitHub</div>
                      <div class="tech">Python</div>
                      <div class="tech">Django</div>
                    </div>
                </div>
            </div>
            <div class="bottom">
              <h4>
                My other activities
              </h4>
              I enjoy music, cinema, and Traveling. 
              <br> I have traveled all around the world and made different
              <br> linguistics travels
            </div>
        </div>
        <a href="#third-page">
            <div class="down">
                <font-awesome-icon :icon="['fas', 'arrow-down']"/>
            </div>
        </a>
    </div>
</template>

<script>
export default {
  data() {
    return {
      observe: 0,
    };
  },
};
</script>

<style scoped>
@media all and (max-width: 1440px) {
 .boxall {
    height: 85% !important;
    padding-top: 130px !important;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center !important;
  }
  .pres {
    height: 280px !important;
  }
}
.boxAll {
  top: 0;
  bottom: 0;
  right: 0;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: space-between;
  position: relative;
  height: 100% !important;
  padding-top: 6%;
}

.content {
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  line-height: 2;
  font-size: 20px;
}

.top{
  display: flex;
  justify-content: space-around;
}

.bottom{
  text-align: center;
}

.myTechs{
  width:40%;
  float: right;
}

.down {
  color: black;
  width: 100%;
  height: 30px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  text-align:center ;
}

 @keyframes lien-hover {
        from {color: red;}
        to {color: white;
            background: red;
            border-bottom: white;
            border-radius: 15px;
            padding: 3px 8px;
            }
    }

a.lien{
    color: red;
    font-weight: bold;
    border-bottom:solid red 3px;
    padding: 0px 8px;
}
a.lien:hover{
   animation-duration: 1s;
   animation-name: lien-hover;
   animation-fill-mode: forwards;
}

.techs {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-right: 15%;
}

.tech {
  border: solid rgb(0, 110, 255) 5px;
  border-radius: 5px;
  padding: 2px 8px;
  margin: 0 40px 20px 0;

}
</style>