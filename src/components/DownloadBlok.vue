<script setup>
import { ref } from 'vue';

const selected = ref([])

const filesshown = ref(true)

const imagesshown = ref(false)

const counterplus = () => {
    currentCounter.value = (currentCounter.value + 1) % totalcounts.value
}

const counterminus = () => {
    currentCounter.value = (currentCounter.value === 0 ? totalcounts.value -1 : currentCounter.value -1 )
}

const clearAll = () => {
    selected.value = []
}

const toggleSelection = (value) => {
  if (selected.value.includes(value)) {
    selected.value = selected.value.filter(item => item !== value)
  } else {
    selected.value.push(value)
  }
}
//om overlay skal være vist
const openOverlay = ref (false)

//refference til billede
const overlayImage = ref ("")

function activateOverlay(link){
    overlayImage.value = link
    openOverlay.value = true
}

</script>

<template>
<!-- fullscreenview styrer at overlay af billede kommer op -->
<div class="fullscreenview" v-if="openOverlay" @click="openOverlay = false">
    <img :src="overlayImage" alt="">
</div>
 <div class="downloadblok">
        <button @click="filesshown = true, imagesshown = false" :class="{ valgt: filesshown }">Files</button>
        <button @click="imagesshown = true, filesshown = false" :class="{ valgt: imagesshown }">Images</button>
        <div class="scroll" v-if="filesshown">
            <div class="scroll-blok-card" @click="toggleSelection('manual')" :class="{ 'blok-card-valgt': selected.includes('manual') }">
                <img src="/public/download/novamini-manual.jpg" alt="">
                <p>NOVA MINI Manual (PDF)</p>
                <img v-if="selected.includes('manual')" 
                src="/public/ikoner/check.svg"
                alt="selected" 
                class="checkmark">
                <div class="scroll-blok-card-blok">
                    <div class="preview" @click="activateOverlay('/public/download/novamini-manual.jpg')">
                        <img src="/public/ikoner/eye-icon.svg" alt="">
                    </div>
                    <img src="/public/ikoner/download-ikon.svg" alt="">
                </div>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('productvideo')" :class="{ 'blok-card-valgt': selected.includes('productvideo') }">
                <img src="/public/download/novamini-mp4.png" alt="">
                <p>NOVA MINI Product Video</p>
                <img v-if="selected.includes('productvideo')" 
                src="/public/ikoner/check.svg"
                alt="selected" 
                class="checkmark">
                <div class="scroll-blok-card-blok">
                    <div class="preview" @click="activateOverlay('/public/download/novamini-mp4.png')">
                        <img src="/public/ikoner/eye-icon.svg" alt="">
                    </div>
                    <img src="/public/ikoner/download-ikon.svg" alt="">
                </div>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('safetydata')" :class="{ 'blok-card-valgt': selected.includes('safetydata') }">
                <img src="/public/download/novamini-safety-data.jpg" alt="">
                <p>NOVA MINI Safety data</p>
                <img v-if="selected.includes('safetydata')" 
                src="/public/ikoner/check.svg"
                alt="selected" 
                class="checkmark">
                <div class="scroll-blok-card-blok">
                    <div class="preview" @click="activateOverlay('/public/download/novamini-safety-data.jpg')">
                        <img src="/public/ikoner/eye-icon.svg" alt="">
                    </div>
                    <img src="/public/ikoner/download-ikon.svg" alt="">
                </div>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('productsheet')" :class="{ 'blok-card-valgt': selected.includes('productsheet') }">
                <img src="/public/download/novamini-productsheet-uk.jpg" alt="">
                <p>NOVA MINI Productsheet UK</p>
                <img v-if="selected.includes('productsheet')" 
                src="/public/ikoner/check.svg"
                alt="selected" 
                class="checkmark">
                <div class="scroll-blok-card-blok">
                    <div class="preview" @click="activateOverlay('/public/download/novamini-productsheet-uk.jpg')">
                        <img src="/public/ikoner/eye-icon.svg" alt="">
                    </div>
                    <img src="/public/ikoner/download-ikon.svg" alt="">
                </div>
            </div>
              <div class="scroll-blok-card" @click="toggleSelection('declaration')" :class="{ 'blok-card-valgt': selected.includes('declaration') }">
                <img src="/public/download/novamini-eu-declaration.jpg" alt="">
                <p>NOVA MINI Declaration of Conformity</p>
                <img v-if="selected.includes('declaration')" 
                src="/public/ikoner/check.svg"
                alt="selected" 
                class="checkmark"> 
                <div class="scroll-blok-card-blok">
                    <div class="preview" @click="activateOverlay('/public/download/novamini-eu-declaration.jpg')">
                        <img src="/public/ikoner/eye-icon.svg" alt="">
                    </div>
                    <img src="/public/ikoner/download-ikon.svg" alt="">
                </div>
            </div>
        </div>
         <div class="scroll" v-if="imagesshown">
            <div class="scroll-blok-card" @click="toggleSelection('productimage')" :class="{ 'blok-card-valgt': selected.includes('productimage') }">
                <img src="/public/novamini.png" alt="">
                <p>NOVA MINI</p>
                <img v-if="selected.includes('productimage')" 
                src="/public/ikoner/check.svg"
                alt="selected" 
                class="checkmark">
                <div class="scroll-blok-card-blok">
                    <div class="preview" @click="activateOverlay('/public/download/novamini.png')">
                        <img src="/public/ikoner/eye-icon.svg" alt="">
                    </div>
                    <img src="/public/ikoner/download-ikon.svg" alt="">
                </div> 
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('pocketuse')" :class="{ 'blok-card-valgt': selected.includes('pocketuse') }">
                <img src="/public/novamini-i-brug.jpg" alt="">
                <p>NOVA MINI pocket use</p>
                <img v-if="selected.includes('pocketuse')" 
                src="/public/ikoner/check.svg"
                alt="selected" 
                class="checkmark">
                <div class="scroll-blok-card-blok">
                    <div class="preview" @click="activateOverlay('/public/download/novamini-i-brug.jpg')">
                        <img src="/public/ikoner/eye-icon.svg" alt="">
                    </div>
                    <img src="/public/ikoner/download-ikon.svg" alt="">
                </div>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('nineteenthdegree')" :class="{ 'blok-card-valgt': selected.includes('nineteenthdegree') }">
                <img src="/public/novamini-nineteenth-degree-angle.jpg" alt="">
                <p>NOVA MINI flexibility</p>
                <img v-if="selected.includes('nineteenthdegree')" 
                src="/public/ikoner/check.svg"
                alt="selected" 
                class="checkmark">
                <div class="scroll-blok-card-blok">
                    <div class="preview" @click="activateOverlay('/public/download/novamini-nineteenth-degree-angle.jpg')">
                        <img src="/public/ikoner/eye-icon.svg" alt="">
                    </div>
                    <img src="/public/ikoner/download-ikon.svg" alt="">
                </div>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('magnetattachment')" :class="{ 'blok-card-valgt': selected.includes('magnetattachment') }">
                <img src="/public/novamini-magnet-attachment.jpg" alt="">
                <p>Magnetic attachment</p>
                <img v-if="selected.includes('magnetattachment')" 
                src="/public/ikoner/check.svg"
                alt="selected" 
                class="checkmark">
                <div class="scroll-blok-card-blok">
                    <div class="preview" @click="activateOverlay('/public/download/novamini-magnet-attachment.jpg')">
                        <img src="/public/ikoner/eye-icon.svg" alt="">
                    </div>
                    <img src="/public/ikoner/download-ikon.svg" alt="">
                </div>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('onmiddlefinger')" :class="{ 'blok-card-valgt': selected.includes('onmiddlefinger') }">
                <img src="/public/novamini-on-middlefinger.jpg" alt="">
                <p>NOVA MINI in hand</p>
                <img v-if="selected.includes('onmiddlefinger')" 
                src="/public/ikoner/check.svg"
                alt="selected" 
                class="checkmark">
                <div class="scroll-blok-card-blok">
                    <div class="preview" @click="activateOverlay('/public/download/novamini-on-middlefinger.jpg')">
                        <img src="/public/ikoner/eye-icon.svg" alt="">
                    </div>
                    <img src="/public/ikoner/download-ikon.svg" alt="">
                </div>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('optilight')" :class="{ 'blok-card-valgt': selected.includes('optilight') }">
                <img src="/public/novamini-opti-light.jpg" alt="">
                <p>OPTI Light settings</p>
                <img v-if="selected.includes('optilight')" 
                src="/public/ikoner/check.svg"
                alt="selected" 
                class="checkmark">
                <div class="scroll-blok-card-blok">
                    <div class="preview" @click="activateOverlay('/public/download/novamini-opti-light.jpg')">
                        <img src="/public/ikoner/eye-icon.svg" alt="">
                    </div>
                    <img src="/public/ikoner/download-ikon.svg" alt="">
                </div>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('sparepartsoverview')" :class="{ 'blok-card-valgt': selected.includes('sparepartsoverview') }">
                <img src="/public/novamini-spareparts.jpg" alt="">
                <p>Spareparts overview</p>
                <img v-if="selected.includes('sparepartsoverview')" 
                src="/public/ikoner/check.svg"
                alt="selected" 
                class="checkmark">
                <div class="scroll-blok-card-blok">
                    <div class="preview" @click="activateOverlay('/public/download/novamini-spareparts.jpg')">
                        <img src="/public/ikoner/eye-icon.svg" alt="">
                    </div>
                    <img src="/public/ikoner/download-ikon.svg" alt="">
                </div>
            </div>
        </div>
        <div class="overlay">
            <div class="clearAll">
                <p @click="clearAll">Clear selection</p>
            </div>
            <div class="aligmentright">
                <div class="amount-selected-counter">
                    <p>{{ selected.length }} Files selected</p>
                </div>
                <button class="downloadbutton">
                    Download
                    <img class="download-icon" src="/public/ikoner/download-ikon.svg" alt="">
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@use '../assets/_headings.scss' as f;
@use '../assets/_colors.scss' as c;

