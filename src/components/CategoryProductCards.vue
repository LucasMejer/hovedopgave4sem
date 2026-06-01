<script setup>
import { computed, onMounted, ref } from 'vue';

let productArray = ref([]);
let activeFilters = ref([]);

let totalProducts = ref(18);

let CurrentPage = ref(1);


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

    //Vis alle produkter bortset fra Discontinued
    if(!activeFilters.value || activeFilters.value.length == 0){
        return productArray.value.filter(product => 
            !product.ProduktTags?.["Discontinued"]
        );
    }
    //Vis alle Discontinued Produkter
    else if(activeFilters.value.includes("Discontinued")){
        return productArray.value.filter(product => {
            return activeFilters.value.every(filter =>
            product.ProduktTags?.[filter]
            );
        });
    }
    //Vis alle produkter med valgte tags bortset fra Discontinued
    else{
        return productArray.value.filter(product => {
            return activeFilters.value.every(filter =>
            product.ProduktTags?.[filter] && !product.ProduktTags?.["Discontinued"]
            );
        });
    }
    
});

const FiltersVisible0 = computed(() => {
    let tempArray = Array.from(activeFilters.value, (filter) => filter == 'Work Lights' || filter == 'UV curing' || filter == 'Detailing and colour match' || filter == 'Ex-proof' || filter == 'CONNECT')

    if(tempArray.filter(Boolean).length == 0){
        return '';
    }
    return `(${tempArray.filter(Boolean).length})`
});

const FiltersVisible1 = computed(() => {
    let tempArray = Array.from(activeFilters.value, (filter) => filter == 'Flashlight' || filter == 'Floodlight' || filter == 'Hand lamp' || filter == 'Head lamp' || filter == 'Kit' || filter == 'Pen light' || filter == 'Tube light')

    if(tempArray.filter(Boolean).length == 0){
        return '';
    }
    return `(${tempArray.filter(Boolean).length})`
});

const FiltersVisible2 = computed(() => {
    let tempArray = Array.from(activeFilters.value, (filter) => filter == '24V' || filter == 'Alkaline battery' || filter == 'Cable' || filter == 'Cable & Rechargeable' || filter == 'Rechargeable battery')

    if(tempArray.filter(Boolean).length == 0){
        return '';
    }
    return `(${tempArray.filter(Boolean).length})`
});

