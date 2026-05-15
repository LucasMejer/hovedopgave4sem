<script setup>
import { ref } from 'vue'

const slides = ref([
  { 
    image: 'https://www.scangrip.com/Admin/Public/GetImage.ashx?width=800&height=800&crop=5&FillCanvas=True&DoNotUpscale=true&Compression=75&image=/Files/Images/03.5301/03.5301-usb-car-charger.jpg',
    title: 'photo of car adaptor',
    produkttitle: 'CAR ADAPTOR 5V, 12-24V',
    produktnr: '03.5301'
  },

  { image: 'https://www.scangrip.com/Files/Images/03.5368/03.5368-charger-au-5v-1a.jpg',
    title: 'photo of Australian plug charger',
    produkttitle: 'CHARGER AU, 5V, 1A, BLACK',
    produktnr: '03.5368'
  },

  { 
    image: 'https://www.scangrip.com/Files/Images/03.5305/03.5305-USB-CHARGER-SCANGRIP-LOGO.jpg',
    title: 'photo of charger with USB plug',
    produkttitle: 'CHARGER USB 5V, 1A',
    produktnr: '03.5305'
  },
  { 
    image: 'https://www.scangrip.com/Files/Images/03.5352/03.5352-uk-charger-1.jpg',
    title: 'photo of charger with uk plug included USB',
    produkttitle: 'CHARGER USB 5V, 1A UK',
    produktnr: '03.5352'
  },
  { 
    image: 'https://us.scangrip.com/Files/Images/03.5355/03.5355-ul-charger-5v-1a-3.jpg',
    title: 'photo of charger with US plug included USB',
    produkttitle: 'CHARGER USB, 5V, 1A US',
    produktnr: '03.5355'
  },
  { image: 'https://www.scangrip.com/Files/Images/03.5925/03.5925-usb-c-cable-1.jpg',
    title: 'Photo of a cable with USB-A end to USB-C',
    produkttitle: 'USB-C CABLE',
    produktnr: '03.5925'
  },
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
  <h2>Accessories for NOVA MINI</h2>
  <div class='carousel-inner' :style='{ transform: `translateX(-${currentIndex * 32}%)` }'>
    <div v-for='(slide, index) in slides' :key='index' class='carousel-slide'>
      <div class="carousel-card">
        <img :src='slide.image' :alt='slide.title'>
          <h3>
            {{ slide.produkttitle }}
          </h3>
          <p>
            {{ slide.produktnr}}
          </p>
      </div>
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
  width: 90%;
  margin: 100px auto;
  padding: 10px 0px;
  overflow: hidden;
  h2{
    margin-bottom: 10px;
  }
}

.carousel-inner {
  display: flex;
  position: relative;
  z-index: 1;
  width: 100%;
  margin: auto;
  gap: 20px;
}

.carousel-slide {
  max-width: 50%;
  margin: auto;
  img{
    width: 100%;
  }
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  background: rgb(255, 255, 255);
  align-items: center;
  justify-content: center;
  display: flex;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  border: 0.1px solid c.$font-color-primary;
  cursor: pointer;
  img{
    height: 20px;
    width: 20px;
  }
}

.prev { left: 10px; }
.next { right: 10px; }

.carousel-slide img {
  width: 100%;
  height: 100%;
}

.carousel-card{
  background-color: c.$font-color-secondary;
  border: solid 0.01px rgba(26, 26, 26, 0.25);
  filter: drop-shadow(0px 2px 4px rgba(26, 26, 26, 0.25));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-height: 205px;
  img{
    width: 100%;
    object-fit: cover;
  }
}


.carousel-slide {
  flex: 0 0 48%; // roughly 2 slides per view with gap
  margin: auto;
}

@media only screen and (min-width: 768px){
  .carousel{
    h2{
      margin-bottom: 30px;
    }
  }
.carousel-card{
  min-height: 556px;
  min-width: 300px;
  img{
    height: 300px;
  }
}

.carousel-slide {
    flex: 0 0 30%; // 3 slides per view on large screens
  }

}
</style>