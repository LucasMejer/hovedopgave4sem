<script setup>
import CarouselProduct from '@/components/CarouselProduct.vue';
import DownloadBlok from '@/components/DownloadBlok.vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import BackToTop from '@/components/BackToTop.vue';
import DescriptionProduct from '@/components/DescriptionProduct.vue';

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
        <h3>NOVA MINI</h3>
        <p>03.6200</p>
        <CarouselProduct/>
        <DownloadBlok/>
        <DescriptionProduct/>
    </div>
    <Footer/>
</template>
<style lang="scss" scoped>
.view-width{
    width: 90%;
    margin: auto;
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
</style>