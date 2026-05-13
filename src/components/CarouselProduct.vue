<script setup>
import { ref } from 'vue'

const slides = ref([
  { image: '/public/novamini.png', title: 'Slide 1' },
  { image: '/public/novamini-i-brug.jpg', title: 'Slide 2' },
  { image: '/public/novamini-nineteenth-degree-angle.jpg', title: 'Slide 3' },
  { image: '/public/novamini-magnet-attachment.jpg', title: 'Slide 4' },
  { image: '/public/novamini-on-middlefinger.jpg', title: 'Slide 5'},
  { image: '/public/novamini-opti-light.jpg', title: 'Slide 6'},
  { image: '/public/novamini-spareparts.jpg', title: 'Slide 7'}
])

const currentIndex = ref(0)

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length
}

const prev = () => {
  currentIndex.value = currentIndex.value === 0 ? slides.value.length - 1 : currentIndex.value - 1
}

const goToSlide = (index) => {
  currentIndex.value = index
}
</script>

<template>
  <div class="thumbnails">
      <img
        v-for="(slide, index) in slides"
        :key="index"
        :src="slide.image"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
      />
    </div>
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
  background: rgb(255, 255, 255);
  align-items: center;
  justify-content: center;
  display: flex;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  cursor: pointer;
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
  font-family: f.$font-primary;
  z-index: 2;
}

.thumbnails {
  display: none;
}

@media only screen and (min-width: 768px){
  .carousel{
    width: 100%;
    margin: 0px 50px;
    display: flex;
    height: fit-content;
  }
  
  .thumbnails {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    gap: 10px;
  }

  .thumbnails img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    cursor: pointer;
    opacity: 0.5;
    border: 2px solid transparent;
    transition: 0.2s;
  }

  .thumbnails img.active {
    opacity: 1;
    border: 2px solid black;
  }

  .thumbnails img:hover {
    opacity: 0.8;
  }
}
</style>