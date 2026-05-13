<script setup>
import { ref } from 'vue';

const search = ref('');
let databaseArray = ref([]);
let searchHidden = ref(true);
let productHidden = ref(false);

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


function showSearches() {
    if (search.value.length > 0) {

        const searchString = JSON.stringify(search.value)
/*
        if (databaseArray.ProduktTitel.includes(searchString)) {
            console.log(searchString);
        }

        else {
            return
        }*/

        searchHidden.value = false;

    }
    else {
        searchHidden.value = true;
    }
}





/*

Hold det indtastede i inputfeltet op mod elementerne i arrayet
Vis kun det der matcher med det søgte


Vis kun søgeresultater når inputfeltet er markeret
luk dropdown når der klikkes uden for 


includes i produkttitel

tolowercase
trim

*/

</script>

<template>

    <div class="search-bar">
        <div class="search-input-container">
            <input 
                class="search-input" 
                type="text" 
                placeholder="Search..." 
                v-model="search"
                @input="showSearches"
            >
            <div class="icon-container">
                <img class="search-icon" src="../../public/ikoner/search.png" alt="">
            </div>
        </div>
        
        <div class="searched-dropdown-container">
            <div :class="{'search-hidden': searchHidden}" class="searched-dropdown">

                <div v-for="item in databaseArray" :class="{'product-hidden': productHidden}" class="searched-product" :key="item.ProduktNummer">
                    <img class="product-image" :src=item.ProduktBillede alt="">
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
                </div>

            </div>
        </div>
    </div>
    
</template>

<style lang="scss">
    @use '../assets/_colors.scss' as c;
    @use '../assets/_headings.scss' as f;

    .search-hidden {
        display: none;
    }

    .product-hidden {
        display: none;
    }

    .search-bar {
        margin: 0 auto;
        padding: 15px 0 25px 0;
        width: 90%;

        &:has(input:focus) .searched-dropdown-container {
            display: block;
        }


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
                position: absolute;
                width: 20px;
                height: 20px;
                margin-right: 10px;
                
            }
        }

        .searched-dropdown-container {
            display: none;
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
                                background-color: #88964E;
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

                

                .search-icon {
                    &:hover {
                        cursor: pointer;
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
                                background-color: #e6e6e6;
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