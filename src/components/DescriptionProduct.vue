<script setup>
import { ref } from 'vue';

const accordionarray = ref([
    {
        Overskrift: "Description",
        is_open: true,
        Semioverskrift: "Ultra-compact and portable 1000 lumen rechargeable LED work light",
        Broedtekst: "NOVA MINI is a portable LED handlamp and basically a “must-have” for professionals. This USB-C rechargeable work light is perfect for carrying with you throughout the workday, as it is small and compact.",
        Content: ""
    },
    {
        Overskrift: "Details",
        is_open: false,
        ProduktDetails: [{
            Os: "Product Number",
            Bt: "03.6299"
        },
        {
            Os: "EAN Number",
            Bt: "5708997362006"
        },
        {
            Os: "Net Weight(kg)",
            Bt: "0.28"
        },
        {
            Os: "Length(mm)",
            Bt: "39.00"
        },
        {
            Os: "Width(mm)",
            Bt: "94.00"
        },
        {
            Os: "Height(mm)",
            Bt: "102.00"
        },
        {
            Os: "Packaging",
            Bt: "4-colour box"
        },
        {
            Os: "In the box",
            Bt: "Lamp, charge cable, manual"
        },
        {
            Os: "Gross weight",
            Bt: "0.33"
        },
        {
            Os: "Length, packaging (mm)",
            Bt: "106.00"
        },
        {
            Os: "Width, packaging (mm)",
            Bt: "96.00"
        },
         {
            Os: "Height, packaging (mm)",
            Bt: "43.00"
        },
         {
            Os: "Sales display included",
            Bt: "Yes"
        },
         {
            Os: "Qty in outer box",
            Bt: "24.00"
        },
         {
            Os: "US versioned dimensions (in)",
            Bt: "6.22 x 1.06 x 0.83"
        },
         {
            Os: "US versioned net weight (lb)",
            Bt: "0.61"
        }]
    },
    {
        Overskrift: "Main Light",
        is_open: false,
        ProduktDetails: [{
            Os: "Luminous Flux, Max(Lumen)",
            Bt: "1000"
        },
        {
            Os: "Luminous Flux, Min(Lumen)",
            Bt: "100"
        },
        {
            Os: "OPTILight setting",
            Bt: "500 lux@0.5m(EN-2464-1)"
        },
        {
            Os: "Light Source",
            Bt: "High efficiency multi-LED design with 26 LEDs"
        },
        {
            Os: "CCT (Kelvin)",
            Bt: "5700"
        },
        {
            Os: "CRI",
            Bt: "Ra>80"
        },
        {
            Os: "Adjustable Light Output",
            Bt: "6 levels"
        },
        {
            Os: "Beam Angle Main",
            Bt: "100°"
        }]
    },
     {
        Overskrift: "Electrical",
        is_open: false,
        ProduktDetails: [{
            Os: "Power source",
            Bt: "Rechargeable Battery"
        },
        {
            Os: "Battery type",
            Bt: "Li-ion(Min. 1000 charging cycles)"
        },
        {
            Os: "Battery capacity (mAh)",
            Bt: "3200"
        },
        {
            Os: "Battery voltage (V)",
            Bt: "3.60"
        },
        {
            Os: "Cable",
            Bt: "1m USB charging cable"
        },
        {
            Os: "Charging voltage DC (V)",
            Bt: "5.00"
        },
        {
            Os: "Charging current (A)",
            Bt: "1.00"
        },
        {
            Os: "Power Consumption (W)",
            Bt: "7.30"
        },
         {
            Os: "US versioned cable (in))",
            Bt: "39.4"
        },
         {
            Os: "Charger included",
            Bt: "No"
        }]
    },
    {
        Overskrift: "Operation",
        is_open: false,
        ProduktDetails: [{
            Os: "Operating time with min. lumen (hours)",
            Bt: "18.00"
        },
        {
            Os: "Operating time with max. lumen (hours) ",
            Bt: "1.50"
        },
        {
            Os: "Operating time OPTILight, (hours)",
            Bt: "6"
        },
        {
            Os: "Charging time (hours)",
            Bt: "4.00"
        },
        {
            Os: "Ingress protection",
            Bt: "IP65"
        },
        {
            Os: "Rough service",
            Bt: "Yes"
        },
        {
            Os: "Impact protection",
            Bt: "IK07"
        },
        {
            Os: "Operating temperature (°C)",
            Bt: "-10 to +40°"
        },
        {
            Os: "Charging temperature (°C)",
            Bt: "+5 to +40°"
        },
        {
            Os: "Impact resistance (meter)",
            Bt: "2.00"
        },
        {
            Os: "US versioned operating temperature (°F)",
            Bt: "+14 to +104 °F"
        },
        {
            Os: "US versioned Impact resistance (in)",
            Bt: "79.2"
        },
        {
            Os: "US versioned charging temperature (°F)",
            Bt: "+14 to +104 °F"
        }]
    },
    {
        Overskrift: "Accessories",
        is_open: false,
        ProduktDetails: [{
            Os: "Product line",
            Bt: "WORK LIGHTS"
        },
        {
            Os: "Product family",
            Bt: "NOVA"
        }]
    }
])
const toggleAccordion = (clickedValue) => {
    const wasOpen = clickedValue.is_open
    accordionarray.value.forEach(item => item.is_open = false)
    clickedValue.is_open = !wasOpen
}
</script>
<template>
<!--Mobil-->
<div class="mobile-view">
    <div class="placement">
        <div v-for="value in accordionarray" class="accordion">
            <h2 @click="toggleAccordion(value)"
                :class="{ open:value.is_open }">
                {{ value.Overskrift }}
                <img :class="{'rotate':value.is_open}" src="/public/ikoner/arrow-down.png" alt=""
                class="title"
                >
            </h2>
            <div v-show="value.is_open" class="content">
                <h3>{{ value.Semioverskrift }}</h3>
                <p>{{ value.Broedtekst }}</p>
                <div v-for="details in value.ProduktDetails">
                    <h3>{{ details.Os }}</h3>
                    <p>{{ details.Bt }}</p>
                </div>
            </div>
        </div>
    </div>
