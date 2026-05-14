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
                    <p>Home</p>
                </router-link>
                <p>></p>
                <router-link to="/category">
                    <p>Worklights</p>
                </router-link>
                <p>></p>
                <p>NOVA MINI</p>
            </li>
        </div>
        <div class="desktopview">
            <div class="mobile-heading">
                <h1>NOVA MINI</h1>
                <h3>03.6200</h3>
            </div>
            <CarouselProduct/>
            <div class="download-div">
                <div class="desktop-heading">
                    <h1>NOVA MINI</h1>
                    <h3>03.6200</h3>
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

/*h3{
    margin: 20px 0px;
    font-weight: normal;
}*/

    h1{
        margin: 0px;
        font-weight: normal;
    }
    h3{
        margin: 0px 0px 20px 0px;
        font-weight: normal;
    }



p{
    margin: 10px 0px;
}

li p{
    list-style: none;
    padding: 10px 10px 0px 0px;
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
        margin-bottom: 40px;
        justify-content: space-between;
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
            width: 40%;
        }
    
        h3{
            margin: 0px 0px 5px 0px;
        }
    }
    .breadcrumb li{
            margin-bottom: 5px;
        }

    }
</style>