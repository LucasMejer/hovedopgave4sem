<script setup>
import { ref } from "vue"

const CarouselImages = [
    {scr:"index-carousel-billede1.Jpg", text:"NEW LED ROPE LIGHTS" },
    {scr:"index-carousel-billede2.Jpg", text:"LIGHT + BUILDING 2026" },
    {scr:"index-carousel-billede3.Jpg", text:"ATTRACTIVE PROMOTION PACKAGES" }
]

let currentImage = ref(0);

let stopAutoScrollBool = ref(false);

let Button1Selected = ref(true);
let Button2Selected = ref(false);
let Button3Selected = ref(false);

function prev() {
  if (currentImage.value > 0) {
    currentImage.value--
  } else {
    currentImage.value = CarouselImages.length - 1 // jump to end
  }
  UpdateBottomButtons();
  stopAutoScroll();
}

function next() {
  if (currentImage.value <= CarouselImages.length - 2) {
    currentImage.value++
  } else {
    currentImage.value = 0
  }
  UpdateBottomButtons();
  stopAutoScroll();
}

function autonext() {
  if (currentImage.value <= CarouselImages.length - 2) {
    currentImage.value++
  } else {
    currentImage.value = 0
  }
  UpdateBottomButtons();
}

function stopAutoScroll(){
    stopAutoScrollBool.value = true;
}

function BottomButton(ImageIndex){
    currentImage.value = ImageIndex
    UpdateBottomButtons();
    stopAutoScroll();
}

function UpdateBottomButtons(){
    if(currentImage.value == 0){
        Button1Selected.value = true
        Button2Selected.value = false
        Button3Selected.value = false
    }else if(currentImage.value == 1){
        Button1Selected.value = false
        Button2Selected.value = true
        Button3Selected.value = false
    }else{
        Button1Selected.value = false
        Button2Selected.value = false
        Button3Selected.value = true
    }
}

setTimeout(autoScrollFunction, 4000);

function autoScrollFunction() {
    if(!stopAutoScrollBool.value){
        autonext();
        setTimeout(autoScrollFunction, 4000)
    }
}
    
</script>

<template>
    <div class="CarouselDiv" aria-label="Nyhed Karrusel" CarouselData>
        <button class="CarouselButtonPrev NavButtons" @click="prev"><img src="/ikoner/index-carousel-arrowleft.svg" alt="Previous carousel image"></button>
        <button class="CarouselButtonNext NavButtons" @click="next"><img src="/ikoner/index-carousel-arrowright.svg" alt="Next carousel image"></button>
        <div class="CarouselItem" >
            <Transition>
                <span v-show="currentImage == 0">
                    <img  :src="CarouselImages[0].scr" alt="News picture 1">
                </span>
            </Transition>

            <Transition>
                <span v-show="currentImage == 1">
                    <img  :src="CarouselImages[1].scr" alt="News picture 2">
                </span>
            </Transition>

            <Transition>
                <span v-show="currentImage == 2">
                    <img  :src="CarouselImages[2].scr" alt="News picture 3">
                </span>
            </Transition>

        </div>
        <div class="CarouselTextDiv">
            <h1>{{ CarouselImages[currentImage].text }}</h1>
            <button class="ReadmoreButton">
                <h3>
                    Read more
                </h3>
            </button>
        </div>
        
        <div class="CarouselBottomNav">
            <span class="CarouselBottomButton" :class="{CarouselBottomButtonSelected : Button1Selected}" @click="BottomButton(0)" tabindex="0" @keydown.enter="BottomButton(0)"></span>
            <span class="CarouselBottomButton" :class="{CarouselBottomButtonSelected : Button2Selected}" @click="BottomButton(1)" tabindex="0" @keydown.enter="BottomButton(1)"></span>
            <span class="CarouselBottomButton" :class="{CarouselBottomButtonSelected : Button3Selected}" @click="BottomButton(2)" tabindex="0" @keydown.enter="BottomButton(2)"></span>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    @use '../assets/_colors' as c;

    .v-enter-active , .v-leave-active {
    transition: opacity 1s ease;
    }

    .v-enter-from, .v-leave-to {
    opacity: 0;
    }


    .CarouselDiv{
        position: relative;
        display: flex;
        width: 100%;
        height: 300px;
        justify-content: center;
        align-items: center;
        background-color: c.$font-color-primary;
        .CarouselItem{
            position: absolute;
            inset: 0;
            img{
                display: block;
                position: absolute;
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
                opacity: 0.5;
            }
        }
        .CarouselTextDiv{
            z-index: 2;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            flex-wrap: wrap;
            width: 85%;
            gap: 0px;
            h1{
                text-align: center;
                color: c.$font-color-secondary;
                width: 85%;
                line-height: 1;
                margin: 15px auto;
            }
            .ReadmoreButton{
                width: 30%;
                height: 50px;
                margin: auto;
                background-color: c.$font-color-secondary;
                border-color: c.$font-color-primary;
                border-style: solid;
                border-width: 1px;
                cursor: pointer;
                h3{
                    text-align: center;
                    margin-bottom: -4px;
                }
            }
        }
        .CarouselButtonPrev{
           display: none;
        }

        .CarouselButtonNext{
           display: none;
        }
        .NavButtons{
            z-index: 2;
            position: absolute;
            color: rgba(255, 255, 255, 0.6);
            cursor: pointer;
            border-radius: 100%;
            padding: 0px;
            border: 0px;
            background-color: #00000000;
            img{
                border-radius: 100%;
            }
        }
        

        .CarouselBottomNav{
            width: 100%;
            padding: 20px 0;
            position: absolute;
            bottom: 0;
            left: 0;
            text-align: center;
            .CarouselBottomButton{
                width: 24px;
                height: 24px;
                display: inline-block;
                background-color: rgba(255, 255, 255, 0.4);
                border-radius: 50px;
                margin: 0 10px;
                cursor: pointer;
            }
            .CarouselBottomButtonSelected{
                background-color: rgba(255, 255, 255, 0.8);
            }
        }
    }  

    @media only screen and (min-width: 768px){
        .CarouselDiv{
            width: 100%;
            margin: 0px;
            height: 350px;
            .CarouselButtonPrev{
                display: block;
                left: 1rem; 
            }

            .CarouselButtonNext{
                display: block;
                right: 1rem;
            }
            .CarouselBottomNav{
                .CarouselBottomButton{
                    width: 18px;
                    height: 18px;
                }
            }
        }
        
    }
</style>
