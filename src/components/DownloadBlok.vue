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
</script>

<template>
 <div class="downloadblok">
        <button @click="filesshown = true, imagesshown = false" :class="{ valgt: filesshown }">files</button>
        <button @click="imagesshown = true, filesshown = false" :class="{ valgt: imagesshown }">images</button>
        <div class="scroll" v-if="filesshown">
            <div class="scroll-blok-card">
                <img src="/public/ikoner/pdf-ikon.svg" alt="">
                <input type="checkbox" value="manual" v-model="selected">
                <span class="checkmark"></span>
                <p>NOVA MINI Manual</p>
            </div>
            <div class="scroll-blok-card">
                <img src="/public/ikoner/mp4-ikon.svg" alt="">
                <input type="checkbox" value="video" v-model="selected">
                <span class="checkmark"></span>
                <p>NOVA MINI Product Video</p>
            </div>
            <div class="scroll-blok-card">
                <img src="/public/ikoner/pdf-ikon.svg" alt="">
                <input type="checkbox" value="nightview" v-model="selected">
                <span class="checkmark"></span>
                <p>Work Lights Night View</p>
            </div>
            <div class="scroll-blok-card">
                <img src="/public/ikoner/pdf-ikon.svg" alt="">
                <input type="checkbox" value="pdf" v-model="selected">
                <span class="checkmark"></span>
            </div>
              <div class="scroll-blok-card">
                <img src="/public/ikoner/pdf-ikon.svg" alt="">
                <input type="checkbox" value="newpdf" v-model="selected">
                <span class="checkmark"></span> 
            </div>
            <div class="scroll-blok-card">
                <img src="/public/ikoner/pdf-ikon.svg" alt="">
                <input type="checkbox" value="cunstructiondocument" v-model="selected">
                <span class="checkmark"></span>
            </div>
        </div>
         <div class="scrollimage" v-if="imagesshown">
            <div class="scroll-blok-card">
                <img src="/public/ikoner/pdf-ikon.svg" alt="">
                <input type="checkbox" value="manuala" v-model="selected">
                <span class="checkmark"></span>
                <p>NOVA MINI Manual</p>
            </div>
            <div class="scroll-blok-card">
                <img src="/public/ikoner/mp4-ikon.svg" alt="">
                <input type="checkbox" value="videoa" v-model="selected">
                <span class="checkmark"></span>
                <p>NOVA MINI Product</p>
            </div>
            <div class="scroll-blok-card">
                <img src="/public/ikoner/pdf-ikon.svg" alt="">
                <input type="checkbox" value="nightviewa" v-model="selected">
                <span class="checkmark"></span>
                <p>Work Lights Night img</p>
            </div>
            <div class="scroll-blok-card">
                <img src="/public/ikoner/pdf-ikon.svg" alt="">
                <input type="checkbox" value="pdfa" v-model="selected">
                <span class="checkmark"></span>
            </div>
              <div class="scroll-blok-card">
                <img src="/public/ikoner/pdf-ikon.svg" alt="">
                <input type="checkbox" value="newpdfa" v-model="selected">
                <span class="checkmark"></span> 
            </div>
            <div class="scroll-blok-card">
                <img src="/public/ikoner/pdf-ikon.svg" alt="">
                <input type="checkbox" value="cunstructiondocumenta" v-model="selected">
                <span class="checkmark"></span>
            </div>
        </div>
        <div class="overlay">
            <div class="amount-selected-counter">
                <p>{{ selected.length }} filer valgt</p>
            </div>
            <div class="clearAll">
                <p @click="clearAll">ryd alle</p>
            </div>
            <button>Download
                <img src="/public/ikoner/download-ikon.svg" alt="">
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@use '../assets/_headings.scss' as f;
@use '../assets/_colors.scss' as c;
.downloadblok{
    margin: 40px auto;
}

button{
    border: none;
    background-color: c.$section-color-background;
    align-items: baseline;
    img{
        filter: brightness(0);
    }
}
.scroll{
    overflow: scroll;
    height: 200px;
    display: grid;
    grid-template-columns: auto auto;
    background-color: c.$section-color-background;
    padding: 10px auto;
}

.scrollimage{
    overflow: scroll;
    scrollbar-width: auto;
    height: 200px;
    display: grid;
    grid-template-columns: auto auto;
    background-color: c.$section-color-background;
    object-fit: cover;
    padding: 10px auto;
}

.scroll-blok-card{
    margin: 20px auto;
    padding: 10px;
    background-color: rgba(173, 173, 173, 1);
    max-width: 135px;
}

.overlay{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(173, 173, 173, 1);
    border-top: solid 0.1px c.$font-color-primary;
}

.valgt{
    text-decoration: underline;
}

.clearAll p:hover {
  color: red;
  cursor: pointer;
}

@media only screen and (min-width: 768px){
    .scroll{
        grid-template-columns: auto auto auto auto;
    }
    .scrollimage{
        grid-template-columns: auto auto auto auto;
    }
}
</style>