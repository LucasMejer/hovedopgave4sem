<script setup>
import { ref } from "vue"

const CarouselImages = [
    {scr:"/ikoner/index-masterdata-ikon.svg", text:"NEW LED ROPE LIGHTS" },
    {scr:"/ikoner/index-mediafile-ikon.svg", text:"Overskrift 2" },
    {scr:"/ikoner/index-pricelist-ikon.svg", text:"Overskrift 3" }
]

let currentImage = ref(0);

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
}

function next() {
  if (currentImage.value <= CarouselImages.length - 2) {
    currentImage.value++
  } else {
    currentImage.value = 0
  }
  UpdateBottomButtons();
}

function BottomButton(ImageIndex){
    currentImage.value = ImageIndex
    UpdateBottomButtons();
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

    
</script>

<template>
    <div class="CarouselDiv" aria-label="Nyhed Karrusel" CarouselData>
        <button class="CarouselButtonPrev" @click="prev"><img src="/ikoner/index-carousel-arrowleft.svg" alt=""></button>
        <button class="CarouselButtonNext" @click="next"><img src="/ikoner/index-carousel-arrowright.svg" alt=""></button>
        <div class="CarouselItem" >
            <img :src="CarouselImages[currentImage].scr" alt="">
            
        </div>
        <h1 class="CarouselText">{{ CarouselImages[currentImage].text }}</h1>
        <div class="CarouselBottomNav">
            <span class="CarouselBottomButton" :class="{CarouselBottomButtonSelected : Button1Selected}" @click="BottomButton(0)"></span>
            <span class="CarouselBottomButton" :class="{CarouselBottomButtonSelected : Button2Selected}" @click="BottomButton(1)"></span>
            <span class="CarouselBottomButton" :class="{CarouselBottomButtonSelected : Button3Selected}" @click="BottomButton(2)"></span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .CarouselDiv{
        position: relative;
        display: flex;
        width: 100%;
        height: 350px;
        justify-content: center;
        align-items: center;
        background-color: red;
        .CarouselItem{
            position: absolute;
            inset: 0;
            img{
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
            }
        }
        .CarouselText{
            z-index: 2;
            display: block;
            position: absolute;
            text-align: center;
        }
        .CarouselButtonPrev{
           display: none;
        }

        .CarouselButtonNext{
           display: none;
        }
        button{
            z-index: 2;
            position: absolute;
            color: rgba(255, 255, 255, 0.603);
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
                width: 20px;
                height: 20px;
                display: inline-block;
                background-color: rgba(255, 255, 255, 0.409);
                border-radius: 50px;
                margin: 0 10px;
                cursor: pointer;
            }
            .CarouselBottomButtonSelected{
                background-color: rgba(255, 255, 255, 0.851);
            }
        }
    }  

    @media only screen and (min-width: 768px){
        .CarouselDiv{
            .CarouselButtonPrev{
                display: block;
                left: 1rem; 
            }

            .CarouselButtonNext{
                display: block;
                right: 1rem;
            }
        }
    }
</style>
