<script setup>
import { computed, onMounted, ref } from 'vue';

let productArray = ref([]);
let activeFilters = ref([]);

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
        Object.keys(filterToggles.value).forEach(filter => {
            filterToggles.value[filter] = (filter === FilterRef)
            ? !filterToggles.value[filter]
            : false;
        })
    }

    function clickOutside(event) {
        if (!event.target.closest(".FilterButtons")) {
            Object.keys(filterToggles.value).forEach(filter => {
                filterToggles.value[filter] = false
            });
        }
    }

onMounted(() => {
    FetchProducts();
    window.addEventListener("click", clickOutside);
});

</script>

<template>
    <div class="FullProductsDiv">
        <h3 class="FiltersHeading">
                Filters
        </h3>
        <div class="FilterMainDiv">

            <button class="FilterButtons">
                <h3 @click="OpenFilterDropDown('producttype')">
                    Product type
                    <img class="ArrowDown" src="/ikoner/arrow-down.png" alt="">
                </h3>
                <div class="AllProductTypeFilter" id="MainDropdown" v-if="filterToggles.producttype">
                    <label for="ProductTypeBox">
                        <p class="DiscontinuedFilter">Discontinued</p>
                    <input type="checkbox" id="ProductTypeBox" value="Discontinued" v-model="activeFilters">
                    </label>
                </div>
            </button>

            <button class="FilterButtons">
                <h3 @click="OpenFilterDropDown('powersource')">
                    Power source
                    <img class="ArrowDown" src="/ikoner/arrow-down.png" alt="">
                </h3>
                <div class="AllDiscontinuedFilter" id="MainDropdown" v-if="filterToggles.powersource">
                    <label for="PowerSourceBox">
                        <p class="DiscontinuedFilter">Discontinued</p>
                    <input type="checkbox" id="PowerSourceBox" value="Discontinued" v-model="activeFilters">
                    </label>
                </div>
            </button>

            <button class="FilterButtons">
                <h3 @click="OpenFilterDropDown('plugtype')">
                    Plug type
                    <img class="ArrowDown" src="/ikoner/arrow-down.png" alt="">
                </h3>
                <div class="AllDiscontinuedFilter" id="MainDropdown" v-if="filterToggles.plugtype">
                    <label for="PlugTypeBox">
                        <p class="DiscontinuedFilter">Discontinued</p>
                    <input type="checkbox" id="PlugTypeBox" value="Discontinued" v-model="activeFilters">
                    </label>
                </div>
            </button>

            <button class="FilterButtons">
                <h3 @click="OpenFilterDropDown('industry')">
                    Industry
                    <img class="ArrowDown" src="/ikoner/arrow-down.png" alt="">
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
                <h3 @click="OpenFilterDropDown('discontinued')">
                    Discontinued
                    <img class="ArrowDown" src="/ikoner/arrow-down.png" alt="">
                </h3>
                <div class="AllDiscontinuedFilter" id="MainDropdown" v-if="filterToggles.discontinued">
                    <label for="DiscontinuedBox">
                        <p class="DiscontinuedFilter">Discontinued</p>
                    <input type="checkbox" id="DiscontinuedBox" value="Discontinued" v-model="activeFilters">
                    </label>
                </div>
            </button>
            

        </div>
        <div class="ProductGrid">
            <div v-for="item in filteredProducts" :key="item.ProduktNummer" class="ProductDiv">
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
</template>

<style lang="scss" scoped>

    @use '../assets/_headings.scss' as h;

    .FullProductsDiv{
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: auto;
        .FiltersHeading{
            margin-bottom: 15px;
        }
        .FilterMainDiv{
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            padding-right: 50px;
            button{
                padding: 2px 0px;
                background-color: #ffffff00;
                border-style: none;
                cursor: pointer;
                h3{
                    display: flex;
                    align-items: center;
                    .ArrowDown{
                        height: 30px;
                        margin: 0px;
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
                    text-transform: uppercase;
                    }
            }
            
              
        }
        .AllIndustryFilter{
            .ConstructionFilter{
                color: #000000;   
            }
            .ElectricianFilter{
                color: #07775B;   
            } 
        }

        .AllDiscontinuedFilter{
            .DiscontinuedFilter{
                color: #B91215;   
            }
        }
    }


    .ProductGrid{
        display: grid;
        grid-template-columns: 47.5% 47.5%;
        column-gap: 5%; 
        row-gap: 5%;
        margin: 10% 0%;

        img{
            width: 90%;
            margin: 10px 0px;
        }

       .ProductDiv{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: auto;
            box-sizing: border-box;
            border-color: black;
            border: 1px;
            border-style: solid ;
            width: 100%;
            padding: 15px 0px;
            gap: 10px;
            cursor: pointer;
            
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

    @media only screen and (min-width: 768px){
        .ProductGrid{
            grid-template-columns: 30% 30% 30%;
            .ProductDiv{
                width: auto;
            }
        }
    }
</style>
