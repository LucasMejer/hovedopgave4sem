<script setup>

</script>

<template>

    <nav>
        <div>
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

    #burgermenu {
        border: none;
        background-color: #fff;

        img {
            width: 50px;
            height: 50px;
        }
    }

    .partner-logo {
        height: 50px;
    }

    .search-icon {
            width: 30px;
            height: 30px;
    }

</style>