@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.downloadblok{
    margin: 40px auto;
}

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

button{
    border: solid 0.1px rgba(218, 218, 218, 1);;
    background-color: rgba(218, 218, 218, 1);
    align-items: baseline;
    font-size: 18px;
    padding: 10px;
    
}

.aligmentright{
    display: flex;
    align-items: center;
    gap: 0px 12px;
}

.downloadbutton{
    color: c.$font-color-secondary;
    background-color: c.$red-color-logo;
    border-color: c.$red-color-logo;
    font-family: f.$font-primary;
    text-align: center;
    display: flex;
    align-items: center;
    padding-top: 15px;
}

.scroll{
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: auto;
    height: 200px;
    display: grid;
    grid-template-columns: auto auto;
    object-fit: cover;
    padding: 10px auto;
    grid-gap: 0px 15px;
    border-top: solid 0.1px c.$font-color-primary;
    border-left: solid 0.1px c.$font-color-primary;
    border-right: solid 0.1px c.$font-color-primary;

}

.scroll-blok-card{
    position: relative;
    margin: 20px 10px;
    padding: 10px;
    background-color: c.$font-color-secondary;
    max-width: 135px;
    border: solid 5px white;
  
    box-sizing: border-box;
    outline: solid 0.1px c.$font-color-primary;
    display: flex;
    flex-direction: column;
    gap: 5%;
}