</div>
<!--Computer-->
<div class="desktop-view">
    <div class="placement">
        <div class="overskrifter">
            <h2 v-for="value in accordionarray"
                @click="toggleAccordion(value)"
                :class="{ open:value.is_open }">
                {{ value.Overskrift }}
            </h2>
        </div>
        <div class="indhold">
            <div v-for="value in accordionarray" :key="value.Overskrift" v-show="value.is_open" class="content">
                <h3>{{ value.Semioverskrift }}</h3>
                <p>{{ value.Broedtekst }}</p>
                <div v-for="details in value.ProduktDetails" :key="details.Os">
                    <h3>{{ details.Os }}</h3>
                    <p>{{ details.Bt }}</p>
                </div>
            </div>
        </div>
    </div>
</div>

</template>
<style lang="scss" scoped>
@use '../assets/_colors.scss' as c;

.mobile-view{
    display: block;
}

.desktop-view{
    display: none;
}

.placement{
    margin: 40px auto;
    background-color: c.$section-color-background;;
}

h2{
    display: flex;
    justify-content: space-between;
    padding: 16px 8px;
    cursor: pointer;
    border-left: solid 0.2px;

        &.open{
            border-bottom:0.1px solid c.$font-color-primary;
        }
        img{
            height: 30px;
        
        &.rotate{
            transform: rotate(180deg);
        }
    }
}

h3,p{
    padding: 2px 8px;
}

@media only screen and (min-width: 768px){
    .mobile-view{
        display: none;
    }
    
    .desktop-view{
        display: block;
    }

    .accordion{
        background-color: c.$section-color-background;
    }

    .placement{
        margin: 0;
    }

    .overskrifter{
        display: flex;
        flex-wrap: wrap;
        width: fit-content;
    }

    .overskrifter h2.open {
        border-bottom:none ;
        border-top:0.1px solid c.$font-color-primary;
        background-color: c.$font-color-secondary;
    }

    .indhold{
        padding-top: 20px;
        background-color: c.$font-color-secondary;
        border-style: solid;
        border-color: c.$font-color-primary;
        border-width: 0px 0.1px 0.1px 0.1px;
    }
    }
</style>