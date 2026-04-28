<script setup>
import { ref, Transition } from 'vue';
const accordionFaq = defineProps({
    overskrift: String,
    skjulttekst: String,
})

const Open = ref(false)

function toggleAccordion() {
    Open.value = !Open.value
}

</script>
<template>
    <div class="accordion">
       <div class="header" >
        <button @click="toggleAccordion">
            <p><b>
                {{ overskrift }}
            </b></p>
            <img src="/ikoner/arrow-down.png" alt="" class="arrows" :class="{open:Open}">
        </button>
        <div v-if="Open" class="content">
            <p>
                {{ skjulttekst }}
            </p>
        </div>
        
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets/_colors.scss' as c;
@use '../assets/_headings.scss' as f;

.accordion{
    box-sizing: border-box;
    width: 90%;
    border: 1px;
    border-style: solid;
    border-color: c.$font-color-primary;
    color: c.$font-color-primary;
    margin: 20px auto;
    padding: 10px 5px;
}

p{
    color: c.$font-color-primary;
    text-align: left;
}

.arrows {
    height: 30px;
}

.arrows.open{
    transform: rotate(180deg);
}

button{
    text-decoration: none;
    background-color: #00000000;
    border: none;
    color: none;
    display: flex;
}

@media only screen and (min-width: 768px){
    button{
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
    }

</style>