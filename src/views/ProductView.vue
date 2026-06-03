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
    <main>
    <div class="view-width">
        <div class="breadcrumb">
            <router-link to="/">
                <p>Home</p>
            </router-link>
            <p>></p>
            <router-link to="/category">
                <p>Worklights</p>
            </router-link>
            <p>></p>
            <p>NOVA MINI</p>
        </div>
        <div class="desktopview">
            <div class="mobile-heading">
                <h1>NOVA MINI</h1>
                <p>03.6200</p>
            </div>
            <CarouselProduct/>
            <div class="download-div">
                <div class="desktop-heading">
                    <h1>NOVA MINI</h1>
                    <p>03.6200</p>
                </div>
                <DownloadBlok/>
            </div>
        </div>
        <DescriptionProduct/>
        <CarouselAccessoriesSpareparts/>
    </div>
    </main>
    <Footer/>
    <BackToTop/>
</template>
<style lang="scss" scoped>
@use '../assets/colors.scss' as c;

a{
    color: c.$font-color-primary;
    text-decoration: none;
    &:hover{
        text-decoration: underline 1.5px;
        text-underline-offset: 2px;
    }
}

.view-width{
    width: 90%;
    margin: auto;
}

    h1{
        margin: 0px;

    }
    h3{
        margin: 0px 0px 20px 0px;
        font-weight: normal;
    }

    .mobile-heading {
        h1 {
            margin: 35px 35px 10px 0px;
        }

        p{
            margin: 0px 0px 35px 0px;
            padding: 0;
            font-weight: normal;
            font-size: 20px;
        }
    }


p{
    margin: 10px 0px;
    list-style: none;
    padding: 10px 10px 0px 0px;
}

.breadcrumb {
    margin: 0 auto 35px auto;
    display: flex;
    align-items: center;
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
        margin-bottom: 40px;
        justify-content: space-between;
        .mobile-heading{
        display: none;
        }
        .desktop-heading{
            display: block;
            p{
            margin: 0px 0px 20px 0px;
            padding: 0;
            font-size: 24px;
        }
        }
        .download-div{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 40%;
        }
    
        
    }

    }
</style>