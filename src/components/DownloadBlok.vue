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
</script>

<template>
 <div class="downloadblok">
        <button @click="filesshown = true, imagesshown = false" :class="{ valgt: filesshown }">Files</button>
        <button @click="imagesshown = true, filesshown = false" :class="{ valgt: imagesshown }">Images</button>
        <div class="scroll" v-if="filesshown">
            <div class="scroll-blok-card" @click="toggleSelection('manual')" :class="{ 'blok-card-valgt': selected.includes('manual') }">
                <img src="/public/download/novamini-manual.jpg" alt="">
                <!--<input type="checkbox" value="manual" v-model="selected" @click.stop>-->
                <p>NOVA MINI Manual</p>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('productvideo')" :class="{ 'blok-card-valgt': selected.includes('productvideo') }">
                <img src="/public/download/novamini-mp4.png" alt="">
                <!--<input type="checkbox" value="productvideo" v-model="selected" @click.stop>-->
                <p>NOVA MINI Product Video</p>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('safetydata')" :class="{ 'blok-card-valgt': selected.includes('safetydata') }">
                <img src="/public/download/novamini-safety-data.jpg" alt="">
                <!--<input type="checkbox" value="safetydata" v-model="selected" @click.stop>-->
                <p>NOVA MINI Safety data</p>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('productsheet')" :class="{ 'blok-card-valgt': selected.includes('productsheet') }">
                <img src="/public/download/novamini-productsheet-uk.jpg" alt="">
                <!--<input type="checkbox" value="productsheet" v-model="selected" @click.stop>-->
                <p>NOVA MINI Productsheet UK</p>
            </div>
              <div class="scroll-blok-card" @click="toggleSelection('declaration')" :class="{ 'blok-card-valgt': selected.includes('declaration') }">
                <img src="/public/download/novamini-eu-declaration.jpg" alt="">
                <!--<input type="checkbox" value="declaration" v-model="selected" @click.stop>-->
                <p>NOVA MINI Declaration of Conformity</p> 
            </div>
        </div>
         <div class="scroll" v-if="imagesshown">
            <div class="scroll-blok-card" @click="toggleSelection('productimage')" :class="{ 'blok-card-valgt': selected.includes('productimage') }">
                <img src="/public/novamini.png" alt="">
                <!--<input type="checkbox" value="productimage" v-model="selected" @click.stop>-->
                <p>NOVA MINI</p>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('pocketuse')" :class="{ 'blok-card-valgt': selected.includes('pocketuse') }">
                <img src="/public/novamini-i-brug.jpg" alt="">
                <!--<input type="checkbox" value="pocketuse" v-model="selected" @click.stop>-->
                <p>NOVA MINI pocket use</p>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('nineteenthdegree')" :class="{ 'blok-card-valgt': selected.includes('nineteenthdegree') }">
                <img src="/public/novamini-nineteenth-degree-angle.jpg" alt="">
                <!--<input type="checkbox" value="nineteenthdegree" v-model="selected" @click.stop>-->
                <p>NOVA MINI 90º</p>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('magnetattachment')" :class="{ 'blok-card-valgt': selected.includes('magnetattachment') }">
                <img src="/public/novamini-magnet-attachment.jpg" alt="">
                <!--<input type="checkbox" value="magnetattachment" v-model="selected" @click.stop>-->
                <p>Magnetic attachment</p>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('onmiddlefinger')" :class="{ 'blok-card-valgt': selected.includes('onmiddlefinger') }">
                <img src="/public/novamini-on-middlefinger.jpg" alt="">
                <!--<input type="checkbox" value="onmiddlefinger" v-model="selected" @click.stop>-->
                <p>NOVA MINI in hand</p>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('optilight')" :class="{ 'blok-card-valgt': selected.includes('optilight') }">
                <img src="/public/novamini-opti-light.jpg" alt="">
                <!--<input type="checkbox" value="optilight" v-model="selected" @click.stop>-->
                <p>OPTI Light settings</p>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('sparepartsoverview')" :class="{ 'blok-card-valgt': selected.includes('sparepartsoverview') }">
                <img src="/public/novamini-spareparts.jpg" alt="">
                <!--<input type="checkbox" value="sparepartsoverview" v-model="selected" @click.stop >-->
                <p>Spareparts overview</p>
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
                    <img src="/public/ikoner/download-ikon.svg" alt="">
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
    border: solid rgba(218, 218, 218, 1);;
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
    margin: 20px 10px;
    padding: 10px;
    background-color: c.$font-color-secondary;
    max-width: 135px;
    border: solid 0.1px c.$font-color-primary;
    max-height: 200px;
}

.blok-card-valgt{
    box-sizing: border-box;
    border: solid red;
    margin: 20px 10px;
    padding: 10px;
    background-color: c.$font-color-secondary;
    max-width: 135px;
    max-height: 200px;
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
    outline-bottom: solid 0.1px c.$font-color-secondary;
    box-shadow: 0 5px 0 0px c.$font-color-secondary;
    border-bottom: none;
    margin-bottom: -5px;
    outline-top: c.$font-color-primary;
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
}
</style>