const FiltersVisible3 = computed(() => {
    let tempArray = Array.from(activeFilters.value, (filter) => filter == 'Type A (US plug)' || filter == 'Type C (Euro plug)' || filter == 'Type F (Shucko plug)' || filter == 'Type G (Shucko plug w/Swiss Adapter)' || filter == 'Type G (UK plug)' || filter == 'Type I (AU plug)' || filter == 'Type J (Shucko plug w/Swiss Adapter)' || filter == 'Type J (Swiss plug)')

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
    productline: false,
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

            <button class="FilterButtons" tabindex="-1">
                <hr>
                <h3 @click="OpenFilterDropDown('productline')" tabindex="0" @keydown.enter="OpenFilterDropDown('productline')">
                    Product line {{FiltersVisible0}}
                    <img class="ArrowDown" :class="{'rotate': filterToggles.productline}" src="/ikoner/arrow-down.png" alt="">
                </h3>
                <div class="AllProductTypeFilter" id="MainDropdown" v-if="filterToggles.productline">
                    <label for="WorklightsBox">
                        <p class="WorklightsFilter">Work Lights</p>
                    <input type="checkbox" id="WorklightsBox" value="Work Lights" v-model="activeFilters" @click="resetPages()">
                    </label>

                    <label for="UVcuringBox">
                        <p class="UVcuringFilter">UV curing</p>
                    <input type="checkbox" id="UVcuringBox" value="UV curing" v-model="activeFilters" @click="resetPages()">
                    </label>

                    <label for="DetailingandcolourmatchBox">
                        <p class="DetailingandcolourmatchFilter">Detailing and colour match</p>
                    <input type="checkbox" id="DetailingandcolourmatchBox" value="Detailing and colour match" v-model="activeFilters" @click="resetPages()">
                    </label>
                    
                    <label for="ExproofBox">
                        <p class="ExproofFilter">Ex-proof</p>
                    <input type="checkbox" id="ExproofBox" value="Ex-proof" v-model="activeFilters" @click="resetPages()">
                    </label>

                    <label for="CONNECTBox">
                        <p class="CONNECTFilter">CONNECT</p>
                    <input type="checkbox" id="CONNECTBox" value="CONNECT" v-model="activeFilters" @click="resetPages()">
                    </label>

                </div>
            </button>

            <button class="FilterButtons" tabindex="-1">
                <hr>
                <h3 @click="OpenFilterDropDown('producttype')" tabindex="0" @keydown.enter="OpenFilterDropDown('producttype')">
                    Product type {{FiltersVisible1}}
                    <img class="ArrowDown" :class="{'rotate': filterToggles.producttype}" src="/ikoner/arrow-down.png" alt="">
                </h3>
                <div class="AllProductTypeFilter" id="MainDropdown" v-if="filterToggles.producttype">
                    <label for="FlashlightBox">
                        <p class="FlashlightFilter">Flashlight</p>
                    <input type="checkbox" id="FlashlightBox" value="Flashlight" v-model="activeFilters" @click="resetPages()">
                    </label>
                    <label for="FloodlightBox">
                        <p class="FloodlightFilter">Floodlight</p>
                    <input type="checkbox" id="FloodlightBox" value="Floodlight" v-model="activeFilters" @click="resetPages()">
                    </label>
                    <label for="HandlampBox">
                        <p class="HandlampFilter">Hand lamp</p>
                    <input type="checkbox" id="HandlampBox" value="Hand lamp" v-model="activeFilters" @click="resetPages()">
                    </label>
                    <label for="HeadlampBox">
                        <p class="HeadlampFilter">Head lamp</p>
                    <input type="checkbox" id="HeadlampBox" value="Head lamp" v-model="activeFilters" @click="resetPages()">
                    </label>
                    <label for="KitBox">
                        <p class="KitFilter">Kit</p>
                    <input type="checkbox" id="KitBox" value="Kit" v-model="activeFilters" @click="resetPages()">
                    </label>
                    <label for="PenlightBox">
                        <p class="PenlightFilter">Pen light</p>
                    <input type="checkbox" id="PenlightBox" value="Pen light" v-model="activeFilters" @click="resetPages()">
                    </label>
                    <label for="TubelightBox">
                        <p class="TubelightFilter">Tube light</p>
                    <input type="checkbox" id="TubelightBox" value="Tube light" v-model="activeFilters" @click="resetPages()">
                    </label>
                </div>
            </button>

            
            <button class="FilterButtons" tabindex="-1">
                <hr>
                <h3 @click="OpenFilterDropDown('powersource')" tabindex="0" @keydown.enter="OpenFilterDropDown('powersource')">
                    Power source {{FiltersVisible2}}
                    <img class="ArrowDown" :class="{'rotate': filterToggles.powersource}" src="/ikoner/arrow-down.png" alt="">
                </h3>
                <div class="AllDiscontinuedFilter" id="MainDropdown" v-if="filterToggles.powersource">
                    <label for="24VBox">
                        <p class="24VFilter">24 V</p>
                    <input type="checkbox" id="24VBox" value="24V" v-model="activeFilters" @click="resetPages()">
                    </label>
                    <label for="AlkalineBox">
                        <p class="AlkalineFilter">Alkaline battery</p>
                    <input type="checkbox" id="AlkalineBox" value="Alkaline battery" v-model="activeFilters" @click="resetPages()">
                    </label>
                    <label for="CableBox">
                        <p class="CableFilter">Cable</p>
                    <input type="checkbox" id="CableBox" value="Cable" v-model="activeFilters" @click="resetPages()">
                    </label>
                    <label for="CableRechargeBox">
                        <p class="CableRechargeFilter">Cable & Rechargeable</p>
                    <input type="checkbox" id="CableRechargeBox" value="Cable & Rechargeable" v-model="activeFilters" @click="resetPages()">
                    </label>
                    <label for="RechargeablebatteryBox">
                        <p class="RechargeablebatteryFilter">Rechargeable battery</p>
                    <input type="checkbox" id="RechargeablebatteryBox" value="Rechargeable battery" v-model="activeFilters" @click="resetPages()">
                    </label>
                </div>
            </button>

            <button class="FilterButtons" tabindex="-1">
                <hr>
                <h3 @click="OpenFilterDropDown('plugtype')" tabindex="0" @keydown.enter="OpenFilterDropDown('plugtype')">
                    Plug type {{FiltersVisible3}}
                    <img class="ArrowDown" :class="{'rotate': filterToggles.plugtype}" src="/ikoner/arrow-down.png" alt="">
                </h3>
                <div class="AllDiscontinuedFilter" id="MainDropdown" v-if="filterToggles.plugtype">
                    <label for="TypeABox">
                        <p class="TypeAFilter">Type A (US plug)</p>
                    <input type="checkbox" id="TypeABox" value="Type A (US plug)" v-model="activeFilters" @click="resetPages()">
                    </label>
                    <label for="TypeCBox">
                        <p class="TypeCFilter">Type C (Euro plug)</p>
                    <input type="checkbox" id="TypeCBox" value="Type C (Euro plug)" v-model="activeFilters" @click="resetPages()">
                    </label>
                    <label for="TypeFBox">
                        <p class="TypeFFilter">Type F (Shucko plug)</p>
                    <input type="checkbox" id="TypeFBox" value="Type F (Shucko plug)" v-model="activeFilters" @click="resetPages()">
                    </label>
                    <label for="TypeGBox">
                        <p class="TypeGFilter">Type G (Shucko plug w/Swiss Adapter)</p>
                    <input type="checkbox" id="TypeGBox" value="Type G (Shucko plug w/Swiss Adapter)" v-model="activeFilters" @click="resetPages()">
                    </label>
                    <label for="TypeGUKBox">
                        <p class="TypeGUKFilter">Type G (UK plug)</p>
                    <input type="checkbox" id="TypeGUKBox" value="Type G (UK plug)" v-model="activeFilters" @click="resetPages()">
                    </label>
                    <label for="TypeIBox">
                        <p class="TypeIFilter">Type I (AU plug)</p>
                    <input type="checkbox" id="TypeIBox" value="Type I (AU plug)" v-model="activeFilters" @click="resetPages()">
                    </label>
                    <label for="TypeJBox">
                        <p class="TypeJFilter">Type J (Shucko plug w/Swiss Adapter)</p>
                    <input type="checkbox" id="TypeJBox" value="Type J (Shucko plug w/Swiss Adapter)" v-model="activeFilters" @click="resetPages()">
                    </label>
                    <label for="TypeJSBox">
                        <p class="TypeJSFilter">Type J (Swiss plug)</p>
                    <input type="checkbox" id="TypeJSBox" value="Type J (Swiss plug)" v-model="activeFilters" @click="resetPages()">
                    </label>
                </div>
            </button>

            <button class="FilterButtons" tabindex="-1">
                <hr>
                <h3 @click="OpenFilterDropDown('industry')" tabindex="0" @keydown.enter="OpenFilterDropDown('industry')">
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
            

            <button class="FilterButtons" tabindex="-1">
                <hr>
                <h3 @click="OpenFilterDropDown('discontinued')" tabindex="0" @keydown.enter="OpenFilterDropDown('discontinued')">
                    Discontinued {{FiltersVisible5}}
                    <img class="ArrowDown" :class="{'rotate': filterToggles.discontinued}" src="/ikoner/arrow-down.png" alt="">
                </h3>
                <div class="AllDiscontinuedFilter" id="MainDropdown" v-if="filterToggles.discontinued">
                    <label for="DiscontinuedBox">
                        <p class="DiscontinuedFilter">Only show discontinued products</p>
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
                    <div class="SortDiv">
                        <h3>
                            Sort by
                        </h3>
                        <img src="/ikoner/arrow-down.png" alt="">
                    </div>
                    <div class="ViewDiv">
                        <h3>View:</h3>
                        <img src="/ikoner/grid-hvid.png" alt="Change to grid layout" class="ProductGridIcon">
                        <img src="/ikoner/list-sort.png" alt="Change to list layout" class="ProductListIcon">
                    </div>
                </div>
            </div>

            <div class="ActiveFiltersDiv">
                <button v-for="value in activeFilters" @click="activeFilters.splice(activeFilters.indexOf(value), 1), resetPages()" class="ActiveFiltersButton" :class="[value + 'Tag']">
                    <p>
                        {{value}}
                    </p>
                    <img src="/ikoner/close.png" alt="Close">
                </button>
            </div>

            <div class="ProductGrid">
                <div v-for="(item, index) in filteredProducts" :key="item.ProduktNummer" class="AboveProductDiv">
                    <a class="ProductDiv" v-if="index > ((totalProducts * CurrentPage) - totalProducts) - 1 && index < (totalProducts * CurrentPage)" href="/product">
                        <div class="ProductTags">
                            <p class="RecommendedText" >Recommended for:</p>
                            <span v-for="(value, key) in item.ProduktTags" >
                                    <p v-if="value && key != 'Discontinued'" :class="[key + 'Class']">
                                        {{ key }}
                                    </p>
                            </span>
                                
                        </div> 
                        <img :src=item.ProduktBillede alt="">
                        <h2>
                            {{ item.ProduktTitel }}
                        </h2>
                        <p v-if="item.ProduktTags.Discontinued" class="DiscontinuedClass">
                            Discontinued
                        </p>
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
        h1{
            margin: 35px 35px 35px 0px;
        }
    }


    .FullProductsDiv{
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: auto;

        .ProductGridHeadings{
            margin: 5% 0% 0% 0%;
            display: flex;
            justify-content: space-between;
            .VisningDiv{
                    display: flex;
                    align-items: center;
                    .SortDiv{
                        display: flex;
                        h3{
                            margin-top: 4px;
                            cursor: pointer;
                        }
                        img{
                        height: 30px;
                        transition: transform 0.3s ease;
                        cursor: pointer;
                        margin-right: 15px;
                        } 
                    }
                    .ViewDiv{
                        display: flex;
                    }
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

        .ActiveFiltersDiv{
            display: flex;
            margin-bottom: -25px;
            flex-wrap: wrap;

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
            background-color: c.$tag-color-construction;
        }
        .ElectricianTag{
            p{
                color: c.$font-color-secondary;
            }
            img{
                filter: invert(1);
            }
            border-color: c.$font-color-secondary;
            background-color: c.$tag-color-electrician;
        }
        .PaintingTag{
            p{
                color: c.$font-color-secondary;
            }
            img{
                filter: invert(1);
            }
            border-color: c.$font-color-secondary;
            background-color: c.$tag-color-painting;
        }
        .AutomotiveTag{
            p{
                color: c.$font-color-secondary;
            }
            img{
                filter: invert(1);
            }
            border-color: c.$font-color-secondary;
            background-color: c.$tag-color-automotive;
        }
        .DiscontinuedTag{
            p{
                color: c.$font-color-secondary;
            }
            img{
                filter: invert(1);
            }
            border-color: c.$font-color-secondary;
            background-color: c.$tag-color-discontinued;
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
            align-items: flex-start;
            overflow: auto;
            z-index: 1;
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
                    height: 30px;
                    width: 30px;
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
            margin: 30px 0px 0px 0px;;
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
            padding: 15px 10px;
            gap: 10px;
            cursor: pointer;
            text-align: center;
            margin-bottom: 35px;
            &:visited{
                border-color: c.$font-color-primary;
                color: c.$font-color-primary;
            }
            &:link{
                border-color: c.$font-color-primary;
                color: c.$font-color-primary;
            }
            &:hover{
                border-color: c.$font-color-primary;
                color: c.$font-color-primary;
            }
            &:active{
                border-color: c.$font-color-primary;
                color: c.$font-color-primary;
            }
            .DiscontinuedClass{
                    color: c.$font-color-secondary;
                    background-color: c.$tag-color-discontinued;
                    padding: 5px;
                    //text-transform: uppercase;
                    width: max-content;
                }  
            
            .ProductTags{
                align-self: flex-start;
                margin: 0px 0px;
                position: absolute;
                .RecommendedText{
                    margin: 0px;
                    padding: 0px;
                    font-weight: 500;
                    font-style: italic;
                }
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
                    background-color: c.$tag-color-construction;
                }
                .ElectricianClass{
                    color: c.$font-color-secondary;
                    background-color: c.$tag-color-electrician;
                }
                .PaintingClass{
                    color: c.$font-color-secondary;
                    background-color: c.$tag-color-painting;
                }
                .AutomotiveClass{
                    color: c.$font-color-secondary;
                    background-color: c.$tag-color-automotive;
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
            margin: 35px 35px 35px 35px;
            }
        }

        .FullProductsDiv{
            display: grid;
            grid-template-columns: 25% auto;


            .ActiveFiltersDiv{
                margin-bottom: 25px;
            }
            .ProductGridHeadings{
                margin-bottom: 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .VisningDiv{
                    display: flex;
                    align-items: center;
                    .SortDiv{
                        display: flex;
                        h3{
                            margin-top: 4px;
                            cursor: pointer;
                        }
                        img{
                        height: 30px;
                        transition: transform 0.3s ease;
                        cursor: pointer;
                        margin-right: 15px;
                        }
                        
                    }
                    .ViewDiv{
                        display: flex;
                    }
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
                            width: 100%;
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
            img{
                margin: 10px 0px;
            }
        }

        .ProductGrid{
            grid-template-columns: 30% 30% 30%;
            .ProductDiv{
                width: auto;
            }
        }

        
    }
</style>
