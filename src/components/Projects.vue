<template>
    <div class="allBox">
        <h1>
            My Projects
        </h1>
        <div class="caroussel">


<div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
  <img src="lgds.jpg" style="width:100%">
  <div class="text">Caption Text</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 3</div>
  <img src="lgds.jpg" style="width:100%">
  <div class="text">Caption Two</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 3</div>
  <img src="lgds.jpg" style="width:100%">
  <div class="text">Caption Three</div>
</div>

<a class="prev" v-on:click="plusSlides(-1)">test</a>
<a class="next" v-on:click="plusSlides(1)">test</a>

</div>
<br>

<div style="text-align:center">
  <span class="dot" v-on:click="currentSlide(1)"></span> 
  <span class="dot" v-on:click="currentSlide(2)"></span> 
  <span class="dot" v-on:click="currentSlide(3)"></span> 
</div>
        </div>
    </div>

</template>

<script>
    export default{
        data: function () {
            return {
                slideIndex: 1
            }
        },
        methods:{
            plusSlides: function(n){
                this.showSlides(this.slideIndex += n);
                console.log('test');
            },
            currentSlide: function(n){
                this.showSlides(this.slideIndex = n);
            },
            showSlides: function(n){
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {this.slideIndex = 1}    
            if (n < 1) {this.slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[this.slideIndex-1].style.display = "block";  
            dots[this.slideIndex-1].className += " active";
            }
        },
        created: function(){
            this.showSlides(1)
        }
    }
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
}

h1 {
    text-align: left;
    margin-top: 20px;
    margin-left: 15%;
    text-decoration: underline;
}

* {box-sizing: border-box}
body {font-family: Verdana, sans-serif; margin:0}
.mySlides {display: none}
img {vertical-align: middle;}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev, .next,.text {font-size: 11px}
}

</style>