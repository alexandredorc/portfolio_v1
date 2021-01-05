<template>
    <div class="boxAll">
            <div class="content">
                <div class="text">
                        <h1 class="text-item">
                            <strong>
                            Good Morning !!
                            </strong>
                        </h1>
                        <h2 class="text-item">
                            My name is Alexandre Dorcival <br> and this is my portfolio
                        </h2>
                        <h3 class="text-item">
                            I am a student at the IMT Lille Douai engineering school <br>
                            I am keen on science and IT <br>
                            <br>
                        </h3>
                </div>
                <div class="brand">
                <p>
                    <a href="https://www.facebook.com/profile.php?id=100012304111628" target="_blank"
                    ><font-awesome-icon :icon="['fab', 'facebook-square']"
                    /></a>
                </p>
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
                <p>
                    <a
                    href="https://www.instagram.com/alexslept/"
                    target="_blank"
                    ><font-awesome-icon :icon="['fab', 'instagram']"
                    /></a>
                </p>
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
import { gsap } from "gsap";
export default {
  mounted: () => {
    let tl = gsap.timeline();
    tl.from(".text .text-item", { duration: 0.5, opacity: 0, y: -50, stagger: 0.1 });
    tl.from(".brand p", { duration: 0.5, opacity: 0, y: 50, stagger: 0.1 });
    tl.from(".down", {
      duration: 0.5,
      opacity: 0,
      y: -50,
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
  display: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
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
}

.brand {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.brand p {
  color: black;
  font-size: 40px;
}
.down {
  color: black;
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