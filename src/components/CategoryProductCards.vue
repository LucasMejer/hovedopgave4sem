<script setup>
import { onMounted, ref } from 'vue';

let productArray = ref();

async function FecthProducts(){
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

onMounted(() => {
    FecthProducts();
});

</script>

<template>
    <div class="ProductGrid">
        <div v-for="item in productArray" class="ProductDiv">
            <div  class="ProductTags">
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
</template>

<style lang="scss" scoped>

    .ProductGrid{
        display: grid;
        grid-template-columns: auto auto;
        column-gap: 5%;
        row-gap: 5%;
        margin: 10% 5%;

        img{
            width: 90%;
            margin: 10px 0px;
        }

       .ProductDiv{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: auto;
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
