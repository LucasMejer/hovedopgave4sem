<script setup>
import { ref } from 'vue'

const toggleBM = ref(false);
const togglePI = ref(false);
const toggleMI = ref(false);
const burgerMenu = ref(null);

const toggleBurger = () => {
    toggleBM.value = !toggleBM.value;
};

const toggleProductInformation = () => {
    togglePI.value = !togglePI.value;
};

const toggleMarketingItems = () => {
    toggleMI.value = !toggleMI.value;
};

</script>

<template>

    <nav>
        <div class="mobile-nav">
            <div class="logo-line">
                <button @click="toggleBurger" id="burgermenu" ref="burgermenu">
                    <img src="../../public/ikoner/burgermenu.png" alt="Burgermenu"></img>
                </button>
                
                <router-link to="/"><img class="partner-logo" src="../../public/ikoner/PARTNER_LOGO.svg" alt="Scangrip partner site logo"></router-link>
            </div>
            
            <div class="search-bar">
                <input class="search-input" type="text">
                <img class="search-icon" src="../../public/ikoner/search.png" alt="">
            </div>
            
            <div class="nav-burgermenu" v-if="toggleBM">
                <hr class="thick-line">
                <div class="partnersite">
                    <p>Scangrip.com</p>
                    <hr class="thick-line-vertical">
                    <p class="marked">Partner</p>
                </div>
                <hr class="thick-line">

                <div class="nav-icons">
                    <img src="../../public/ikoner/info.png" alt="">
                    <img src="../../public/ikoner/english-flag.png" alt="">
                    <img src="../../public/ikoner/profile.svg" alt="">
                </div>

                <div class="nav-menu-items">
                    <hr>
                    <button @click="toggleProductInformation" class="menu-item">
                        <p>Product Information</p>
                        <img class="arrows" src="../../public/ikoner/arrow-down.png" alt="">
                    </button>
                    <hr>
                    <ul class="dropdown" v-if="togglePI">
                        <li>Work lights</li>
                        <hr>
                        <li>CONNECT</li>
                        <hr>
                        <li>Paint industry</li>
                        <hr>
                        <li>UV curing</li>
                        <hr>
                        <li>Explosion proof</li>
                        <hr>
                        <li>Vice jaws</li>
                        <hr>
                        <li>Coil spring compressors</li>
                        <hr>
                        <li>Accessories</li>
                        <hr>
                        <li>Spare parts</li>
                        <hr>
                        <li>Products for campaings</li>
                        <hr>
                        <li>Discontinued products</li>
                    </ul>
                    <hr>
                    <button @click="toggleMarketingItems" class="menu-item">
                        <p>Marketing Items</p>
                        <img class="arrows" src="../../public/ikoner/arrow-down.png" alt="">
                    </button>
                    <hr>
                    <ul class="dropdown" v-if="toggleMI">
                        <li>Prices and product data</li>
                        <hr>
                        <li>Sales guides</li>
                        <hr>
                        <li>Campaign material</li>
                        <hr>
                        <li>Videos</li>
                        <hr>
                        <li>Points of sales</li>
                        <hr>
                        <li>Branding</li>
                        <hr>
                        <li>Social media</li>
                        <hr>
                        <li>Pictures</li>
                        <hr>
                        <li>Energy labels</li>
                        <hr>
                        <li>Brochures</li>
                        <hr>
                        <li>Company profile</li>
                        <hr>
                        <li>Logos and symbols</li>
                        <hr>
                        <li>Customized logo engraving</li>
                        <hr>
                        <li>Press releases</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="desktop-nav">
            <router-link to="/"><img class="partner-logo" src="../../public/ikoner/PARTNER_LOGO.svg" alt="Scangrip partner site logo"></router-link>
            
            <div class="nav-menu-items">
                <button @click="toggleProductInformation" class="menu-item">
                    <p>Product Information</p>
                    <img class="arrows" src="../../public/ikoner/arrow-down.png" alt="">
                </button>
                <ul class="dropdown" v-if="togglePI">
                    <li>Work lights</li>
                    <li>CONNECT</li>
                    <li>Paint industry</li>
                    <li>UV curing</li>
                    <li>Explosion proof</li>
                    <li>Vice jaws</li>
                    <li>Coil spring compressors</li>
                    <li>Accessories</li>
                    <li>Spare parts</li>
                    <li>Products for campaings</li>
                    <li>Discontinued products</li>
                </ul>
                <button @click="toggleMarketingItems" class="menu-item">
                    <p>Marketing Items</p>
                    <img class="arrows" src="../../public/ikoner/arrow-down.png" alt="">
                </button>
                <ul class="dropdown" v-if="toggleMI">
                    <li>Prices and product data</li>
                    <li>Sales guides</li>
                    <li>Campaign material</li>
                    <li>Videos</li>
                    <li>Points of sales</li>
                    <li>Branding</li>
                    <li>Social media</li>
                    <li>Pictures</li>
                    <li>Energy labels</li>
                    <li>Brochures</li>
                    <li>Company profile</li>
                    <li>Logos and symbols</li>
                    <li>Customized logo engraving</li>
                    <li>Press releases</li>
                </ul>
                <div class="search-bar">
                    <input class="search-input" type="text">
                    <img class="search-icon" src="../../public/ikoner/search.png" alt="">
                </div>
                <div class="nav-icons">
                    <img src="../../public/ikoner/info.png" alt="">
                    <img src="../../public/ikoner/english-flag.png" alt="">
                    <img src="../../public/ikoner/profile.svg" alt="">
                </div>
            </div>
        </div>
        

    </nav>

    <br>
    <br>



