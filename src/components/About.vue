<template>
    <div class="boxAll">
        <div class="content">
          <div class="collapse-list">
            <div class="collapse-item">
              <div class="collapse-title">
                About Me 
              </div>
              <div class="collapse-content">
                I'm a third year student at 
                <a class="lien" href="http://imt-lille-douai.fr/en/"> IMT Lille Douai</a><br>
                it's a generalist engineering school, <br>
                I wish to specialise in computer science and industrial
              </div>
            </div>
            <div class="collapse-item">
              <div class="collapse-title">
                These are the Technologies with which I work
              </div>
              <div class="collapse-content">
                  <div class="myTechs">
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
            </div>
            <div class="collapse-item">
              <div class="collapse-title">
                My other activities
              </div>
              <div class="collapse-content">
                I enjoy music, cinema, and Traveling. 
            <br> I have traveled all around the world and made different
            <br> linguistics travels
              </div>
            </div>
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
      active: -1
    };
  },
  mounted:function(){
    var coll = document.getElementsByClassName("collapse-title");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function(i) {
         this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (i==-1){
          content.style.maxHeight = null;
          content.style.padding= "0";
        }
        else if(this.parentNode.childNodes[i]==this){
          console.log('test');
        }
        else{
          console.log('test');
        }
       
        
        if (content.style.maxHeight){
          content.style.maxHeight = null;
          content.style.padding= "0";
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
          content.style.padding= "10px";
        } 
      });
    }
  }
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
  padding-top: 100px;
  display: flex;
}

.content {
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: left;
  line-height: 1.5;
  font-size: 20px;
  height: auto;
  width: auto;
  display: flex;
}

.collapse-list{
  display: flex;
  flex-direction: column;
  float: right;
  margin: 20px 150px 20px 70px;
}

.collapse-title{
  background-color: rgba(167, 167, 167, 0.685);
  padding: 10px;
}
.collapse-title:hover{
  background-color: rgba(0, 0, 0, 0.726);
}
.collapse-title:before{
  content: '\002B';
  color: black;
  font-weight: bold;
  float: right;
  margin-left: 5px;
}

.collapse-content{
  background-color: rgba(209, 209, 209, 0.418);
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.2s ease-out;
  background-color: #f1f1f1;
}
.active:before{
  content: "\2212";
}

.myTechs{
  width:40%;
}

.down {
  color: rgb(255, 255, 255);
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