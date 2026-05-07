<script setup>
import { ref } from 'vue'

const slides = ref([
  { image: '/public/novamini.png', title: 'Slide 1' },
  { image: '/public/novamini-i-brug.jpg', title: 'Slide 2' },
  { image: '/public/novamini-opti-light.jpg', title: 'Slide 3' },
  { image: '/public/novamini-spareparts.jpg', title: 'Slide 4' },
])

const currentIndex = ref(0)

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length
}

const prev = () => {
  currentIndex.value = currentIndex.value === 0 ? slides.value.length - 1 : currentIndex.value - 1
}
</script>

<template>
  <div class='carousel'>
      <div class="carousel-counter">
        {{ currentIndex + 1 }} / {{ slides.length }}
      </div>
    <div class='carousel-inner' :style='{ transform: `translateX(-${currentIndex * 100}%)` }'>
      <div v-for='(slide, index) in slides' :key='index' class='carousel-slide'>
        <img :src='slide.image' :alt='slide.title'>
      </div>
    </div>
    <button @click='prev' class='carousel-btn prev'><img src="/public/ikoner/arrow-left.svg" alt=""></button>
    <button @click='next' class='carousel-btn next'><img src="/public/ikoner/arrow-right.svg" alt=""></button>
  </div>
</template>

<style lang="scss" scoped>

@use '../assets/_headings.scss' as f;
@use '../assets/_colors.scss' as c;

.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.carousel-inner {
  display: flex;
  position: relative;
  z-index: 1;
}
/*
  transition: transform 0.3s ease;
  */
.carousel-slide {
  min-width: 100%;
}

button.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  border: none;
  background: transparent;
  img{
    height: 20px;
    width: 20px;
  }
}

.prev { left: 10px;}
.next { right: 10px;}

.carousel-slide img {
  width: 100%;
  height: 100%;
}

.carousel-counter {
  position: absolute;
  top: 10px;
  right: 15px;
  background: rgba(0,0,0,0.5);
  color: c.$font-color-secondary;
  padding: 5px 10px;
  border-radius: 5px;
  font-family: f.$font-primary;
  z-index: 2;
}
</style>