</template>

<style lang="scss">
    @use '../assets/_colors.scss' as c;
    @use '../assets/_headings.scss' as f;

    .mobile-nav {
        display: block;
    }

    .desktop-nav {
        display: none;
    }

    .logo-line {
        display: flex;
        width: 90%;
        margin: auto;
        min-width: 325px;
        padding: 10px 0;
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
        margin: auto;
        padding: 15px 0 25px 0;
        width: 90%;

        .search-input {
            height: 30px;
            width: 100%;
            min-width: 200px;
            
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
            height: 30px;
            padding: 20px;
        }
    }

    .nav-menu-items {
        max-width: 90%;
        display: flex;
        margin: auto;
        flex-direction: column;

        .menu-item {
            border: none;
            background-color: #fff;
            padding: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;

            p {
                font-size: 16px;
                margin: 10px 0;
            }
            
        }

        .dropdown {
            list-style-type: none;
            margin: 10px auto;
            width: 80%;
            padding: 0;


            li {
                color: c.$font-color-primary;
                font-family: f.$font-primary;
                font-weight: 400;
                font-size: 14px;

                text-decoration: none;
                margin: 10px 0;
            }
        }
        
    }

    .arrows {
        height: 30px;
    }


    @media (min-width: 1280px) {

        .mobile-nav {
            display: none;
        }

        .desktop-nav {
            display: flex;
            align-items: center;
            width: 90%;
            margin: 30px auto 0 auto;


            .partner-logo {
                padding: 0;
            }
        }


        .nav-menu-items {
            max-width: none;
            width: 100vw;
            margin: 0 0 0 30px;
            flex-direction: row;
            align-items: center;
            

            .menu-item {
                margin: 0;
                justify-content: flex-start;
                margin: 0 20px;
                cursor: pointer;

                p {
                    font-size: 20px;
                    white-space: nowrap;
                    margin: 0;
                }
            }

            .dropdown {
                /*list-style-type: none;
                margin: 10px auto;
                width: 80%;
                padding: 0;*/

                position: absolute;
                z-index: 5;
                width: 100%;


                li {
                    font-size: 16px;
                    margin: 10px 0;

                    &hover {
                        text-decoration: dashed;
                    }
                }
            }

            .search-bar {

                padding: 0 30px;

                .search-input {
                    min-width: 150px;
                    max-width: 500px;
                }
            }

            .nav-icons {
                justify-content: space-between;
                min-width: 120px;
                margin: 0 0 0 30px;

                img {
                    padding: 0;
                    cursor: pointer;
                }
            }
        }



    }

</style>