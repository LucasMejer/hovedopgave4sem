<script setup>

import { ref } from 'vue';

let productArray = ref([]);
let IndustryOpen = ref(false);
let DiscontinuedOpen = ref(false);

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

FetchProducts();

async function UpdateProducts() {
try {
    const Res = await fetch(
        `https://hovedopgave4sem-default-rtdb.europe-west1.firebasedatabase.app/products.json`, {
        method: "PUT",
        body: JSON.stringify(productArray.value),
    });

    if (!Res.ok) throw new Error("Failed to fetch products");
    
      } catch (error) {
      console.error(error);
    }

    IndustryOpen.value = false
    DiscontinuedOpen.value = false
}

function CloseAllTabs() {
    IndustryOpen.value = false
    DiscontinuedOpen.value = false
}


</script>

<template>
    <body>
        <div v-for="item in productArray" :key="item.ProduktNummer">
            <div class="ProductDiv">
                <div class="ProductInfoDiv">
                    <h3>
                        {{ item.ProduktTitel }}
                    </h3>
                    <p>
                        {{ item.ProduktNummer }}
                    </p>
                    <div class="ProductTags">
                        <p v-for="(value, key) in item.ProduktTags">
                            <p v-if="value" class="ProductTagsText">
                                {{ key }}
                            </p>
                        </p>
                    </div>
                </div>
                <button class="EditButton" @click="item.active = !item.active, CloseAllTabs()">
                    <p>
                        Edit Product
                    </p>
                </button>
            </div>
            <div class="EditProductDiv" v-if="item.active == true">
                <h2>
                    Overskrift:
                    <input type="text" v-model="NyTitel" :placeholder="item.ProduktTitel">
                </h2>
                <h2>
                    Tags:
                </h2>
                <div class="AllTagDrops">
                    <button class="OpenTagsButton" @click="IndustryOpen = !IndustryOpen">
                        <h3>
                        Industry tags
                        </h3>
                        <img class="arrow" src="../../public/ikoner/arrow-down.png" alt="">
                    </button>
                    <div class="DropDownTags" v-if="IndustryOpen">
                        <label for="AutomotiveBox">
                        <p>Automotive</p>
                        <input type="checkbox" id="AutomotiveBox" v-model="item.ProduktTags.Automotive">
                        </label>
                        <label for="ConstructionBox">
                            <p>Construction</p>
                        <input type="checkbox" id="ConstructionBox" v-model="item.ProduktTags.Construction">
                        </label>
                        <label for="ElectricianBox">
                            <p>Electrician</p>
                        <input type="checkbox" id="ElectricianBox" v-model="item.ProduktTags.Electrician">
                        </label>    
                        <label for="PaintingBox">
                            <p>Painting</p>
                        <input type="checkbox" id="PaintingBox" v-model="item.ProduktTags.Painting">
                        </label>
                    </div>
                    
                    <button class="OpenTagsButton" @click="DiscontinuedOpen = !DiscontinuedOpen">
                        <h3>
                            Discontinued tags
                        </h3>
                        <img class="arrow" src="../../public/ikoner/arrow-down.png" alt="">
                    </button>
                    <div class="DropDownTags" v-if="DiscontinuedOpen">
                        <label for="DiscontinuedBox">
                        <p>Discontinued</p>
                        <input type="checkbox" id="DiscontinuedBox" v-model="item.ProduktTags.Discontinued">
                        </label>
                    </div>
                </div>
                
                <button class="SaveButton" @click="NyTitel != null ? item.ProduktTitel = NyTitel : item.ProduktTitel = item.ProduktTitel, item.active = false,  UpdateProducts()">
                    Save
                </button>
            </div>
        </div>
    </body>
    
</template>

<style lang="scss" scoped>
    body{
        margin: 5%;
    }

    .ProductDiv{
        padding: 15px;
        border-color: black;
        border-width: 2px;
        border-style: solid;
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        height: 100px;
    }

    .ProductInfoDiv{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 15px;
    }

    .ProductTags{
        display: flex;
        flex-direction: row;
    }

    .ProductTagsText{
        margin-right: 25px;
    }

    .EditProductDiv{
        width: 80%;
        margin: auto;
        margin-top: -10px;
        margin-bottom: 35px;
        border-style: solid;
        height: fit-content;
        display: flex;
        flex-direction: column;
        padding: 10px;
        gap: 25px;
        .SaveButton{
            width: 25%;
            margin: 0px auto 0px auto;
            height: 35px;
            align-self: flex-end;
        }
    }

    .DropDownTags{
        display: flex;
        gap: 10%;
        margin: 25px 0px 15px 0px;
        label{
            display: flex;
            gap: 5px;
        }
    }

    .OpenTagsButton{
        background-color: #00000000;
        border-style: none;
        text-align: left;
        padding: 0px;
        cursor: pointer;
        width: fit-content;
        display: flex;
        margin: 0px auto 0px 0px;
    }

    .arrow{
        width: 25px;
        height: 25px;
    }

    .AllTagDrops{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
</style>