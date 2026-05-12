<script setup>
import { ref } from 'vue';

let productArray = ref([]);
let IndustryOpen = ref(false);
let DiscontinuedOpen = ref(false);

let NewProductActive = ref(false);
let PopupActive = ref(false);

let NytProduktTitel = ref();
let NytProduktBillede = ref();
let NytProduktBeskrivelse = ref();
let NytProduktNummer = ref();

let NytAutomotiveTag = ref(false);
let NytConstructionTag = ref(false);
let NytElectricianTag = ref(false);
let NytPaintingTag = ref(false);
let NytDiscontinuedTag = ref(false);


let TempDeleteNumber = ref();
let DeleteProductIndex = ref();

async function FetchProducts(){
  try {
    const Res = await fetch(
        `https://hovedopgave4sem-default-rtdb.europe-west1.firebasedatabase.app/products.json`
    );
    
    if (!Res.ok) throw new Error("Failed to fetch products");

    const data = await Res.json();

    productArray.value = Object.values(data);
    
    //Product array skal være i alfabetisk rækkefølge
    productArray.value.sort((a, b) => a.ProduktTitel.localeCompare(b.ProduktTitel));

    console.log(productArray.value);
    
  } catch (error) {
      console.error(error);
  }

}

FetchProducts();

async function UpdateProducts() {

    console.log("Updating");

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

    location.reload();
}

function CloseAllTabs() {
    IndustryOpen.value = false
    DiscontinuedOpen.value = false
}

function CreateError(){
    alert("Udfyld alle felter");
}

function ResetCreateForm(){

    console.log("Resetting Form");

    IndustryOpen.value = false
    DiscontinuedOpen.value = false

    NytProduktTitel.value = null
    NytProduktBillede.value = null
    NytProduktBeskrivelse.value = null
    NytProduktNummer.value = null

    NewProductActive.value = !NewProductActive.value;


    UpdateProducts();
}

function OpenDeletePopup(titel, index){
    TempDeleteNumber = titel
    DeleteProductIndex = index
    PopupActive.value = true
}

function CloseDeletePopup(){
    PopupActive.value = false
}

function ConfirmDelete(){
    console.log(DeleteProductIndex);
    productArray.value.splice(DeleteProductIndex, 1);
    PopupActive.value = false
    UpdateProducts()
}
</script>

