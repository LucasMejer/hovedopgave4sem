<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { onBeforeUnmount } from 'vue';
import SearchBar from './SearchBar.vue';

const toggleBM = ref(false);
const togglePI = ref(false);
const toggleMI = ref(false);
const toggleLan = ref(false);
const togglePro = ref(false);
const toggleBr = ref(false);
const toggleMe = ref(false);
const toggleSM = ref(false);
const burgerMenu = ref(null);
const mobileNav = ref(null);
const menuItemPI = ref(null);
const menuItemMI = ref(null);
const menuItemLan = ref(null);
const menuItemPro = ref(null);
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

const toggleBranding = () => {
    toggleBr.value = !toggleBr.value;
};

const toggleMedia = () => {
    toggleMe.value = !toggleMe.value;
};

const toggleSalesM = () => {
    toggleSM.value = !toggleSM.value;
};

const toggleProfile = () => {
    togglePro.value = !togglePro.value;
};

const toggleLanguage = () => {
    toggleLan.value = !toggleLan.value;
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
    else if (!toggleBM.value && toggleLan.value && !dropdown.value.contains(click.target) && !menuItemLan.value.contains(click.target))
        toggleLan.value = false;

    else if (!toggleBM.value && togglePro.value && !dropdown.value.contains(click.target) && !menuItemPro.value.contains(click.target))
        togglePro.value = false;
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

onBeforeUnmount( () => {
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
                    <img :class="{'hidden': toggleBM}" src="../../public/ikoner/burgermenu.png" alt="Burgermenu"></img>
                    <img :class="{'visible': toggleBM}" class="hidden" src="../../public/ikoner/close.png" alt="Close"></img>
                </button>
                
                <router-link to="/"><img class="partner-logo" src="../../public/ikoner/PARTNER_LOGO.svg" alt="Home"></router-link>
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

                <div class="nav-icons mobile-nav-icons">
                    <div class="nav-mobile-profile-container">
                        <p>My profile</p>
                        <img src="../../public/ikoner/header-login-ikon.svg" class="profile-icon-mobile" alt="Profile">
                        <p> Sign out</p>
                    </div>
                </div>

                <div class="nav-menu-items">
                    <hr>
                    <button @click="toggleProductInformation" class="menu-item">
                        <p>Product Information</p>
                        <img :class="{'rotate': togglePI}" class="arrows" src="../../public/ikoner/arrow-down.png" alt="">
                    </button>
                    <hr>
                    <ul class="dropdown" v-if="togglePI">
                        <router-link to="/category" class="link"><li>Work lights</li></router-link>
                        <hr>
                        <li>Vice jaws</li>
                        <hr>
                        <li>Coil spring compressors</li>
                        <hr>
                        <li>Accessories</li>
                        <hr>
                        <li>Spare parts</li>
                        <hr>
                        <li>Campaign products</li>
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
                        <li class="bold">
                            <button @click="toggleBranding">
                                <p>Branding</p>
                                <img :class="{'rotate': toggleBr}" class="arrows" src="../../public/ikoner/arrow-down.png" alt="">
                            </button>                            
                        </li>
                        <hr>
                        <ul class="list" v-if="toggleBr">
                            <li>Brand book</li>
                            <hr>
                            <li>Brand pictures</li>
                            <hr>
                            <li>Company profile</li>
                            <hr>
                            <li>Customized logo engraving</li>
                            <hr>
                            <li>Logos and symbols</li>
                        </ul>
                        <hr v-if="toggleBr">

                        <li class="bold">
                            <button @click="toggleMedia">
                                <p>Media</p>
                                <img :class="{'rotate': toggleMe}" class="arrows" src="../../public/ikoner/arrow-down.png" alt="">
                            </button>                            
                        </li>
                        <hr>
                        <ul class="list" v-if="toggleMe">
                            <li>Pictures</li>
                            <hr>
                            <li>Press releases</li>
                            <hr>
                            <li>Social media</li>
                            <hr>
                            <li>Videos</li>
                        </ul>
                        <hr v-if="toggleMe">

                        <li class="bold">
                            <button @click="toggleSalesM">
                                <p>Sales material</p>
                                <img :class="{'rotate': toggleSM}" class="arrows" src="../../public/ikoner/arrow-down.png" alt="">
                            </button>                            
                        </li>
                        <hr v-if="toggleSM">
                        <ul class="list" v-if="toggleSM">
                            <li>Brochures</li>
                            <hr>
                            <li>Campaign material</li>
                            <hr>
                            <li>Energy labels</li>
                            <hr>
                            <li>Point of sales</li>
                            <hr>
                            <li>Prices and product data</li>
                            <hr>
                            <li>Sales guides</li>
                        </ul>
                    </ul>
                    <hr v-if="toggleMI">
                    <router-link to="/info" class="menu-item link">
                        <p>Info and Guides</p>
                    </router-link>
                    <hr>
                </div>

                <div class="nav-icons mobile-nav-icons">
                    <div class="nav-mobile-languages-container">
                        <img src="../../public/ikoner/english-flag.png" alt="English" class="img-underline-mobile" tabindex="0">
                        <img src="../../public/ikoner/danish-flag.png" alt="Danish" tabindex="0">
                        <img src="../../public/ikoner/german-flag.png" alt="German" tabindex="0">
                        <img src="../../public/ikoner/french-flag.png" alt="French" tabindex="0">
                    </div>
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
                <div class="nav-menu-items">

                    <router-link to="/"><img class="partner-logo" src="../../public/ikoner/PARTNER_LOGO.svg" alt="Home"></router-link>
                    
                    <div>
                        <button @click="toggleProductInformation" class="menu-item" ref="menuItemPI">
                            <p>Product Information</p>
                            <img :class="{'rotate': togglePI}" class="arrows" src="../../public/ikoner/arrow-down.png" alt="">
                        </button>
                        <div class="dropdown" v-if="togglePI" ref="dropdown">
                            <ul class="dropdown-content">
                                <li><router-link to="/category" class="link">Work lights</router-link></li>
                                <li>Vice jaws</li>
                                <li>Coil spring compressors</li>
                                <li>Accessories</li>
                                <li>Spare parts</li>
                                <li>Campaign products</li>
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
                                <li class="bold">Branding</li>
                                <ul>
                                    <li>Brand book</li>
                                    <li>Brand pictures</li>
                                    <li>Company profile</li>
                                    <li>Customized logo engraving</li>
                                    <li>Logos and symbols</li>
                                </ul>

                                <li class="bold">Media</li>
                                <ul>
                                    <li>Pictures</li>
                                    <li>Press releases</li>
                                    <li>Social media</li>
                                    <li>Videos</li>
                                </ul>

                                <li class="bold">Sales material</li>
                                <ul>
                                    <li>Brochures</li>
                                    <li>Campaign material</li>
                                    <li>Energy labels</li>
                                    <li>Point of sales</li>
                                    <li>Prices and product data</li>
                                    <li>Sales guides</li>
                                </ul>
                            </ul>
                        </div>
                    </div>

                    <router-link to="/info" class="menu-item link">
                        <p>Info and Guides</p>
                    </router-link>  

                    <SearchBar/>

                    <div class="nav-icons">
                        <div>
                            <button @click="toggleLanguage" class="menu-item nav-icon-item" ref="menuItemLan">
                                <img src="../../public/ikoner/english-flag.png" class="img-underline-menu" alt="Language">
                                <img :class="{'rotate': toggleLan}" class="arrows" src="../../public/ikoner/arrow-down.png" alt="">
                            </button>
                            <div class="dropdown" v-if="toggleLan" ref="dropdown" tabindex="0">
                                <ul class="dropdown-content-icon">
                                    <li class="img-underline" tabindex="0">
                                        <img src="../../public/ikoner/danish-flag.png" alt="Danish" >
                                    </li>
                                    <li class="img-underline" tabindex="0">
                                        <img src="../../public/ikoner/german-flag.png" alt="German" >
                                    </li>
                                    <li class="img-underline" tabindex="0">
                                        <img src="../../public/ikoner/french-flag.png" alt="French" >
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div>
                            <button @click="toggleProfile" class="menu-item nav-icon-item" ref="menuItemPro">
                                <img src="../../public/ikoner/header-login-ikon.svg" class="img-underline-menu" alt="Profile">
                                <img :class="{'rotate': togglePro}" class="arrows" src="../../public/ikoner/arrow-down.png" alt="">
                            </button>
                            <div class="dropdown" v-if="togglePro" ref="dropdown">
                                <ul class="dropdown-content-icon">
                                    <li tabindex="0">My profile</li>
                                    <li tabindex="0"> Sign out</li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            
        </div>
        

    </nav>


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
        background-color: c.$background-color-primary;
        width: 100vw;
        box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.4);
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
        background-color: c.$background-color-primary;
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
        background-color: c.$font-color-primary;
    }

    .nav-burgermenu {
        position: absolute;
        z-index: 5;
        width: 100vw;
        background-color: c.$background-color-primary;
        padding-bottom: 10px;
        box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.4);
        overflow-y: auto;
        max-height: 79vh;

        .thick-line-vertical {
            border: none;
            width: 1px;
            background-color: c.$font-color-primary;
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
            font-weight: 600;
        }
    }   

    .nav-icons {
        display: flex;
        justify-content: center;

        img {
            width: 30px;
            height: 30px;
        }
    }

    .mobile-nav-icons {
        max-width: 90%;
        display: flex;
        flex-direction: column;
        margin: auto;

        .nav-mobile-profile-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 30px 0;

            img {
                margin-right: 5px;
            }

            p {
                margin-bottom: -4px;
                font-size: 16px;
            }

            .profile-icon-mobile {
                margin: 0 5%;
                width: 40px;
                height: 40px;

            }
        }

        .nav-mobile-languages-container {
            display: flex;
            justify-content: center;

            img {
                width: 40px;
                height: 40px;
                margin: 30px 5%;
                display: block;
            }

            .img-underline-mobile {
                border: 1px solid c.$font-color-primary;
                padding: 0 4px;
                background-color: c.$font-color-secondary;
            }
        }

        .mobile-icon-button {
            background-color: c.$font-color-secondary;
            border: none;
            padding: 20px;
        }

        ul {
            display: flex;
            margin: 0;
        }
    }

    .nav-menu-items {
        max-width: 90%;
        display: flex;
        margin: auto;
        flex-direction: column;

        .menu-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: none;
            background-color: c.$font-color-secondary;
            padding: 0;

            p {
                font-size: 16px;
                margin: 10px 0;
            }
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

            .bold {
                font-size: 15px;
                margin: 0;
            }

            .list {
                list-style: none;
                width: 80%;
                padding: 0;
                margin: 15px auto;
            }

            button {
                display: flex;
                justify-content: space-between;
                align-items: center;
                border: none;
                background-color: c.$font-color-secondary;
                padding: 0;
                width: 100%;

                p {
                    font-size: 15px;
                }
            }
        }

    .rotate {
        transform: rotate(180deg);
        transition: transform 0.3s ease;
    }

    .arrows {
        height: 30px;
        transition: transform 0.3s ease;
    }


    @media (min-width: 1280px) {

        @mixin dropdown-content-mixin {
            position: absolute;
            box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.4);
            background-color: c.$background-color-primary;
            list-style-type: none;
            width: auto;
            white-space: nowrap;
            padding: 0;

            li {
                font-size: 16px;
                margin: 12px 15px;
                cursor: pointer;

                &:hover {
                    text-decoration: underline 1.5px;
                    text-underline-offset: 6px;
                }
            }
        }

        nav {
            margin-bottom: 0;
        }

        .mobile-nav {
            display: none;
        }

        .desktop-nav {
            display: flex;
            flex-direction: column;
            border-bottom: 1px solid c.$hover-grey;

            .partner-logo {
                padding: 0;
                min-width: 250px;
            }

            .partnersite {
                width: 90%;
                justify-content: flex-start;
                margin: 10px auto;

                .marked {
                    margin-left: 10px;
                }

                p {
                    margin: 5px 10px 5px 0;
                }

                a {
                    &:hover {
                        text-decoration: underline 1.5px;
                    }
                }
            }

            .nav-row {
                display: flex;
                width: 90%;
                margin: 30px auto;
            }

        }

        .nav-menu-items {
            max-width: none;
            width: 100vw;
            margin: 0 0 0 0px;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            .menu-dropdown-items-container {
                display: flex;
            }
            

            .menu-item {
                justify-content: flex-start;
                padding-left: 15px;
                margin: 0 0;
                cursor: pointer;
                background-color: c.$background-color-primary;

                &:hover {
                    text-decoration: underline 1.5px;
                    text-underline-offset: 6px;
                }

                p {
                    font-size: 20px;
                    white-space: nowrap;
                    margin: 0;
                }
            }

            .nav-icon-item {
                margin: 5px;
                padding: 0;

                .img-underline-menu {
                    border-bottom: 2px solid c.$background-color-primary;
                }
                &:hover .img-underline-menu {
                    border-bottom: 2px solid  c.$font-color-primary;
                }

            }



            .img-underline {
                border-bottom: 2px solid c.$background-color-primary;

                img {
                    display: block;
                }
                &:hover {
                    border-bottom: 2px solid c.$font-color-primary;
                }
            }

            

            .dropdown {
                position: absolute;
                z-index: 5;
                width: 0;
                

                .dropdown-content {
                    @include dropdown-content-mixin;
                    margin: -5px 0 0 15px;

                    .bold {
                        font-weight: 500;
                        font-size: 18px;

                        &:hover {
                            cursor: auto;
                            text-decoration: none
                        }
                    }

                    ul {
                        list-style: none;
                        padding-left: 15px;
                        margin-bottom: 20px
                    }
                    
                        
                    
                }

                .dropdown-content-icon {
                    @include dropdown-content-mixin;
                    margin: -8px 0 0 5px;
                }
            }

            .nav-icons {
                margin: 0 0 0 0;

                img {
                    padding: 0;
                }
            }
        }



    }

</style>