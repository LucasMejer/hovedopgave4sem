<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { onBeforeUnmount } from 'vue';
import SearchBar from './SearchBar.vue';

const toggleBM = ref(false);
const togglePI = ref(false);
const toggleMI = ref(false);
const burgerMenu = ref(null);
const mobileNav = ref(null);
const menuItemPI = ref(null);
const menuItemMI = ref(null);
const dropdown = ref(null);

const toggleBurger = () => {
    toggleBM.value = !toggleBM.value;
};

const toggleProductInformation = () => {
    togglePI.value = !togglePI.value;
};

const toggleMarketingItems = () => {
    toggleMI.value = !toggleMI.value;
};

function clickOutside(click) {
    if (toggleBM.value && !burgerMenu.value.contains(click.target) && !mobileNav.value.contains(click.target)) {
        toggleBM.value = false;
    }
    else if (!toggleBM.value && togglePI.value && !dropdown.value.contains(click.target) && !menuItemPI.value.contains(click.target)) {
        togglePI.value = false;
    }
    else if (!toggleBM.value && toggleMI.value && !dropdown.value.contains(click.target) && !menuItemMI.value.contains(click.target)) {
        toggleMI.value = false;
    }

    else return;
};


let lastScrollY = 0
let navHidden = ref(false);

function onScroll() {
    const currentScrollY = window.scrollY
    if (currentScrollY > lastScrollY && currentScrollY >= 150) {
        navHidden.value = true;
    }
    else {
        navHidden.value = false;
    }
    lastScrollY = currentScrollY;
}


