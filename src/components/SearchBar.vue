<script setup>
import { computed, ref } from 'vue';
import { onMounted } from 'vue';
import { onBeforeUnmount } from 'vue';

const search = ref('');
const databaseArray = ref([]);
const searchHidden = ref(true);
const productHidden = ref(false);
const clearHidden = ref(true);
const searchInput = ref(null);
const searchDropdown = ref(null);

async function fetchData() {
    try {
        const res = await fetch(`https://hovedopgave4sem-default-rtdb.europe-west1.firebasedatabase.app/products.json`, {
            method: 'GET',
        });

        if (!res.ok) throw new Error("Failed to fetch data");

        const data = await res.json();

        databaseArray.value = Object.values(data);

        console.log(databaseArray.value);
    }
    catch (error) {
      console.error(error);
  }
};
fetchData();


const searchesFilter = computed(() => {
    return databaseArray.value.filter(item => item.ProduktTitel.toLowerCase().replaceAll(' ', '').includes(search.value.toLowerCase().replaceAll(' ', '')))
});


function showSearches() {
    if (search.value.length > 0) {

        clearHidden.value = false;

        searchHidden.value = false;

    }
    else {
        searchHidden.value = true;

        clearHidden.value = true;
    }
}

function clickOutsideSearch(click) {
    if (!searchInput.value.contains(click.target) && !searchDropdown.value.contains(click.target)) {
        searchHidden.value = true;
    }
    else return;
};

function clearSearch() {
    search.value = '';
    searchHidden.value = true;
    clearHidden.value = true;

}

onMounted( () => {
    window.addEventListener("click", clickOutsideSearch);
});

onBeforeUnmount( () => {
    window.removeEventListener("click", clickOutsideSearch);
});



/*
andet
flere tags?
klik på largeindex?
info ikoner ikke samme stil og meget store og tykke
store pile
dropshadow på accessories
*/

</script>

<template>

    <div class="search-bar">
        <div class="search-input-container" ref="searchInput">
            <input 
                class="search-input" 
                type="text" 
                placeholder="Search..." 
                v-model="search"
                @input="showSearches"
            >
            <div class="icon-container">
                <svg @click="clearSearch" :class="{'clear-hidden': clearHidden}" class="clear-icon" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Clear" tabindex="0" @keydown.enter="clearSearch">
                    <path d="M1.5 1.5L14.25 14.25M27 27L14.25 14.25M14.25 14.25L1.5 27M14.25 14.25L27 1.5" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                </svg>
                <img class="search-icon" src="../../public/ikoner/search.png" alt="Search" tabindex="0">
            </div>
        </div>
        
        <div class="searched-dropdown-container" ref="searchDropdown">
            <div :class="{'search-hidden': searchHidden}" class="searched-dropdown">

                <router-link to="/product" v-for="item in searchesFilter" :class="{'product-hidden': productHidden}" class="searched-product" :key="item.ProduktNummer">
                    <img class="product-image" :src=item.ProduktBillede :alt="item.ProduktTitel">
                    <div class="product-content">
                        <div class="product-text">
                            <h3 class="text"> {{item.ProduktTitel}} </h3>
                            <p class="text number"> {{ item.ProduktNummer }} </p>
                        </div>
                        <div class="product-tags">
                            <span v-for="(value, key) in item.ProduktTags">
                                <p v-if="value" class="tag" :class="[key + 'Class']">
                                    {{ key }}
                                </p>
                            </span>
                        </div>
                    </div>
                </router-link>

            </div>
        </div>
    </div>
    
</template>

<style lang="scss">
    @use '../assets/_colors.scss' as c;
    @use '../assets/_headings.scss' as f;

    @mixin icon {
        position: absolute;
        width: 25px;
        height: 25px;
    }

    .search-hidden {
        display: none;
    }

    .clear-hidden {
        display: none;
    }

    .product-hidden {
        display: none;
    }

    .search-bar {
        margin: 0 auto;
        padding: 15px 0 25px 0;
        width: 90%;

        .search-input-container {
            display: flex;
            align-items: center;


            .search-input {
                height: 30px;
                width: 100%;
                min-width: 200px;
                border: 1px solid #afafaf;
                padding: 5px 10px;
                font-family: f.$font-primary;
                font-size: 13px;
            }

            ::placeholder {
                color: #c5c5c5;
            }

            .icon-container {
                display: flex;
                justify-content: flex-end;
                align-items: center;
            }

            .search-icon {
                @include icon;
                margin-right: 10px;
                
            }

            .clear-icon {
                @include icon;
                margin-right: 45px;
                color: #c5c5c5;
            }
        }

        .searched-dropdown-container {
            position: relative;
            z-index: 6;
            


            .searched-dropdown {
                position: relative;
                background-color: #fff;
                border: 1px solid #afafaf;
                list-style-type: none;
                width: 100%;
                box-sizing: border-box;
                overflow: scroll;
                max-height: 60vh;
                overflow-x: hidden;
                
                


                .searched-product {
                    display: flex;
                    padding: 20px 10px;
                    border: 1px solid #afafaf;
                    text-decoration: none;


                    .product-image {
                        width: 50px;
                        height: 50px;
                    }

                    .product-content {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        margin-left: 10px;
                        

                        .product-text {
                            display: flex;
                            align-items: flex-end;
                            

                            .number {
                                color: c.$hover-state-active;
                                margin-bottom: 3px;
                                margin-left: 5px;
                            }
                        }

                        .product-tags {
                            display: flex;
                            flex-wrap: wrap;

                            .tag {
                                margin: 5px 5px 0 0;
                                padding: 5px;
                                font-size: 13px;
                            }

                            .ConstructionClass{
                                color: c.$font-color-secondary;
                                background-color: c.$font-color-primary;
                            }
                            .ElectricianClass{
                                color: c.$font-color-secondary;
                                background-color: #07775B;
                            }
                            .PaintingClass{
                                color: c.$font-color-secondary;
                                background-color: #6c793e;
                            }
                            .AutomotiveClass{
                                color: c.$font-color-secondary;
                                background-color: #2715AE;
                            }
                            .DiscontinuedClass{
                                color: c.$font-color-secondary;
                                background-color: #B91215;
                            }    
                            
                        }
                    }

                    
                }

                
            }
        }


    }


    @media (min-width: 1280px) {

        .search-bar {
                padding: 0 20px;
                width: 100%;
                margin: 0;
                min-width: 250px;
                max-width: 400px;

                .search-input-container {

                    .search-icon {
                        width: 20px;
                        height: 20px;
                        &:hover {
                            cursor: pointer;
                        }
                    }
                    .clear-icon {
                        width: 16px;
                        height: 16px;
                        &:hover {
                            cursor: pointer;
                        }
                    }
                }

                


                .searched-dropdown-container {
                    min-width: 250px;
                    max-width: 400px;


                    .searched-dropdown {
                        
                        position: absolute;
                        box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.4);
                        border: none;


                        .searched-product {

                            &:hover {
                                background-color: #DADADA;
                                cursor: pointer;
                            }
                            /*
                            .product-image {
                                width: 50px;
                                height: 50px;
                            }*/
                        }



                    }
                }
                
            }
    }


</style>