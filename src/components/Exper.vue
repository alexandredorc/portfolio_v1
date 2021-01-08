<template>
    <div class="boxAll">
        <div class="content">
          <h2>
            My experiences
          </h2>
          <div class="collapse-list">
            <div class="collapse-head">
              Professional experiences
            </div>
            <div class="collapse-item" @click="collapse(0)">
              <div class="collapse-title">
                Exsymol SAM
              </div>
              <div class="collapse-content">
                  <strong style="color:  rgb(0, 140, 255);">Development of a Database using the Qualios App </strong> <br>
                  <i> February– April 2019 – Monaco </i>  <br> 
                  • Use of JavaScript, JQuery and HTML/CSS <br>
                  • Development of forms on the Qualios App <br>
                  • Introduction to project management; learn to write the 
                  necessary documents <br> for the project and organisation for the
                  different meeting<br><br>
                  <a href="https://www.exsymol.com/fr/" class="lien">Exsymol</a>
              </div>
            </div>
            <div class="collapse-item" @click="collapse(1)">
              <div class="collapse-title">
                Blocksi SAS
              </div>
              <div class="collapse-content">
                  <strong style="color:  rgb(0, 140, 255);"> Web Development for an EdTech App </strong> <br>
                  <i> May 2020 – August 2020 – Maribor Slovenia </i><br>
                  • Testing of different features <br>
                  • Development of a new feature for the Blocksi App <br>
                  • Learning the Frameworks NodeJS and VuejS <br><br>
                  <a href="https://www.blocksi.net/" class="lien">Blocksi</a>
              </div>
            </div>
            <div class="collapse-head">
                Extracuricular experiences
              </div>
            <div class="collapse-item" @click="collapse(2)">
              <div class="collapse-title">
                One to One journey in England
              </div>
              <div class="collapse-content">
                <strong style="color:  rgb(0, 140, 255);">2012 – 2017</strong>
                Full immersion in an english family (at least a week each year) <br>
                for a total of around 2-3 months
              </div>
            </div>
            <div class="collapse-item" @click="collapse(3)">
              <div class="collapse-title">
                Linguistic immersion in Argentina
              </div>
              <div class="collapse-content">
                <strong style="color:  rgb(0, 140, 255);">July 2017</strong>
                Full immersion in an Argentine family for 2 weeks in Buenos Aires
              </div>
            </div>
            <div class="collapse-item" @click="collapse(4)">
              <div class="collapse-title">
                Linguistic immersion in Australia
              </div>
              <div class="collapse-content">
                <strong style="color:  rgb(0, 140, 255);">June – August 2016</strong>
                Full immersion in an Australian family for two months <br>
                 • one month in holyday <br>
                 • one month in the <a href="https://www.mfac.edu.au/" class="lien">Matthew Findlers</a> Anglican school as an exchange student
              </div>
            </div>
          </div>
        </div>
        <a href="#fourth-page">
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
  methods: {
    collapse: function(i){
      
      var coll = document.getElementsByClassName("collapse-item");
      
      coll[i].firstElementChild.classList.toggle("active");
      var content = coll[i].lastElementChild;
      console.log(this.active+'  '+i);
      if (this.active==-1){
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.padding= "10px";
        this.active=i;
      }
      else if(this.active==i){
        content.style.maxHeight = null;
        content.style.padding= "0";
        this.active=-1;
      }
      else{
        coll[this.active].firstElementChild.classList.toggle("active");
        coll[this.active].lastElementChild.style.maxHeight = null;
        coll[this.active].lastElementChild.style.padding= "0";
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.padding= "10px";
        this.active=i;
      }
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
  height: 100% !important;
  padding-top: 100px;
  position: relative;
}

.content {
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: left;
  align-items: initial;
  line-height: 1.5;
  font-size: 20px;
  height: 70%;
  width: auto;
}

h2{
  margin-left: 70px;
  padding: auto;
}

.collapse-list{
  display: flex;
  width: 80%;
  flex-direction: column;
  float: right;
  margin: 0px 150px 20px 70px;
}

.collapse-head{
  background-color: rgb(56, 56, 56);
  color: white;
  padding: 10px;
  font-weight: bold;
  margin-top: 10px;
}

.collapse-title{
  background-color: rgba(167, 167, 167, 0.685);
  padding: 10px;
}
.collapse-title:hover{
  background-color: rgba(0, 0, 0, 0.561);
}
.collapse-title:before{
  content: '\002B';
  color: black;
  font-weight: bold;
  float: right;
  margin-left: 5px;
}

.collapse-content{
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.2s ease-out;
  background-color: #f1f1f171;
}

.active.collapse-title{
  background-color: #00000083;
}
.active.collapse-title:hover{
  background-color: rgba(0, 0, 0, 0.726);
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
  margin: auto;
  padding-left:20px ;
}

 @keyframes lien-hover {
        from {color: black;}
        to {color: rgb(255, 255, 255);
            background: rgba(0, 0, 0, 0.548);
            border-bottom: white;
            border-radius: 15px;
            padding: 3px 8px;
            }
    }

a.lien{
    color: black;
    font-weight: bold;
    border-bottom:solid black 3px;
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