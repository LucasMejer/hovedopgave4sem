<script setup>
import CarouselProduct from '@/components/CarouselProduct.vue';
import DownloadBlok from '@/components/DownloadBlok.vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import BackToTop from '@/components/BackToTop.vue';
import DescriptionProduct from '@/components/DescriptionProduct.vue';
import CarouselAccessoriesSpareparts from '@/components/CarouselAccessoriesSpareparts.vue';

</script>
<template>
    <Navbar/>
    <BackToTop/>
    <div class="view-width">
        <div class="breadcrumb">
            <li>
                <router-link to="/">
                    <p>Forside</p>
                </router-link>
                <p>></p>
                <router-link to="/category">
                    <p>Worklights</p>
                </router-link>
            </li>
        </div>
        
        <div class="desktopview">
            <div class="mobile-heading">
                <h3>NOVA MINI</h3>
                <p>03.6200</p>
            </div>
            <CarouselProduct/>
            <div class="download-div">
                <div class="desktop-heading">
                    <h3>NOVA MINI</h3>
                    <p>03.6200</p>
                </div>
                <DownloadBlok/>
            </div>
            
        </div>
        <DescriptionProduct/>
        <CarouselAccessoriesSpareparts/>
    </div>
    <Footer/>
</template>
<style lang="scss" scoped>
@use '../assets/colors.scss' as c;

a{
    color: c.$font-color-primary;
}

.view-width{
    width: 90%;
    margin: auto;
}

h3{
    margin: 20px 0px;
}

p{
    margin: 10px 0px;
}

li p{
    list-style: none;
    padding: 10px 10px;
}

.breadcrumb li{
    display: flex;
}

img{
    width: 100%;
    display: flex;
    margin: auto;
}

.desktop-heading{
    display: none;
}

@media only screen and (min-width: 768px){
    
    .desktopview{
        display: flex;
        margin-bottom: 80px;
        .mobile-heading{
        display: none;
        }
        .desktop-heading{
            display: block;
        }
        .download-div{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }

    h3{
            margin: 0px 0px 20px 0px;
    }

    }
</style>