onMounted( () => {
    window.addEventListener("click", clickOutside);
    window.addEventListener("scroll", onScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener("click", clickOutside);
    window.removeEventListener("scroll", onScroll);
});

</script>

<template>

    <nav>
        <div class="dark-background" v-if="toggleBM"></div>
        <div :class="{'nav-hidden': navHidden}" class="mobile-nav" ref="mobileNav">
            <div class="logo-line">
                <button @click="toggleBurger" id="burgermenu" ref="burgerMenu">
                    <img :class="{'hidden': toggleBM}" src="../../public/ikoner/burgermenu.png" alt=""></img>
                    <img :class="{'visible': toggleBM}" class="hidden" src="../../public/ikoner/close.png" alt=""></img>
                </button>
                
                <router-link to="/"><img class="partner-logo" src="../../public/ikoner/PARTNER_LOGO.svg" alt="Scangrip partner site logo"></router-link>
            </div>
            
            <SearchBar/>
            
            <hr class="thick-line" v-if="toggleBM">
            
            <div class="nav-burgermenu" v-if="toggleBM">
                <div class="partnersite">
                    <p><a href="https://www.scangrip.com/da-dk">Scangrip.com</a></p>
                    <hr class="thick-line-vertical">
                    <p class="marked">Partner</p>
                </div>
                <hr class="thick-line">

                <div class="nav-icons">
                    <router-link to="/info"><img src="../../public/ikoner/info.png" alt=""></router-link>
                    <img src="../../public/ikoner/english-flag.png" alt="">
                    <img src="../../public/ikoner/profile.svg" alt="">
                </div>

                <div class="nav-menu-items">
                    <hr>
                    <button @click="toggleProductInformation" class="menu-item">
                        <p>Product Information</p>
                        <img :class="{'rotate': togglePI}" class="arrows" src="../../public/ikoner/arrow-down.png" alt="">
                    </button>
                    <hr>
                    <ul class="dropdown" v-if="togglePI">
                        <li><router-link to="/category" class="link">Work lights</router-link></li>
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
                    <hr v-if="togglePI">
                    <button @click="toggleMarketingItems" class="menu-item">
                        <p>Marketing Items</p>
                        <img :class="{'rotate': toggleMI}" class="arrows" src="../../public/ikoner/arrow-down.png" alt="">
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

            <div class="partnersite">
                <p><a href="https://www.scangrip.com/da-dk">Scangrip.com</a></p>
                <hr class="thick-line-vertical">
                <p class="marked">Partner</p>
            </div>

            <hr class="thick-line">

            <div class="nav-row">
                <router-link to="/"><img class="partner-logo" src="../../public/ikoner/PARTNER_LOGO.svg" alt="Scangrip partner site logo"></router-link>
            
                <div class="nav-menu-items">
                    <div>
                        <button @click="toggleProductInformation" class="menu-item" ref="menuItemPI">
                            <p>Product Information</p>
                            <img :class="{'rotate': togglePI}" class="arrows" src="../../public/ikoner/arrow-down.png" alt="">
                        </button>
                        <div class="dropdown" v-if="togglePI" ref="dropdown">
                            <ul class="dropdown-content">
                                <li><router-link to="/category" class="link">Work lights</router-link></li>
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
                        </div>
                        
                    </div>
                    <div>
                        <button @click="toggleMarketingItems" class="menu-item" ref="menuItemMI">
                            <p>Marketing Items</p>
                            <img :class="{'rotate': toggleMI}" class="arrows" src="../../public/ikoner/arrow-down.png" alt="">
                        </button>
                        <div class="dropdown" v-if="toggleMI" ref="dropdown">
                            <ul class="dropdown-content">
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
                        </div>
                        
                    </div>
                    
                    <SearchBar/>

                    <div class="nav-icons">
                        <router-link to="/info"><img src="../../public/ikoner/info.png" alt=""></router-link>
                        <img src="../../public/ikoner/english-flag.png" alt="">
                        <img src="../../public/ikoner/profile.svg" alt="">
                    </div>
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


    nav {
        margin-bottom: 140px;
    }

    .nav-hidden {
        transform: translateY(-110%);
        transition: 0.3s ease;
    }

    .mobile-nav {
        display: block;
        position: fixed;
        top: 0;
        z-index: 5;
        background-color: #fff;
        width: 100vw;
        box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.4);
        transition: 0.3s ease;
        max-height: 100vh;

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

    .link {
        text-decoration: none;
        color: c.$font-color-primary;
            
    }

    #burgermenu {
        padding: 0;
        border: none;
        background-color: #fff;
        padding-right: 10px;
        

        img {
            width: 40px;
            height: 40px;
            display: block;
        }

        .hidden {
                display: none;
            }

        .visible {
            display: block;
        }
    }

    .partner-logo {
        max-width: 100%;
        height: auto;
        
    }


    .dark-background {
        z-index: 4;
        width: 100vw;
        height: 100vh;
        position: fixed;
        background-color: rgba($color: #000000, $alpha: 0.4);
    }

    .thick-line {
        border: none;
        height: 1px;
        background-color: #000;
    }

    .nav-burgermenu {
        position: absolute;
        z-index: 5;
        width: 100vw;
        background-color: #fafafa;
        padding-bottom: 30px;
        box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.4);
        overflow-y: auto;
        max-height: 78vh;

        

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
            
            a {
                text-decoration: none;
                color: c.$font-color-primary;
            }
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
            background-color: #fafafa;
            padding: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;

            
                .rotate {
                    transform: rotate(180deg);
                    transition: transform 0.3s ease;
                }
            

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
        transition: transform 0.3s ease;
    }


    @media (min-width: 1280px) {

        nav {
            margin-bottom: 0;
        }

        .mobile-nav {
            display: none;
        }

        .desktop-nav {
            display: flex;
            flex-direction: column;



            .partner-logo {
                padding: 0;
            }

            .partnersite {
                width: 90%;
                justify-content: flex-start;
                margin: 10px auto;

                a {
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }

            .nav-row {
                display: flex;
                width: 90%;
                margin: auto;
                margin-top: 30px;
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
                background-color: #fff;

                &:hover {
                    text-decoration: underline;
                    text-underline-offset: 8px;
                }

                p {
                    font-size: 20px;
                    white-space: nowrap;
                    margin: 0;
                }
            }

            .dropdown {
                position: absolute;
                z-index: 5;
                width: 0;
                

                .dropdown-content {
                    position: absolute;
                    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.4);
                    background-color: #fff;
                    list-style-type: none;
                    width: auto;
                    margin: 0 0 0 20px;
                    white-space: nowrap;
                    padding: 0;
                }


                li {
                    font-size: 16px;
                    margin: 15px 15px;
                    cursor: pointer;

                    &:hover {
                        text-decoration: underline;
                        text-underline-offset: 6px;
                    }
                }
            }

            .nav-icons {
                justify-content: space-between;
                min-width: 120px;
                margin: 0 0 0 20px;

                img {
                    padding: 0;
                    cursor: pointer;
                }
            }
        }



    }

</style>