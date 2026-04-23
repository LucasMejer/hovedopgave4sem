<script setup>

</script>

<template>

    <nav>
        <div class="logo-line">
            <button id="burgermenu"><img src="../assets/icons/burgermenu.png" alt="Burgermenu"></img></button>
            
            <router-link to="/"><img class="partner-logo" src="../assets/icons/PARTNER_LOGO.svg" alt="Scangrip partner site logo"></router-link>
        </div>
        
        <div>
            <input type="text">
            <img class="search-icon" src="../assets/icons/search.png" alt="">
        </div>
        
    </nav>

    <br>
    <br>

    <h1>dette er en h1</h1>
    <h2>dette er en h2</h2>
    <h3>dette er en h3</h3>
    <p>dette er en paragraf</p>

</template>

<style lang="scss">
    @use '../assets/colors' as c;

    .logo-line {
        display: flex;
        min-width: 350px;
        padding: 10px;
        justify-content: space-evenly;
    }

    #burgermenu {
        padding: 0;
        border: none;
        background-color: #fff;
        padding-right: 10px;
        

        img {
            width: 40px;
            height: 40px;
        }
    }

    .partner-logo {
        max-width: 100%;
        height: auto;
        
    }

    .search-icon {
            width: 30px;
            height: 30px;
    }

</style>