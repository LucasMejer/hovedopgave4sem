<script setup>
</script>

<template>
    <div class="downloadblok">
        <button>files</button>
        <div class="scroll">
            <div class="scroll-blok-card">
                <img src="/public/ikoner/pdf-ikon.svg" alt="">
                <input type="checkbox">
                <span class="checkmark"></span>
                <p>NOVA MINI Manual</p>
            </div>
            <div class="scroll-blok-card">
                <img src="/public/ikoner/mp4-ikon.svg" alt="">
                <p>NOVA MINI Product Video</p>
            </div>
            <div class="scroll-blok-card">
                <img src="/public/ikoner/pdf-ikon.svg" alt="">
                <p>Work Lights Night View</p>
            </div>
            <div class="scroll-blok-card">
                <img src="/public/ikoner/pdf-ikon.svg" alt="">
            </div>
              <div class="scroll-blok-card">
                <img src="/public/ikoner/pdf-ikon.svg" alt="">
            </div>
            <div class="scroll-blok-card">
                <img src="/public/ikoner/pdf-ikon.svg" alt="">
            </div>
        </div>

    <div class="overlay">
        <div class="amount-selected-counter">
            <p>0 filter valgt</p>
        </div>
        <button>Download
            <img src="/public/ikoner/download-ikon.svg" alt="">
        </button>
    </div>
    </div>
</template>

<style scoped lang="scss">

@use '../assets/_headings.scss' as f;
@use '../assets/_colors.scss' as c;

button{
    border: none;
}
.scroll{
    overflow: scroll;
    height: 200px;
    display: grid;
    grid-template-columns: auto auto;
}

.scroll-blok-card{
    margin: auto;
}

.overlay{
    display: flex;
    justify-content: space-between;
}

</style>