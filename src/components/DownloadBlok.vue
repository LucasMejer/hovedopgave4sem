<script setup>
import { ref } from 'vue';


const selected = ref([])

const imagesshown = ref(true)

const filesshown = ref(false)

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
            <div class="scroll-blok-card" @click="toggleSelection('manual')">
                <img src="/public/ikoner/pdf-ikon.svg" alt="">
                <input type="checkbox" value="manual" v-model="selected" @click.stop>
                <span class="checkmark"></span>
                <p>NOVA MINI Manual</p>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('video')">
                <img src="/public/ikoner/mp4-ikon.svg" alt="">
                <input type="checkbox" value="video" v-model="selected" @click.stop>
                <span class="checkmark"></span>
                <p>NOVA MINI Product Video</p>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('nightview')">
                <img src="/public/ikoner/pdf-ikon.svg" alt="">
                <input type="checkbox" value="nightview" v-model="selected" @click.stop>
                <span class="checkmark"></span>
                <p>Work Lights Night View</p>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('pdf')">
                <img src="/public/ikoner/pdf-ikon.svg" alt="">
                <input type="checkbox" value="pdf" v-model="selected" @click.stop>
                <span class="checkmark"></span>
            </div>
              <div class="scroll-blok-card" @click="toggleSelection('newpdf')">
                <img src="/public/ikoner/pdf-ikon.svg" alt="">
                <input type="checkbox" value="newpdf" v-model="selected" @click.stop >
                <span class="checkmark"></span> 
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('construnctiondocument')">
                <img src="/public/ikoner/pdf-ikon.svg" alt="">
                <input type="checkbox" value="constructiondocument" v-model="selected" @click.stop>
                <span class="checkmark"></span>
            </div>
        </div>
         <div class="scroll" v-if="imagesshown">
            <div class="scroll-blok-card" @click="toggleSelection('manuala')">
                <img src="/public/novamini.png" alt="">
                <input type="checkbox" value="manuala" v-model="selected" @click.stop>
                <span class="checkmark"></span>
                <p>NOVA MINI</p>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('videoa')">
                <img src="/public/novamini-i-brug.jpg" alt="">
                <input type="checkbox" value="videoa" v-model="selected" @click.stop>
                <span class="checkmark"></span>
                <p>NOVA MINI pocket use</p>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('nightviewa')">
                <img src="/public/novamini-nineteenth-degree-angle.jpg" alt="">
                <input type="checkbox" value="nightviewa" v-model="selected" @click.stop>
                <span class="checkmark"></span>
                <p>NOVA MINI 90º</p>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('pdfa')">
                <img src="/public/novamini-magnet-attachment.jpg" alt="">
                <input type="checkbox" value="pdfa" v-model="selected" @click.stop >
                <span class="checkmark"></span>
                <p>Magnetic attachment</p>
            </div>
              <div class="scroll-blok-card" @click="toggleSelection('newpdfa')">
                <img src="/public/novamini-opti-light.jpg" alt="">
                <input type="checkbox" value="newpdfa" v-model="selected" @click.stop>
                <span class="checkmark"></span>
                <p>OPTI Light settings</p>
            </div>
            <div class="scroll-blok-card" @click="toggleSelection('constructiondocumenta')">
                <img src="/public/novamini-spareparts.jpg" alt="">
                <input type="checkbox" value="constructiondocumenta" v-model="selected" @click.stop>
                <span class="checkmark"></span>
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