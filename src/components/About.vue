
<template>
    <div class="allBox">
       <div class="content">
           <h2>
               About Me
           </h2>

            <div class="text">
                
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
}

h2{
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
</style>