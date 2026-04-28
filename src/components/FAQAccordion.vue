<script setup>
const accordionFaq = defineProps({
    overskrift:String,
    skjulttekst:String,
})


</script>
<template>
    <div class="accordion">
        <p>
            {{ overskrift }}
        </p>
        <p>
            {{ skjulttekst }}
        </p>
        <button @click="openAccordion"><img src="/ikoner/arrow-down.png" alt="" class="arrows"></button>
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
    display: flex;
    padding: 10px 5px;
}

p{
    color: c.$font-color-primary;
}

.arrows {
    height: 30px;
}
</style>