<template>
    <body>
        <div class="Popup" v-if="PopupActive">
            <div class="PopupInner">
                <h2>
                    Are you sure you want to delete {{ TempDeleteNumber }}?
                </h2>
                <div class="PopupButtonDiv">
                    <button @click="CloseDeletePopup()">
                        No
                    </button>
                    <button @click="ConfirmDelete()">
                        Yes
                    </button>
                </div>
            </div>
        </div>

        <div v-for="item in productArray" :key="item.ProduktNummer">
            <div class="ProductDiv">
                <img class="ProductImg" :src=item.ProduktBillede alt="">
                <div class="ProductInfoDiv">
                    <h3>
                        {{ item.ProduktTitel }}
                    </h3>
                    <p>
                        {{ item.ProduktNummer }}
                    </p>
                    <p>
                        {{ item.ProduktBeskrivelse }}
                    </p>
                    <div class="ProductTags">
                        <p v-for="(value, key) in item.ProduktTags">
                            <p v-if="value" class="ProductTagsText">
                                {{ key }}
                            </p>
                        </p>
                    </div>
                </div>
                <div class="ProductButtons">
                    <button class="DeleteButton" @click="OpenDeletePopup(item.ProduktTitel, productArray.indexOf(item))">
                        <p>
                            Delete Product
                        </p>
                    </button>
                
                    <button class="EditButton" @click="item.active = !item.active, CloseAllTabs()">
                        <p>
                            Edit Product
                        </p>
                    </button>
                </div>
                
            </div>
            <div class="EditProductDiv" v-if="item.active == true">
                <h2>
                    Produkt Titel:
                    <input class="TextInput" type="text" v-model="NyTitel" :placeholder="item.ProduktTitel">
                </h2>
                <h2>
                    Billede Link:
                    <input class="TextInput" type="text" v-model="NytBillede" :placeholder="item.ProduktBillede">
                </h2>
                <h2>
                    Produkt Beskrivelse:
                    <input class="TextInput" type="text" v-model="NyBeskrivelse" :placeholder="item.ProduktBeskrivelse">
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
                        <label :for="'AutomotiveBox' + item.ProduktNummer">
                        <p>Automotive</p>
                        <input type="checkbox" :id="'AutomotiveBox' + item.ProduktNummer" v-model="item.ProduktTags.Automotive">
                        </label>
                        <label :for="'ConstructionBox' + item.ProduktNummer">
                            <p>Construction</p>
                        <input type="checkbox" :id="'ConstructionBox' + item.ProduktNummer" v-model="item.ProduktTags.Construction">
                        </label>
                        <label :for="'ElectricianBox' + item.ProduktNummer">
                            <p>Electrician</p>
                        <input type="checkbox" :id="'ElectricianBox' + item.ProduktNummer" v-model="item.ProduktTags.Electrician">
                        </label>    
                        <label :for="'PaintingBox' + item.ProduktNummer">
                            <p>Painting</p>
                        <input type="checkbox" :id="'PaintingBox' + item.ProduktNummer" v-model="item.ProduktTags.Painting">
                        </label>
                    </div>
                    
                    <button class="OpenTagsButton" @click="DiscontinuedOpen = !DiscontinuedOpen">
                        <h3>
                            Discontinued tags
                        </h3>
                        <img class="arrow" src="../../public/ikoner/arrow-down.png" alt="">
                    </button>
                    <div class="DropDownTags" v-if="DiscontinuedOpen">
                        <label :for="'DiscontinuedBox' + item.ProduktNummer">
                        <p>Discontinued</p>
                        <input type="checkbox" :id="'DiscontinuedBox' + item.ProduktNummer" v-model="item.ProduktTags.Discontinued">
                        </label>
                    </div>
                </div>
                
                <button class="SaveButton" 
                        @click="NyTitel != null ? item.ProduktTitel = NyTitel : item.ProduktTitel = item.ProduktTitel,
                        NytBillede != null ? item.ProduktBillede = NytBillede : item.ProduktBillede = item.ProduktBillede,
                        NyBeskrivelse != null ? item.ProduktBeskrivelse = NyBeskrivelse : item.ProduktBeskrivelse = item.ProduktBeskrivelse,
                        item.active = false, 
                        UpdateProducts()">
                    Save
                </button>
            </div>
        </div>

        
        <div class="NewProduct">
            <button class="OpenButton" @click="NewProductActive = !NewProductActive">
                <p>Opret nyt produkt</p>
            </button>
            <div class="NewProductInfoDiv" v-if="NewProductActive == true">
                <h2>
                    Produkt Titel:
                    <input class="TextInput NytProduktInput" type="text" v-model="NytProduktTitel" placeholder="NOVA MINI">
                </h2>
                <h2>
                    Billede(r):
                    <input class="TextInput NytProduktInput" type="text" v-model="NytProduktBillede" placeholder="https://www.scangrip.com/Admin/Public/GetImage.ashx?width=620&height=496&image=%2fFiles%2fImages%2f03.6202-nova-4%2f03.6202-nova-4-0-0.jpg">
                </h2>
                <h2>
                    Produkt Beskrivelse:
                    <input class="TextInput NytProduktInput" type="text" v-model="NytProduktBeskrivelse" placeholder="Dette er et produkt">
                </h2>
                <h2>
                    Produkt Nummer:
                    <input class="TextInput NytProduktInput" type="text" v-model="NytProduktNummer" placeholder="03.6010">
                </h2>

                <button class="OpenTagsButton">
                        <h3>
                        Details
                        </h3>
                        <img class="arrow" src="../../public/ikoner/arrow-down.png" alt="">
                </button>
                <button class="OpenTagsButton">
                        <h3>
                        Main Light
                        </h3>
                        <img class="arrow" src="../../public/ikoner/arrow-down.png" alt="">
                </button>
                <button class="OpenTagsButton">
                        <h3>
                        Electrical
                        </h3>
                        <img class="arrow" src="../../public/ikoner/arrow-down.png" alt="">
                </button>
                <button class="OpenTagsButton">
                        <h3>
                        Operation
                        </h3>
                        <img class="arrow" src="../../public/ikoner/arrow-down.png" alt="">
                </button>

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
                        <label for="NewAutomotiveBox">
                        <p>Automotive</p>
                        <input type="checkbox" id="NewAutomotiveBox" v-model="NytAutomotiveTag">
                        </label>
                        <label for="NewConstructionBox">
                            <p>Construction</p>
                        <input type="checkbox" id="NewConstructionBox" v-model="NytConstructionTag">
                        </label>
                        <label for="NewElectricianBox">
                            <p>Electrician</p>
                        <input type="checkbox" id="NewElectricianBox" v-model="NytElectricianTag">
                        </label>    
                        <label for="NewPaintingBox">
                            <p>Painting</p>
                        <input type="checkbox" id="NewPaintingBox" v-model="NytPaintingTag">
                        </label>
                    </div>
                    
                    <button class="OpenTagsButton" @click="DiscontinuedOpen = !DiscontinuedOpen">
                        <h3>
                            Discontinued tags
                        </h3>
                        <img class="arrow" src="../../public/ikoner/arrow-down.png" alt="">
                    </button>
                    <div class="DropDownTags" v-if="DiscontinuedOpen">
                        <label for="NewDiscontinuedBox">
                        <p>Discontinued</p>
                        <input type="checkbox" id="NewDiscontinuedBox" v-model="NytDiscontinuedTag">
                        </label>
                    </div>
                </div>
                
                <button class="SaveButton"
                @click="
                NytProduktTitel != null && NytProduktBillede != null && NytProduktBeskrivelse != null && NytProduktNummer != null ? 
                productArray.push(
                    {
                    'ProduktTitel' : NytProduktTitel,
                    'ProduktBillede' : NytProduktBillede,
                    'ProduktBeskrivelse' : NytProduktBeskrivelse,
                    'ProduktNummer': NytProduktNummer,
                    'ProduktTags' : 
                        {
                            'Automotive' : NytAutomotiveTag,
                            'Construction' : NytConstructionTag,
                            'Electrician' : NytElectricianTag,
                            'Painting' : NytPaintingTag,
                            'Discontinued' : NytDiscontinuedTag
                        }
                    }) &&
                    ResetCreateForm()
                    :
                    CreateError()">
                    Opret
                </button>
            </div>
        </div>
    </body>
    
