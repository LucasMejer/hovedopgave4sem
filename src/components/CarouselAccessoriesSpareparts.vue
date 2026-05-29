<script setup>
import { ref } from 'vue'

const slides = ref([
  { 
    image: 'https://www.scangrip.com/Admin/Public/GetImage.ashx?width=800&height=800&crop=5&FillCanvas=True&DoNotUpscale=true&Compression=75&image=/Files/Images/03.5301/03.5301-usb-car-charger.jpg',
    title: 'Car adaptor',
    produkttitle: 'CAR ADAPTOR 5V, 12-24V',
    produktnr: '03.5301'
  },

  { image: 'https://www.scangrip.com/Files/Images/03.5368/03.5368-charger-au-5v-1a.jpg',
    title: 'Australian plug charger',
    produkttitle: 'CHARGER AU, 5V, 1A, BLACK',
    produktnr: '03.5368'
  },

  { 
    image: 'https://www.scangrip.com/Files/Images/03.5305/03.5305-USB-CHARGER-SCANGRIP-LOGO.jpg',
    title: 'Charger with USB plug',
    produkttitle: 'CHARGER USB 5V, 1A',
    produktnr: '03.5305'
  },
  { 
    image: 'https://www.scangrip.com/Files/Images/03.5352/03.5352-uk-charger-1.jpg',
    title: 'Charger with uk plug included USB',
    produkttitle: 'CHARGER USB 5V, 1A UK',
    produktnr: '03.5352'
  },
  { 
    image: 'https://us.scangrip.com/Files/Images/03.5355/03.5355-ul-charger-5v-1a-3.jpg',
    title: 'Charger with US plug included USB',
    produkttitle: 'CHARGER USB, 5V, 1A US',
    produktnr: '03.5355'
  },
  { image: 'https://www.scangrip.com/Files/Images/03.5925/03.5925-usb-c-cable-1.jpg',
    title: 'Cable with USB-A end to USB-C',
    produkttitle: 'USB-C CABLE',
    produktnr: '03.5925'
  },
])

const currentIndex = ref(0)

const next = () => {
  currentIndex.value = currentIndex.value >= slides.value.length - 5 ? 0 : currentIndex.value + 1
}

const prev = () => {
  currentIndex.value = currentIndex.value === 0 ? slides.value.length - 5 : currentIndex.value - 1
}
</script>
<template>
<div class='carousel'>
  <h2>Accessories for NOVA MINI</h2>
  <div class="carousel-outer">

    <div class='carousel-inner' :style='{ transform: `translateX(-${currentIndex * 100}%)` }'>
      <div v-for='(slide, index) in slides' :key='index' class='carousel-slide'>
        <div class="carousel-card">
          <div class="image">
            <img :src='slide.image' alt=''>
          </div>
          <div class="text">
            <h3>
              {{ slide.produkttitle }}
            </h3>
            <p>
              {{ slide.produktnr}}
            </p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  
  <button @click='prev' class='carousel-btn prev'><img src="/public/ikoner/arrow-left.svg" alt="" aria-label="go previous"></button>
  <button @click='next' class='carousel-btn next'><img src="/public/ikoner/arrow-right.svg" alt="" aria-label="go to next"></button>
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
  /*transition: transform 0.3s ease;*/
}

.carousel-outer {
  width: 90%;
  overflow: hidden;
  margin: auto;
}

.carousel-slide {
  width: 50%;
  padding: 10px;
  margin: auto;
  cursor: pointer;
  img{
    height: 100%;
    width: auto;
    margin-bottom: 10px;
  }
  h3 {
    margin-bottom: 10px;
  }
}

.carousel-btn {
  position: absolute;
  top: 55%;
  transform: translateY(-55%);
  z-index: 2;
  background: c.$font-color-secondary;
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


.carousel-card{
  background-color: c.$font-color-secondary;
  border: solid 1px c.$font-color-primary;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 250px;
  min-height: 205px;
  text-align: center;
  overflow: hidden;
  img{
    width: auto;
  }
  .image {
    display: flex;
    align-items: flex-end;
    height: 65%;

  }
  .text {
    height: 35%;
  }
}

/*
.carousel-slide {
  flex: 0 0 50%;
  margin: auto;
}*/

@media only screen and (min-width: 768px){
  .carousel{
    width: 100%;
    h2{
      margin-bottom: 30px;
    }
  }
.carousel-card{
  padding: 20px;
  height: 330px;
  min-width: 230px;
  img{
    height: 180px;
    
  }
}
/*
.carousel-slide {
    flex: 25%;
  }*/

}
</style>