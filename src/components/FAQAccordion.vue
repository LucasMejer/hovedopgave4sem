<script setup>
import { ref } from 'vue';
defineProps({
    overskrift: String,
    skjulttekst: String,
})

const isOpen = ref(false)

function toggleAccordion() {
    isOpen.value = !isOpen.value
}
</script>
<template>
    <div class="accordion">
        <button @click="toggleAccordion" :aria-expanded="isOpen">
            <h3>
                {{ overskrift }}
            </h3>
            <img src="/ikoner/arrow-down.png" alt="" class="arrows" :class="{open:isOpen}">
        </button>
        <div v-show="isOpen" class="content">
            <p>
                {{ skjulttekst }}
            </p>
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
    cursor: pointer;
}

@media only screen and (min-width: 768px){
    button{
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
    }
</style>