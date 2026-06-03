<script setup>
import CategoryProductCards from '@/components/CategoryProductCards.vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import BackToTop from '@/components/BackToTop.vue';

</script>
<template>
    <Navbar/>
    <main>
    <div class="breadcrumb">
            <router-link to="/">
                <p>Home</p>
            </router-link>
            <p>></p>
            <p class="Active">Worklights</p>
        </div>
    <CategoryProductCards/>
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

p{
    margin: 10px 0px;
    list-style: none;
    padding: 10px 10px 0px 0px;
}

.breadcrumb {
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
}
</style>