<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
</script>
<template>
    <Navbar/>
    <div class="breadcrumb">
        <li>
            <router-link to="/">
                <p>Forside</p>
            </router-link>
            <router-link to="/category">
                <p>Worklights</p>
            </router-link>
        </li>
    </div>
    <h3>NOVA MINI</h3>
    <p>03.6200</p>
    <img src="/novamini.png" alt="">
    <Footer/>
</template>
<style lang="scss" scoped>
img{
    width: 90%;
    display: flex;
    margin: auto;
}
</style>