</template>

<style lang="scss" scoped>

    @use '../assets/colors' as c;

    body{
        margin: 5%;
    }

    .ProductDiv{
        padding: 15px;
        border-color: c.$font-color-primary;
        border-width: 2px;
        border-style: solid;
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        height: 200px;
    }

    .ProductInfoDiv{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 15px;
        align-content: center;
        text-align: center;
    }

    .ProductTags{
        display: flex;
        flex-direction: row;
        font-style: italic;
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

    .ProductImg{
        width: auto;
        margin: 10px 0px;
    }

    .TextInput{
        width: 500px;
    }

    .NewProduct{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 50px 0px;
        .OpenButton{
            width: 250px;
            height: 100px;
            margin-bottom: 50px;
        }
        .NewProductInfoDiv{
            display: flex;
            flex-direction: column;
            gap: 25px;
        }
    }

    .ProductButtons{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 80%;
        gap: 10%;
        margin: 15px 0 15px 0;
        button{
            width: 100%;
            height: 100%;
        }
        .DeleteButton{
            border-style: solid;
            border-color: #c20000;
            background-color: #c20000;
            &:hover{
                border-color: #7c0013;
                background-color: #7c0013;
            }
            &:active{
                border-color: #360008;
                background-color: #360008;
            }
            p{
                color: #ffffff;
            }
        }
    }

    .Popup{
        position: fixed;
        width: 100%;
        height: 100%;
        margin-left: -5%;
        margin-top: -5%;
        display: flex;
        background-color: #00000090;
    }

    .PopupInner{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 20%;
        margin: auto;
        background-color: #ffffff;
        border-color: black;
        border-style: solid;
        border-width: 1px;
        height: 45%;
        width: 45%;
    }

    .PopupButtonDiv{
        display: flex;
        gap: 50px;
        Button{
            width: 100px;
            height: 35px;
        }
    }

</style>