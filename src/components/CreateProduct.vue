<script setup>

import { ref } from 'vue';

let productArray = ref([]);

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
                <button class="EditButton" @click="item.active = !item.active">
                    <p>
                        Edit Product
                    </p>
                </button>
            </div>
            <div class="EditProductDiv" v-if="item.active == true">
                <h3>
                    Overskrift
                    <input type="text" v-model="NyTitel">
                </h3>
                <button @click="item.ProduktTitel = NyTitel, UpdateProducts()">
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
        height: 250px;
        display: flex;
        flex-direction: column;
        padding: 10px;
        justify-content: space-between;
        Button{
            width: 25%;
            margin: 0px auto 0px auto;
            height: 35px;
        }
    }
</style>