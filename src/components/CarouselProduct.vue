<script setup>
import { ref } from 'vue'

const slides = ref([
  { image: '/novamini.png', title: 'Nova Mini front view' },
  { image: '/novamini-i-brug.jpg', title: 'Nova Mini in use' },
  { image: '/novamini-nineteenth-degree-angle.jpg', title: 'Nova Mini angle view' },
  { image: '/novamini-magnet-attachment.jpg', title: 'Nova Mini magnet attachment' },
  { image: '/novamini-on-middlefinger.jpg', title: 'Nova Mini on finger' },
  { image: '/novamini-opti-light.jpg', title: 'Nova Mini opti light' },
  { image: '/novamini-spareparts.jpg', title: 'Nova Mini spare parts' }
])

const currentIndex = ref(0)

const next = () => {
  currentIndex.value =
    (currentIndex.value + 1) % slides.value.length
}

const prev = () => {
  currentIndex.value =
    currentIndex.value === 0
      ? slides.value.length - 1
      : currentIndex.value - 1
}

const goToSlide = (index) => {
  currentIndex.value = index
}
</script>

<template>
  <!-- Thumbnails -->
  <div class="thumbnails">
    <button
      v-for="(slide, index) in slides"
      :key="index"
      type="button"
      class="thumbnail-btn"
      :class="{ active: index === currentIndex }"
      @click="goToSlide(index)"
      :aria-label="`Go to image ${index + 1}`"
    >
      <img
        :src="slide.image"
        :alt="slide.title"
      />
    </button>
  </div>

  <!-- Carousel -->
  <div class="carousel">
    <div class="carousel-counter">
      {{ currentIndex + 1 }} / {{ slides.length }}
    </div>

    <div
      class="carousel-inner"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="carousel-slide"
      >
        <img
          :src="slide.image"
          :alt="slide.title"
        />
      </div>
    </div>

    <!-- Previous button -->
    <button
      @click="prev"
      class="carousel-btn prev"
      type="button"
      aria-label="Previous image"
    >
      <img
        src="/ikoner/arrow-left.svg"
        alt=""
      />
    </button>

    <!-- Next button -->
    <button
      @click="next"
      class="carousel-btn next"
      type="button"
      aria-label="Next image"
    >
      <img
        src="/ikoner/arrow-right.svg"
        alt=""
      />
    </button>
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

.carousel-slide {
  min-width: 100%;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  display: block;
}

button.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  border: none;
  background: c.$background-color-primary;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  cursor: pointer;

  img {
    height: 20px;
    width: 20px;
  }
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.carousel-counter {
  position: absolute;
  top: 10px;
  right: 15px;
  background: rgba(0, 0, 0, 0.5);
  color: c.$font-color-secondary;
  padding: 5px 10px;
  font-family: f.$font-primary;
  z-index: 2;
}

.thumbnails {
  display: none;
}

@media only screen and (min-width: 768px) {
  .carousel {
    width: 40%;
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

  .thumbnail-btn {
    border: 2px solid transparent;
    background: transparent;
    padding: 0;

    cursor: pointer;

    opacity: 0.5;
    transition: 0.2s;
  }

  .thumbnail-btn img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    display: block;
  }

  .thumbnail-btn.active {
    opacity: 1;
    border: 2px solid c.$font-color-primary;
  }

  .thumbnail-btn:hover {
    opacity: 0.8;
  }

  .thumbnail-btn:focus-visible,
  .carousel-btn:focus-visible {
    outline: 3px solid c.$font-color-primary;
    outline-offset: 2px;
  }
}
</style>