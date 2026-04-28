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

    // function toggleFilter(filter) {
    //     const index = activeFilters.value.indexOf(filter);

    //     if (index === -1) {
    //         activeFilters.value.push(filter);
    //     } else {
    //         activeFilters.value.splice(index, 1);
    //     }
    // }

onMounted(() => {
    FetchProducts();
});

</script>

<template>
    <div class="FullProductsDiv">
        <div class="FilterDiv">
            <h3>
                Filters
            </h3>
            <input type="checkbox" id="DiscontinuedBox" value="Discontinued" v-model="activeFilters">
            <label for="DiscontinuedBox">Discontinued</label>
            <input type="checkbox" id="ConstructionBox" value="Construction" v-model="activeFilters">
            <label for="Construction">Construction</label>
            <input type="checkbox" id="ElectricianBox" value="Electrician" v-model="activeFilters">
            <label for="Electrician">Electrician</label>
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


    .FullProductsDiv{
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: auto;
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
