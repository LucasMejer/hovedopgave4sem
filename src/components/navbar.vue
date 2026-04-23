<script setup>

</script>

<template>

    <nav>
        <div class="mobile-nav">
            <div class="logo-line">
                <button id="burgermenu"><img src="../assets/icons/burgermenu.png" alt="Burgermenu"></img></button>
                
                <router-link to="/"><img class="partner-logo" src="../assets/icons/PARTNER_LOGO.svg" alt="Scangrip partner site logo"></router-link>
            </div>
            
            <div class="search-bar">
                <input class="search-input" type="text">
                <img class="search-icon" src="../assets/icons/search.png" alt="">
            </div>
            
            <div class="nav-burgermenu">
                <hr class="thick-line">
                <div class="partnersite">
                    <p>Scangrip.com</p>
                    <hr class="thick-line-vertical">
                    <p class="marked">Partner</p>
                </div>
                <hr class="thick-line">

                <div class="nav-icons">
                    <img src="../assets/icons/info.png" alt="">
                    <img src="../assets/icons/english-flag.png" alt="">
                    <img src="../assets/icons/profile.svg" alt="">
                </div>

                <div class="nav-menu-items">
                    <hr>
                    <div class="menu-item">
                        <p>Product Information</p>
                        <img class="arrows" src="../assets/icons/arrow-down.png" alt="">
                    </div>
                    <hr>
                    <div class="menu-item">
                        <p>Marketing Items</p>
                        <img class="arrows" src="../assets/icons/arrow-down.png" alt="">
                    </div>
                    <hr>
                </div>
            </div>
        </div>
        
        <div class="desktop-nav">
            <router-link to="/"><img class="partner-logo" src="../assets/icons/PARTNER_LOGO.svg" alt="Scangrip partner site logo"></router-link>
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

    .mobile-nav {
        display: block;
    }

    .desktop-nav {
        display: none;
    }

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

    .search-bar {
        display: flex;
        justify-content: center;
        padding: 15px 0 25px 0;

        .search-input {
            height: 30px;
            width: 200px;
            margin: 0 10px 0 0;
            padding: 0;
        }

        .search-icon {
            width: 30px;
            height: 30px;
        }
    }

    .nav-burgermenu {


        .thick-line {
            border: none;
            height: 1px;
            background-color: #000;
        }

        .thick-line-vertical {
            border: none;
            width: 1px;
            background-color: #000;
        }
    }

    .partnersite {
        display: flex;
        justify-content: center;
        margin: 10px;

        p {
            margin: 5px 10px 5px 10px;
        }

        .marked {
            font-weight: 700;
            text-decoration: underline;
        }
    }   

    .nav-icons {
        display: flex;
        justify-content: center;

        img {
            height: 40px;
            padding: 20px;
        }
    }

    .nav-menu-items {
        max-width: 80%;
        display: flex;
        margin: auto;
        flex-direction: column;

        .menu-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
    }

    .arrows {
        height: 30px;
    }


    @media (min-width: 768px) {

        .mobile-nav {
            display: none;
        }

        .desktop-nav {
            display: block;
        }

    }

</style>