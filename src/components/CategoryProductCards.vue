<script setup>
import { computed, onMounted, ref } from 'vue';

let productArray = ref([]);
let activeFilters = ref([]);

let totalProducts = ref(15);

let CurrentPage = ref(1);

let SelectedFilterCount = ref([
    0,
    0,
    0,
    0,
    0
]);

const mediaQuery = window.matchMedia("(max-width: 768px)");

async function FetchProducts(){
try {
    const Res = await fetch(
        `https://hovedopgave4sem-default-rtdb.europe-west1.firebasedatabase.app/products.json`
    );
    
    if (!Res.ok) throw new Error("Failed to fetch products");

    const data = await Res.json();
    productArray.value = Object.values(data);

    //console.log(productArray.value);
    
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

const FiltersVisible1 = computed(() => {
    let tempArray = Array.from(activeFilters.value, (filter) => filter == 'Flashlight')

    if(tempArray.filter(Boolean).length == 0){
        return '';
    }
    return `(${tempArray.filter(Boolean).length})`
});

const FiltersVisible2 = computed(() => {
    let tempArray = Array.from(activeFilters.value, (filter) => filter == '24V')

    if(tempArray.filter(Boolean).length == 0){
        return '';
    }
    return `(${tempArray.filter(Boolean).length})`
});

const FiltersVisible3 = computed(() => {
    let tempArray = Array.from(activeFilters.value, (filter) => filter == 'TypeA')

    if(tempArray.filter(Boolean).length == 0){
        return '';
    }
    return `(${tempArray.filter(Boolean).length})`
});

const FiltersVisible4 = computed(() => {
    let tempArray = Array.from(activeFilters.value, (filter) => filter == 'Construction' || filter == 'Electrician' || filter == 'Automotive' || filter == 'Painting')

    if(tempArray.filter(Boolean).length == 0){
        return '';
    }
    return `(${tempArray.filter(Boolean).length})`
});

const FiltersVisible5 = computed(() => {
    let tempArray = Array.from(activeFilters.value, (filter) => filter == 'Discontinued')

    if(tempArray.filter(Boolean).length == 0){
        return '';
    }
    return `(${tempArray.filter(Boolean).length})`
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
    resetPages();
}

function ScreenSizeCheck(size){

    //Runs if screen goes to mobile size
    if(size.matches){
        Object.keys(filterToggles.value).forEach(filter => {
            filterToggles.value[filter] = false
        });
    }
}

const MaxPages = computed(() => {
    return Math.max(1, Math.ceil(filteredProducts.value.length / totalProducts.value));    
});

function resetPages(){
    setTimeout(pageDefault, 10)
}

function pageDefault(){
    CurrentPage.value = 1;
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
                        Reset
                    </p>
                </button>
            </h3>
            
            <div class="AllFilterDropdowns">

            <button class="FilterButtons">
                <hr>
                <h3 @click="OpenFilterDropDown('producttype')">
                    Product type {{FiltersVisible1}}
                    <img class="ArrowDown" :class="{'rotate': filterToggles.producttype}" src="/ikoner/arrow-down.png" alt="">
                </h3>
                <div class="AllProductTypeFilter" id="MainDropdown" v-if="filterToggles.producttype">
                    <label for="ProductTypeBox">
                        <p class="FlashlightFilter">Flashlight</p>
                    <input type="checkbox" id="ProductTypeBox" value="Flashlight" v-model="activeFilters" @click="resetPages()">
                    </label>
                </div>
            </button>

            
            <button class="FilterButtons">
                <hr>
                <h3 @click="OpenFilterDropDown('powersource')">
                    Power source {{FiltersVisible2}}
                    <img class="ArrowDown" :class="{'rotate': filterToggles.powersource}" src="/ikoner/arrow-down.png" alt="">
                </h3>
                <div class="AllDiscontinuedFilter" id="MainDropdown" v-if="filterToggles.powersource">
                    <label for="PowerSourceBox">
                        <p class="24VFilter">24 V</p>
                    <input type="checkbox" id="PowerSourceBox" value="24V" v-model="activeFilters" @click="resetPages()">
                    </label>
                </div>
            </button>

            <button class="FilterButtons">
                <hr>
                <h3 @click="OpenFilterDropDown('plugtype')">
                    Plug type {{FiltersVisible3}}
                    <img class="ArrowDown" :class="{'rotate': filterToggles.plugtype}" src="/ikoner/arrow-down.png" alt="">
                </h3>
                <div class="AllDiscontinuedFilter" id="MainDropdown" v-if="filterToggles.plugtype">
                    <label for="PlugTypeBox">
                        <p class="TypeAFilter">Type A (US plug)</p>
                    <input type="checkbox" id="PlugTypeBox" value="TypeA" v-model="activeFilters" @click="resetPages()">
                    </label>
                </div>
            </button>

            <button class="FilterButtons">
                <hr>
                <h3 @click="OpenFilterDropDown('industry')">
                    Industry {{FiltersVisible4}}
                    <img class="ArrowDown" :class="{'rotate': filterToggles.industry}" src="/ikoner/arrow-down.png" alt="">
                </h3>
                <div class="AllIndustryFilter" id="MainDropdown" v-if="filterToggles.industry">
                    <label for="ConstructionBox">
                        <p class="ConstructionFilter">Construction</p>
                    <input type="checkbox" id="ConstructionBox" value="Construction" v-model="activeFilters" @click="resetPages()">
                    </label>

                    <label for="ElectricianBox">
                        <p class="ElectricianFilter">Electrician</p>
                        <input type="checkbox" id="ElectricianBox" value="Electrician" v-model="activeFilters" @click="resetPages()">  
                    </label>

                    <label for="AutomotiveBox">
                        <p class="AutomotiveFilter">Automotive</p>
                        <input type="checkbox" id="AutomotiveBox" value="Automotive" v-model="activeFilters" @click="resetPages()">  
                    </label>

                    <label for="PaintingBox">
                        <p class="PaintingFilter">Painting</p>
                        <input type="checkbox" id="PaintingBox" value="Painting" v-model="activeFilters" @click="resetPages()">  
                    </label>
                </div>
            </button>
            

            <button class="FilterButtons">
                <hr>
                <h3 @click="OpenFilterDropDown('discontinued')">
                    Discontinued {{FiltersVisible5}}
                    <img class="ArrowDown" :class="{'rotate': filterToggles.discontinued}" src="/ikoner/arrow-down.png" alt="">
                </h3>
                <div class="AllDiscontinuedFilter" id="MainDropdown" v-if="filterToggles.discontinued">
                    <label for="DiscontinuedBox">
                        <p class="DiscontinuedFilter">Discontinued</p>
                    <input type="checkbox" id="DiscontinuedBox" value="Discontinued" v-model="activeFilters" @click="resetPages()">
                    </label>
                </div>
            </button>
            </div>

        </div>
        <div class="ProductGridAndHeading">
            <div class="ProductGridHeadings">
                <h3>Results: {{filteredProducts.length}}</h3>
                <div class="VisningDiv">
                    <h3>View:</h3>
                    <img src="/public/ikoner/grid-hvid.png" alt="Grid sort" class="ProductGridIcon">
                    <img src="/public/ikoner/list-sort.png" alt="List sort" class="ProductListIcon">
                </div>
            </div>

            <div class="ActiveFiltersDiv">
                <button v-for="value in activeFilters" @click="activeFilters.splice(activeFilters.indexOf(value), 1), resetPages()" class="ActiveFiltersButton" :class="[value + 'Tag']">
                    <p>
                        {{value}}
                    </p>
                    <img src="/public/ikoner/close.png" alt="">
                </button>
            </div>

            <div class="ProductGrid">
                <div v-for="(item, index) in filteredProducts" :key="item.ProduktNummer" class="AboveProductDiv">
                    <a class="ProductDiv" v-if="index > ((totalProducts * CurrentPage) - totalProducts) - 1 && index < (totalProducts * CurrentPage)" href="/product">
                        <div class="ProductTags">
                            <span v-for="(value, key) in item.ProduktTags" >
                                    <p v-if="value && key != 'Discontinued'" :class="[key + 'Class']">
                                        {{ key }}
                                    </p>
                            </span>
                                <p v-if="item.ProduktTags.Discontinued" class="DiscontinuedClass">
                                        Discontinued
                                </p>
                        </div> 
                        <img :src=item.ProduktBillede :alt="item.ProduktTitel">
                        <h2>
                            {{ item.ProduktTitel }}
                        </h2>
                        <p>
                            {{item.ProduktNummer}}
                        </p>
                        <p>
                            {{item.ProduktBeskrivelse}}
                        </p>
                    </a>
                </div>
            </div>
            <div class="BottomButtonsDiv">
                <div class="PageNav">
                    <button class="PageSwitch" @click="(CurrentPage > 1) ? CurrentPage -= 1 : CurrentPage = 1" :class="{'ArrowOff': CurrentPage <= 1}">
                        <img src="/ikoner/arrow-left.svg" alt="Previous page">
                    </button>
                    <h3>
                        Page {{ CurrentPage }} of {{ MaxPages }}
                    </h3>
                    <button class="PageSwitch" @click="(CurrentPage < MaxPages) ? CurrentPage += 1 : CurrentPage = MaxPages" :class="{'ArrowOff': CurrentPage >= MaxPages}">
                        <img src="/ikoner/arrow-right.svg" alt="Next page">
                    </button>
                </div>
                <!--
                <button class="LoadMoreButton" v-if="totalProducts < filteredProducts.length" @click="totalProducts += 6">
                    <h3>
                        Load more
                    </h3>
                </button>
                --> 
                <!--
                <a class="ReturnButton" href="#top">
                    <h3>
                        Return to top
                    </h3>
                </a> 
                -->  
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
        
    }


    .FullProductsDiv{
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: auto;

        .ProductGridHeadings{
            display: none;
        }

        
        .ActiveFiltersDiv{
            display: flex;
            margin-bottom: 25px;

            .ActiveFiltersButton{
            margin: 20px 25px 0px 0px;
            width: fit-content;
            height: 30px;
            background-color: c.$font-color-secondary;
            border-style: solid;
            border-width: 1px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            img{
                height: 100%;
                margin: auto 0px;
            }

            
        }
        .ConstructionTag{
            p{
                color: c.$font-color-secondary;
            }
            img{
                filter: invert(1);
            }
            border-color: c.$font-color-secondary;
            background-color: c.$font-color-primary;
        }
        .ElectricianTag{
            p{
                color: c.$font-color-secondary;
            }
            img{
                filter: invert(1);
            }
            border-color: c.$font-color-secondary;
            background-color: #07775B;
        }
        .PaintingTag{
            p{
                color: c.$font-color-secondary;
            }
            img{
                filter: invert(1);
            }
            border-color: c.$font-color-secondary;
            background-color: #88964E;
        }
        .AutomotiveTag{
            p{
                color: c.$font-color-secondary;
            }
            img{
                filter: invert(1);
            }
            border-color: c.$font-color-secondary;
            background-color: #2715AE;
        }
        .DiscontinuedTag{
            p{
                color: c.$font-color-secondary;
            }
            img{
                filter: invert(1);
            }
            border-color: c.$font-color-secondary;
            background-color: #B91215;
        }  
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
                    color: c.$hover-state-active;
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
            background-color: c.$background-color-primary;
            border: 1px;
            border-color: c.$font-color-primary;
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
            margin: 0px 0px 5% 0px;
            .PageNav{
                display: flex;
                align-items: center;
                gap: 25px;
                flex-direction: row;
                text-align: center;
                .PageSwitch{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 22.5px;
                    width: 22.5px;
                    margin: 0px;
                    padding: 0px;
                    background-color: c.$font-color-secondary;
                    border-style: none;
                    cursor: pointer;
                }
                .ArrowOff{
                    opacity: 0.5;
                    cursor: auto;
                }
            }
            .LoadMoreButton{
                width: 100%;
                height: 50px;
                margin: 0% 0px 7.5% 0px;
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
            text-decoration: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            width: auto;
            box-sizing: border-box;
            border-color: c.$font-color-primary;
            border: 1px;
            border-style: solid ;
            width: 100%;
            padding: 15px 0px;
            gap: 10px;
            cursor: pointer;
            text-align: center;
            margin-bottom: 35px;
            &:visited{
                color: c.$font-color-primary;
            }
            
            .ProductTags{
                align-self: flex-start;
                margin: 0px 1.5%;
                position: absolute;
                span{
                    width: auto;
                }
                p{
                    margin: 5% 0px 5% 0px;
                    padding: 5px;
                    //text-transform: uppercase;
                    width: max-content;
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

    .rotate{
        transform: rotate(180deg);
        transition: transform 0.3s ease;
    }


    //Media query
    @media only screen and (min-width: 768px){

        .CategoryHeading{
            justify-content: center;
            text-align: center;
            
        }

        .FullProductsDiv{
            display: grid;
            grid-template-columns: 25% auto;

            .ProductGridHeadings{
                margin-bottom: 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .VisningDiv{
                    display: flex;
                    .ProductGridIcon{
                    height: 1.5rem;
                    margin: auto 0.25rem auto 0.5rem;
                    border-style: solid;
                    border-width: 2px;
                    border-color: c.$font-color-primary;
                    background-color: c.$font-color-primary;
                    cursor: pointer;
                    }
                    .ProductListIcon{
                        height: 1.5rem;
                        margin: auto 0.25rem;
                        border-style: solid;
                        border-width: 2px;
                        border-color: c.$font-color-primary;
                        background-color: c.$font-color-secondary;
                        cursor: pointer;
                    }
                }   
            }

            .FilterMainDiv{
                padding-right: 10%;
                align-content: flex-start;
                margin-bottom: 25%;
                button{
                    margin-top: 10px;
                    hr{
                        display: block;
                        border-color: c.$font-color-primary;
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
                    margin: 0% 0px 5% 0px;
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
