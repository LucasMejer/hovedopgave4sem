<script setup>
import { computed, onMounted, ref } from 'vue';

let productArray = ref([]);
let activeFilters = ref([]);

let totalProducts = ref(3);

const mediaQuery = window.matchMedia("(max-width: 768px)");

async function FetchProducts(){
  try {
    const Res = await fetch(
        `https://hovedopgave4sem-default-rtdb.europe-west1.firebasedatabase.app/products.json`
    );
    
    if (!Res.ok) throw new Error("Failed to fetch products");

    const data = await Res.json();
    productArray.value = Object.values(data);

    console.log(productArray.value);
    
  } catch (error) {
      console.error(error);
  }
}

    const filteredProducts = computed(() => {
        if(!activeFilters.value) return productArray.value;

        return productArray.value.filter(product => {
            return activeFilters.value.every(filter =>
                product.ProduktTags?.[filter]
            );
        });
    });

    const filterToggles = ref({
        industry: false,
        discontinued: false,
        producttype: false,
        powersource: false,
        plugtype: false
    })

    const OpenFilterDropDown = (FilterRef) =>{

        //Dont close all other filters when on desktop
        if (window.innerWidth >= 768){
            filterToggles.value[FilterRef] = !filterToggles.value[FilterRef]
            return
        }

        Object.keys(filterToggles.value).forEach(filter => {
            filterToggles.value[filter] = (filter === FilterRef)
            ? !filterToggles.value[filter]
            : false;
        })
    }

    function clickOutside(event) {

        //Dont run code if on desktop
        if (window.innerWidth >= 768) return;

        if (!event.target.closest(".FilterButtons")) {
            Object.keys(filterToggles.value).forEach(filter => {
                filterToggles.value[filter] = false
            });
        }
    }

    function resetFilters(){
        activeFilters.value = [];
    }

    function ScreenSizeCheck(size){

        //Runs if screen goes to mobile size
        if(size.matches){
            Object.keys(filterToggles.value).forEach(filter => {
                filterToggles.value[filter] = false
            });
        }
    }


onMounted(() => {
    FetchProducts();
    window.addEventListener("click", clickOutside);
    mediaQuery.addEventListener("change", ScreenSizeCheck);
});

</script>