.blok-card-valgt{
    box-sizing: border-box;
    border: solid 5px c.$font-color-primary;
    outline: solid 0.1px c.$font-color-primary;
    .checkmark {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 40px;
    height: 40px;
    pointer-events: none;
    filter: invert(50%) sepia(100%) saturate(500%) hue-rotate(90deg);
}
}

.overlay{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(218, 218, 218, 1);
    border-top: solid 0.1px c.$font-color-primary;
    padding: 10px;
}

.valgt{
    font-weight: 600;
    background-color: c.$font-color-secondary;
    border-color: c.$font-color-secondary;
    border-top: solid 0.1px c.$font-color-primary;
    border-left: solid 0.1px c.$font-color-primary;
    border-right: solid 0.1px c.$font-color-primary;
    /*outline-bottom: solid 0.1px c.$font-color-secondary;*/
    box-shadow: 0 5px 0 -0.5px c.$font-color-secondary;
    
    /*outline-top: c.$font-color-primary;*/
}

.clearAll{
    text-decoration: underline;
    &:hover {
        color: c.$font-color-secondary;
        cursor: pointer;
        p{
            color: c.$font-color-secondary;
        }
    }
}

    .download-icon {
        margin-bottom: 5px;
    }

    .fullscreenview{
        z-index: 5;
        position: fixed;
        left: 0%;
        right: 0%;
        top: 0%;
        bottom: 0%;
        background-color: rgba(0, 0, 0, 0.404);
        img{
        width: 30%;
        height: auto;
        margin: 10% 35% 0% 35%;
        }
    }

@media only screen and (min-width: 768px){
    .scroll{
        height: 25vw;
        grid-template-columns: repeat(auto-fit, 145px);
        justify-content: space-around;
        width: auto;
        padding-right: 2.5%;
    }

    .downloadblok{
    margin: 0px;
    }

    .scroll-blok-card{
        display: flex;
        flex-direction: column;
        width: 125px;
    }

    .scroll-blok-card-blok{
        display: flex;
        width: 100%;
        justify-content: space-between;
        img{
            object-fit: contain;
            width: fit-content;
            max-width: 25px;
            filter: brightness(0);
        }
    }

}
</style>