
<template>
    <div class="allBox">
        <h1>
               About Me
       </h1>
       <div class="content">

            <div class="text">
                I am actually in third year of engineering school in the <a class="blue" href="http://imt-lille-douai.fr/en/"> Mines-Telecoms Institut of Lille Douai. </a>
                <br>
                It is a <a class="blue" href="http://imt-lille-douai.fr/en/formations/all-courses/general-engineering-studies/syllabus/">
                general engineering school </a> , but my main domain is Computer Sciences and my minor is Services and Industry  
                <br>
                I have started programing when I was 15 during IT class in highschool, then I start to learn by myself. 
                <br>
                I also like travels, musique, cinema, and spending time with my friends.
                <br>
                I work with many different technologies.
                <br>
            </div>    
            <div class="Mytechs">
              <div class="tech">
                Python
              </div>
              <div class="tech">
                Django
              </div>
              <div class="tech">
                C/C++
              </div>
              <div class="tech">
                HTML/CSS
              </div>
              <div class="tech">
                JavaScript
              </div>
              <div class="tech">
                NodeJS
              </div>
              <div class="tech">
                VueJS
              </div>
              <div class="tech">
                Git
              </div>
              <div class="tech">
                GitHub
              </div>
              <div class="tech">
                GitLab
              </div>
            </div>
                <div class="center">
                <a class="CV" href="CV-en-anglais.pdf" download>Download my CV</a>
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
</script>


<style scoped>
.allBox {
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
  text-align: left;
}

.content{
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: left;
  align-items: initial;
  line-height: 1.5;
  font-size: 20px;
  height: 70%;
  width: auto;
  display: flex;
}

h1{
  margin-left: 70px;
  padding: auto;
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

.text{
  margin: 40px 40px 40px 60px;
  width: 40%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.384);
}

a.blue{
  color:  rgb(66, 114, 185);
  border-radius: 10px;
  padding: 0px 5px;
  display: inline-block;
  font-weight: bold;
  transition: 0.2s;
}
a.blue:hover{
  background-color: rgb(66, 114, 185);
  color: rgba(255, 255, 255, 0.925);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.678);
  transition: 0.2s;
  transform: scale(1.05);
}

.Mytechs{
  align-content: flex-start;
  display: flex;
  flex-wrap: wrap ;
  justify-content: space-around;
  width: 30%;
  margin:30px 10% 10px 10%;
  text-align: left;
}
.tech{
  border: solid rgb(192, 29, 29) 4px;
  border-radius: 8px;
  padding: 0 5px;
  margin: 10px 5px;
}

.center{
  width: max-content;
  margin: 0 auto;
}

a.CV{
  border:solid rgb(66, 114, 185) 4px;
  color:  rgb(66, 114, 185);
  border-radius: 10px;
  padding: 0px 5px;
  display: inline-block;
  font-weight: bold;
  transition: 0.2s;
  background-color: rgba(255, 255, 255, 0.616);
}
a.CV:hover{
  background-color: rgb(66, 114, 185);
  color: rgba(255, 255, 255, 0.925);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.678);
  transition: 0.2s;
  transform: scale(1.2);
}
</style>