<template>

    <div class="CategoryHeading">
        <h1>
            WORK LIGHTS
        </h1>
    </div>

    <div class="FullProductsDiv">
        
        <div class="FilterMainDiv">

            <h3 class="FiltersHeading">
                Filters
                <button class="NulstilButton" @click="resetFilters">
                    <p>
                        Nulstil
                    </p>
                </button>
            </h3>
            
            <div class="AllFilterDropdowns">

            <button class="FilterButtons">
                <hr>
                <h3 @click="OpenFilterDropDown('producttype')">
                    Product type
                    <img class="ArrowDown" :class="{'rotate': filterToggles.producttype}" src="/ikoner/arrow-down.png" alt="">
                </h3>
                <div class="AllProductTypeFilter" id="MainDropdown" v-if="filterToggles.producttype">
                    <label for="ProductTypeBox">
                        <p class="FlashlightFilter">Flashlight</p>
                    <input type="checkbox" id="ProductTypeBox" value="Flashlight" v-model="activeFilters">
                    </label>
                </div>
            </button>

            
            <button class="FilterButtons">
                <hr>
                <h3 @click="OpenFilterDropDown('powersource')">
                    Power source
                    <img class="ArrowDown" :class="{'rotate': filterToggles.powersource}" src="/ikoner/arrow-down.png" alt="">
                </h3>
                <div class="AllDiscontinuedFilter" id="MainDropdown" v-if="filterToggles.powersource">
                    <label for="PowerSourceBox">
                        <p class="24VFilter">24 V</p>
                    <input type="checkbox" id="PowerSourceBox" value="24V" v-model="activeFilters">
                    </label>
                </div>
            </button>

            <button class="FilterButtons">
                <hr>
                <h3 @click="OpenFilterDropDown('plugtype')">
                    Plug type
                    <img class="ArrowDown" :class="{'rotate': filterToggles.plugtype}" src="/ikoner/arrow-down.png" alt="">
                </h3>
                <div class="AllDiscontinuedFilter" id="MainDropdown" v-if="filterToggles.plugtype">
                    <label for="PlugTypeBox">
                        <p class="TypeAFilter">Type A (US plug)</p>
                    <input type="checkbox" id="PlugTypeBox" value="TypeA" v-model="activeFilters">
                    </label>
                </div>
            </button>

            <button class="FilterButtons">
                <hr>
                <h3 @click="OpenFilterDropDown('industry')">
                    Industry
                    <img class="ArrowDown" :class="{'rotate': filterToggles.industry}" src="/ikoner/arrow-down.png" alt="">
                </h3>
                <div class="AllIndustryFilter" id="MainDropdown" v-if="filterToggles.industry">
                    <label for="ConstructionBox">
                        <p class="ConstructionFilter">Construction</p>
                    <input type="checkbox" id="ConstructionBox" value="Construction" v-model="activeFilters">
                    </label>

                    <label for="ElectricianBox">
                        <p class="ElectricianFilter">Electrician</p>
                        <input type="checkbox" id="ElectricianBox" value="Electrician" v-model="activeFilters">  
                    </label>
                </div>
            </button>
            

            <button class="FilterButtons">
                <hr>
                <h3 @click="OpenFilterDropDown('discontinued')">
                    Discontinued
                    <img class="ArrowDown" :class="{'rotate': filterToggles.discontinued}" src="/ikoner/arrow-down.png" alt="">
                </h3>
                <div class="AllDiscontinuedFilter" id="MainDropdown" v-if="filterToggles.discontinued">
                    <label for="DiscontinuedBox">
                        <p class="DiscontinuedFilter">Discontinued</p>
                    <input type="checkbox" id="DiscontinuedBox" value="Discontinued" v-model="activeFilters">
                    </label>
                </div>
            </button>
            </div>

        </div>
        <div class="ProductGridAndHeading">
            <div class="ProductGridHeadings">
                <h3>Resultater: {{filteredProducts.length}}</h3>
            </div>
            <div class="ProductGrid">
                <div v-for="(item, index) in filteredProducts" :key="item.ProduktNummer" class="AboveProductDiv">
                    <div class="ProductDiv" v-if="index <= (totalProducts -1)">
                            <div class="ProductTags">
                                <span v-for="(value, key) in item.ProduktTags" >
                                    <p v-if="value" :class="[key + 'Class']">
                                        {{ key }}
                                    </p>
                                </span>
                            </div> 
                            <img :src=item.ProduktBillede alt="">
                            <h2>
                                {{ item.ProduktTitel }}
                            </h2>
                            <p>
                                {{item.ProduktNummer}}
                            </p>
                            <p>
                                {{item.ProduktBeskrivelse}}
                            </p>
                        </div>
                    </div>
                </div>
            <div class="BottomButtonsDiv">
                <button class="LoadMoreButton" v-if="totalProducts < filteredProducts.length" @click="totalProducts += 3">
                    <h3>
                        Load more
                    </h3>
                </button>
                 <a class="ReturnButton" href="#top">
                    <h3>
                        Return to top
                    </h3>
                </a>   
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    @use '../assets/colors.scss' as c;
    @use '../assets/_headings.scss' as h;

    .CategoryHeading{
        display: flex;
        width: 90%;
        justify-content: left;
        margin: auto;
        h1{
            margin: 35px 0px;
        }
    }


    .FullProductsDiv{
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: auto;

        .ProductGridHeadings{
            display: none;
        }
        
        .FilterMainDiv{
            .FiltersHeading{
                margin-bottom: 15px;
                .NulstilButton{
                    position: absolute;
                    right: 5%;
                    align-self: flex-end;
                    width: fit-content;
                    padding: 2px 0px;
                    background-color: #ffffff00;
                    border-style: none;
                    cursor: pointer;
                    color: #7d7d7d;
                    text-decoration: underline;
                }
            }
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            padding-right: 50px;
            button{
                padding: 2px 0px;
                background-color: #ffffff00;
                border-style: none;
                cursor: pointer;
                font-family: h.$font-primary;
                hr{
                    display: none;
                }
                h3{
                    display: flex;
                    align-items: center;
                    .ArrowDown{
                        height: 30px;
                        margin: 0px;
                        transition: transform 0.3s ease;
                    }
                }
                
            }
        }
        #MainDropdown{
            position: absolute;
            display: flex;
            flex-direction: column;
            gap: 15px;
            padding: 10px;
            background-color: #ffffff;
            border: 1px;
            border-color: #000000;
            border-style: solid;
            width: 175px;
            label{
                position: relative;
                font-family: h.$font-primary;
                display: flex;
                flex-direction: row-reverse;
                justify-content: flex-end;
                gap: 2px;
                text-align: center;
                cursor: pointer;
                input{
                    cursor: pointer;
                    left: 0;
                    width: 20px;
                    height: 20px;
                    }
                p{
                    padding: 3px;
                    width: max-content;
                    }
            }
            
              
        }
        .AllIndustryFilter{
            .ConstructionFilter{
                color: c.$font-color-primary;   
            }
            .ElectricianFilter{
                color: c.$font-color-primary;  
            } 
        }

        .AllDiscontinuedFilter{
            .DiscontinuedFilter{
                color: c.$font-color-primary; 
            }
        }


        .BottomButtonsDiv{
            display: flex;
            flex-direction: column;
            align-items: center;
            height: fit-content;
            text-align: center;
            .LoadMoreButton{
                width: 100%;
                height: 50px;
                margin: 0% 0px 2.5% 0px;
                background-color: c.$green-color-icon;
                border-style: none;
                cursor: pointer;
                h3{
                    color: c.$font-color-secondary;
                }
            }
            .ReturnButton{
                width: 100%;
                height: 50px;
                margin: 2.5% 0px 5% 0px;
                background-color: c.$font-color-secondary;
                border-style: none;
                cursor: pointer;
                text-decoration: none;
                h3{
                    color: c.$font-color-primary;
                }
            }
        }
    }

    .AboveProductDiv{
        display: flex;
    }

    .ProductGrid{
        display: grid;
        grid-template-columns: 47.5% 47.5%;
        column-gap: 5%; 
        margin: 10% 0%;
        
        img{
            width: 90%;
            margin: 10px 0px;
        }


       .ProductDiv{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            width: auto;
            box-sizing: border-box;
            border-color: black;
            border: 1px;
            border-style: solid ;
            width: 100%;
            padding: 15px 0px;
            gap: 10px;
            cursor: pointer;
            text-align: center;
            margin-bottom: 35px;
            
            .ProductTags{
                align-self: flex-start;
                margin: 0px 7.5%;
                span{
                    width: auto;
                }
                p{
                    margin: 5% 0px 5% 0px;
                    padding: 5px;
                    text-transform: uppercase;
                    width: max-content;
                }
                .ConstructionClass{
                    color: #ffffff;
                    background-color: #000000;
                }
                .ElectricianClass{
                    color: #ffffff;
                    background-color: #07775B;
                }
                .PaintingClass{
                    color: #ffffff;
                    background-color: #88964E;
                }
                .AutomotiveClass{
                    color: #ffffff;
                    background-color: #2715AE;
                }
                .DiscontinuedClass{
                    color: #ffffff;
                    background-color: #B91215;
                }    
            }
        } 
    }

    .rotate{
        transform: rotate(180deg);
        transition: transform 0.3s ease;
    }


    //Media query
    @media only screen and (min-width: 768px){

        .CategoryHeading{
            justify-content: center;
            text-align: center;
            h1{
                margin: 65px;
            }
        }

        .FullProductsDiv{
            display: grid;
            grid-template-columns: 25% auto;

            .ProductGridHeadings{
                display: block;
                margin-bottom: 10px;
            }

            .FilterMainDiv{
                padding-right: 10%;
                align-content: flex-start;
                button{
                    margin-top: 10px;
                    hr{
                        display: block;
                        border-color: black;
                        border-style: solid;
                        border-width: 1px;
                        margin-bottom: 5px;
                    }
                    h3{
                        display: flex;
                        justify-content: space-between;
                        text-align: left;
                    }
                }
                .FiltersHeading{
                display: flex;
                flex-direction: row;
                width: 100%;
                align-items: baseline;
                justify-content: space-between;
                height: fit-content;
                    .NulstilButton{
                        position: static;
                        align-self: auto;
                    }
                }
                .AllFilterDropdowns{
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    .FilterButtons{
                        #MainDropdown{
                            position: relative;
                            display: flex;
                            padding: 10px 0px;
                            border: 0px;
                            border-style: none;
                            width: 175px;
                        }
                    }
                }
            } 
            
            .BottomButtonsDiv{
                .LoadMoreButton{
                    margin: 0% 0px 1% 0px;
                }
                .ReturnButton{
                    margin: 1% 0px 2.5% 0px;
                }
            }
            
        }

        .ProductGrid{
            margin: 0px 0px 5% 0px;
        }

        .ProductGrid{
            grid-template-columns: 30% 30% 30%;
            .ProductDiv{
                width: auto;
            }
        }

        
    }
</style>
