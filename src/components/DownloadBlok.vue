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
            <div class="scroll-blok-card" @click="toggleSelection('manual')" :class="{ 'blok-card-valgt': selected.includes('manual') }" :aria-pressed="selected.includes('manual')" aria-label="Select NOVA MINI Manual PDF" tabindex="0" @keydown.enter="toggleSelection('manual')">
                <img src="/public/download/novamini-manual.jpg" alt="">
                <p>NOVA MINI Manual (PDF)</p>
                <img v-if="selected.includes('manual')" 
                src="/public/ikoner/check.svg"
                alt="selected" 
                class="checkmark">
                <div class="scroll-blok-card-blok">
                    <button class="preview" @click.stop="activateOverlay('/public/download/novamini-manual.jpg')" type="button" aria-label="Preview NOVA MINI Manual">
                        <img src="/public/ikoner/eye-icon.svg" alt="">
                    </button>
                    <button type="button" class="download" aria-label="Download NOVA MINI PDF Manual">
                        <img src="/public/ikoner/download-ikon.svg" alt="">
                    </button>
                </div>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('productvideo')" :class="{ 'blok-card-valgt': selected.includes('productvideo') }" :aria-pressed="selected.includes('productvideo')" aria-label="Select NOVA MINI mp4" tabindex="0" @keydown.enter="toggleSelection('productvideo')">
                <img src="/public/download/novamini-mp4.png" alt="">
                <p>NOVA MINI Product Video</p>
                <img v-if="selected.includes('productvideo')" 
                src="/public/ikoner/check.svg"
                alt="selected" 
                class="checkmark">
                <div class="scroll-blok-card-blok">
                    <button class="preview" @click.stop="activateOverlay('/public/download/novamini-mp4.png')" type="button" aria-label="Preview NOVA MINI mp4">
                        <img src="/public/ikoner/eye-icon.svg" alt="">
                    </button>
                    <button type="button" class="download" aria-label="Download NOVA MINI product video">
                        <img src="/public/ikoner/download-ikon.svg" alt="">
                    </button>
                </div>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('safetydata')" :class="{ 'blok-card-valgt': selected.includes('safetydata') }" :aria-pressed="selected.includes('safetydata')" aria-label="Select NOVA MINI safetydata PDF" tabindex="0" @keydown.enter="toggleSelection('saftydata')">
                <img src="/public/download/novamini-safety-data.jpg" alt="">
                <p>NOVA MINI Safety data</p>
                <img v-if="selected.includes('safetydata')" 
                src="/public/ikoner/check.svg"
                alt="selected" 
                class="checkmark">
                <div class="scroll-blok-card-blok">
                    <button class="preview" @click.stop="activateOverlay('/public/download/novamini-safety-data.jpg')" type="button" aria-label="Preview NOVA MINI safetydata PDF">
                        <img src="/public/ikoner/eye-icon.svg" alt="">
                    </button>
                    <button type="button" class="download" aria-label="Download NOVA MINI safetydata PDF">
                        <img src="/public/ikoner/download-ikon.svg" alt="" >
                    </button>
                </div>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('productsheet')" :class="{ 'blok-card-valgt': selected.includes('productsheet') }" :aria-pressed="selected.includes('productsheet')" aria-label="Select NOVA MINI productsheet uk PDF" tabindex="0" @keydown.enter="toggleSelection('productsheet')">
                <img src="/public/download/novamini-productsheet-uk.jpg" alt="">
                <p>NOVA MINI Productsheet UK</p>
                <img v-if="selected.includes('productsheet')" 
                src="/public/ikoner/check.svg"
                alt="selected" 
                class="checkmark">
                <div class="scroll-blok-card-blok">
                    <button class="preview" @click.stop="activateOverlay('/public/download/novamini-productsheet-uk.jpg')" type="button" aria-label="Preview NOVA MINI productsheet uk PDF">
                        <img src="/public/ikoner/eye-icon.svg" alt="">
                    </button>
                    <button type="button" class="download" aria-label="Download NOVA MINI productsheet uk PDF">
                        <img src="/public/ikoner/download-ikon.svg" alt="">
                    </button>
                </div>
            </div>
              <div class="scroll-blok-card" @click="toggleSelection('declaration')" :class="{ 'blok-card-valgt': selected.includes('declaration') }" :aria-pressed="selected.includes('declaration')" aria-label="Select NOVA MINI declaration eu PDF" tabindex="0" @keydown.enter="toggleSelection('declaration')">
                <img src="/public/download/novamini-eu-declaration.jpg" alt="">
                <p>NOVA MINI Declaration of Conformity</p>
                <img v-if="selected.includes('declaration')" 
                src="/public/ikoner/check.svg"
                alt="selected" 
                class="checkmark"> 
                <div class="scroll-blok-card-blok">
                    <button class="preview" @click.stop="activateOverlay('/public/download/novamini-eu-declaration.jpg')" type="button" aria-label="Preview NOVA MINI declaration eu PDF">
                        <img src="/public/ikoner/eye-icon.svg" alt="">
                    </button>
                    <button type="button" class="download" aria-label="Download NOVA MINI declaration eu PDF">
                        <img src="/public/ikoner/download-ikon.svg" alt="">
                    </button>
                </div>
            </div>
        </div>
         <div class="scroll" v-if="imagesshown">
            <div class="scroll-blok-card" @click="toggleSelection('productimage')" :class="{ 'blok-card-valgt': selected.includes('productimage') }" :aria-pressed="selected.includes('productimage')" aria-label="Select NOVA MINI productimage" tabindex="0" @keydown.enter="toggleSelection('productimage')">
                <img src="/public/novamini.png" alt="">
                <p>NOVA MINI</p>
                <img v-if="selected.includes('productimage')" 
                src="/public/ikoner/check.svg"
                alt="selected" 
                class="checkmark">
                <div class="scroll-blok-card-blok">
                    <button class="preview" @click.stop="activateOverlay('/public/download/novamini.png')" type="button" aria-label="Preview NOVA MINI declaration eu PDF">
                        <img src="/public/ikoner/eye-icon.svg" alt="">
                    </button>
                    <button type="button" class="download" aria-label="Download NOVA MINI declaration eu PDF">
                        <img src="/public/ikoner/download-ikon.svg" alt="">
                    </button>
                </div> 
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('pocketuse')" :class="{ 'blok-card-valgt': selected.includes('pocketuse') }" :aria-pressed="selected.includes('pocketuse')" aria-label="Select NOVA MINI pocketuse productimage" tabindex="0" @keydown.enter="toggleSelection('pocketuse')">
                <img src="/public/novamini-i-brug.jpg" alt="">
                <p>NOVA MINI pocket use</p>
                <img v-if="selected.includes('pocketuse')" 
                src="/public/ikoner/check.svg"
                alt="selected" 
                class="checkmark">
                <div class="scroll-blok-card-blok">
                    <button class="preview" @click.stop="activateOverlay('/public/download/novamini-i-brug.jpg')" type="button" aria-label="Preview NOVA MINI pocketuse productimage">
                        <img src="/public/ikoner/eye-icon.svg" alt="">
                    </button>
                    <button type="button" class="download" aria-label="Download NOVA MINI pocketuse productimage jpg">
                        <img src="/public/ikoner/download-ikon.svg" alt="">
                    </button>
                </div>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('nineteenthdegree')" :class="{ 'blok-card-valgt': selected.includes('nineteenthdegree') }" :aria-pressed="selected.includes('nineteenthdegree')" aria-label="Select NOVA MINI ninetheenth degree product angle productimage" tabindex="0" @keydown.enter="toggleSelection('nineteenthdegree')">
                <img src="/public/novamini-nineteenth-degree-angle.jpg" alt="">
                <p>NOVA MINI flexibility</p>
                <img v-if="selected.includes('nineteenthdegree')" 
                src="/public/ikoner/check.svg"
                alt="selected" 
                class="checkmark">
                <div class="scroll-blok-card-blok">
                    <button class="preview" @click.stop="activateOverlay('/public/download/novamini-nineteenth-degree-angle.jpg')" type="button" aria-label="Preview NOVA MINI ninetheenth degree product angle productimage">
                        <img src="/public/ikoner/eye-icon.svg" alt="">
                    </button>
                    <button type="button" class="download" aria-label="Download NOVA MINI ninetheenth degree product angle productimage jpg">
                        <img src="/public/ikoner/download-ikon.svg" alt="">
                    </button>
                </div>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('magnetattachment')" :class="{ 'blok-card-valgt': selected.includes('magnetattachment') }" :aria-pressed="selected.includes('magnetattachment')" aria-label="Select NOVA MINI magnet attachment productimage" tabindex="0" @keydown.enter="toggleSelection('magnetattachment')">
                <img src="/public/novamini-magnet-attachment.jpg" alt="">
                <p>Magnetic attachment</p>
                <img v-if="selected.includes('magnetattachment')" 
                src="/public/ikoner/check.svg"
                alt="selected" 
                class="checkmark">
                <div class="scroll-blok-card-blok">
                    <button class="preview" @click.stop="activateOverlay('/public/download/novamini-magnet-attachment.jpg')" type="button" aria-label="Preview NOVA MINI magnet attachment productimage">
                        <img src="/public/ikoner/eye-icon.svg" alt="">
                    </button>
                    <button type="button" class="download" aria-label="Download NOVA MINI magnet attachment productimage jpg">
                        <img src="/public/ikoner/download-ikon.svg" alt="">
                    </button>
                </div>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('onmiddlefinger')" :class="{ 'blok-card-valgt': selected.includes('onmiddlefinger') }" :aria-pressed="selected.includes('onmiddlefinger')" aria-label="Select NOVA MINI on middlefinger productimage" tabindex="0" @keydown.enter="toggleSelection('onmiddlefinger')">
                <img src="/public/novamini-on-middlefinger.jpg" alt="">
                <p>NOVA MINI in hand</p>
                <img v-if="selected.includes('onmiddlefinger')" 
                src="/public/ikoner/check.svg"
                alt="selected" 
                class="checkmark">
                <div class="scroll-blok-card-blok">
                    <button class="preview" @click.stop="activateOverlay('/public/download/novamini-on-middlefinger.jpg')" type="button" aria-label="Preview NOVA MINI on middlefinger productimage">
                        <img src="/public/ikoner/eye-icon.svg" alt="">
                    </button>
                    <button type="button" class="download" aria-label="Download NOVA MINI on middlefinger productimage jpg">
                        <img src="/public/ikoner/download-ikon.svg" alt="">
                    </button>
                </div>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('optilight')" :class="{ 'blok-card-valgt': selected.includes('optilight') }" :aria-pressed="selected.includes('optilight')" aria-label="Select NOVA MINI optilight settings productimage" tabindex="0" @keydown.enter="toggleSelection('optilight')">
                <img src="/public/novamini-opti-light.jpg" alt="">
                <p>OPTI Light settings</p>
                <img v-if="selected.includes('optilight')" 
                src="/public/ikoner/check.svg"
                alt="selected" 
                class="checkmark">
                <div class="scroll-blok-card-blok">
                    <button class="preview" @click.stop="activateOverlay('/public/download/novamini-opti-light.jpg')" type="button" aria-label="Preview NOVA MINI optilight settings productimage">
                        <img src="/public/ikoner/eye-icon.svg" alt="">
                    </button>
                    <button type="button" class="download" aria-label="Download NOVA MINI optilight settings productimage jpg">
                        <img src="/public/ikoner/download-ikon.svg" alt="">
                    </button>
                </div>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('sparepartsoverview')" :class="{ 'blok-card-valgt': selected.includes('sparepartsoverview') }" :aria-pressed="selected.includes('sparepartsoverview')" aria-label="Select NOVA MINI spareparts overview productimage" tabindex="0" @keydown.enter="toggleSelection('sparepartsoverview')">
                <img src="/public/novamini-spareparts.jpg" alt="">
                <p>Spareparts overview</p>
                <img v-if="selected.includes('sparepartsoverview')" 
                src="/public/ikoner/check.svg"
                alt="selected" 
                class="checkmark">
                <div class="scroll-blok-card-blok">
                    <button class="preview" @click.stop="activateOverlay('/public/download/novamini-spareparts.jpg')" type="button" aria-label="Preview NOVA MINI spareparts overview productimage">
                        <img src="/public/ikoner/eye-icon.svg" alt="">
                    </button>
                    <button type="button" class="download" aria-label="Download NOVA MINI spareparts overview productimage jpg">
                        <img src="/public/ikoner/download-ikon.svg" alt="">
                    </button>
                </div>
            </div>
        </div>
        <div class="overlay">
            <button class="clearAll" @click="clearAll">
                    <p>Clear selection</p>
            </button>
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
    border: solid 2px white;
    box-sizing: border-box;
    outline: solid 0.1px c.$font-color-primary;
    display: flex;
    flex-direction: column;
    gap: 5%;
    &:focus-visible{
        outline: 3px solid black;
        outline-offset: 2px;
    }
}

.scroll-blok-card-blok{
    button{
        background-color: c.$font-color-secondary;
        border: none;
    }
}

.blok-card-valgt{
    box-sizing: border-box;
    border: solid 2px c.$font-color-primary;
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
    &:hover {
        color: c.$font-color-secondary;
        cursor: pointer;
        text-decoration: underline;
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
        &:hover{
            border-color: grey;
            cursor: pointer;
        }
    }

    .blok-card-valgt{
         &:hover{
            border-color: rgb(0, 0, 0);
            cursor: pointer;
        }
    }

    .scroll-blok-card-blok{
        display: flex;
        width: 100%;
        justify-content: space-between;
        button{
        background-color: c.$font-color-secondary;
        border: none;
        }
        img{
            object-fit: contain;
            width: fit-content;
            max-width: 25px;
            filter: brightness(0);
        &:hover{
            cursor: pointer;
                filter: invert(50%)
                        sepia(100%)
                        saturate(7000%)
                        hue-rotate(345deg)
                        brightness(85%)
                        contrast(110%);
            
        }
        }
    }

}
</style>