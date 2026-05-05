<script setup>
import { ref } from 'vue';

const accordionarray = ref([
    {
        Overskrift: "Description",
        Semioverskrift: "Ultra-compact and portable 1000 lumen rechargeable LED work light",
        Broedtekst: "NOVA MINI is a portable LED handlamp and basically a “must-have” for professionals. This USB-C rechargeable work light is perfect for carrying with you throughout the workday, as it is small and compact.",
        Content: ""
    },
    {
        Overskrift: "Details",
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
        }
    ]
    },
    {
        Overskrift: "Main Light",
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
        }
    ]
    },
     {
        Overskrift: "Electrical",
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
        }
    ]
    },
    {
        Overskrift: "Operation",
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
        }
    ]
    },
    {
        Overskrift: "Accessories",
        ProduktDetails: [{
            Os: "Product line",
            Bt: "WORK LIGHTS"
        },
        {
            Os: "Product family",
            Bt: "NOVA"
        }
    ]
    }
])

</script>
<template>
<div v-for="value in accordionarray">
    <h2>{{ value.Overskrift }}</h2>
    <h3>{{ value.Semioverskrift }}</h3>
    <p>{{ value.Broedtekst }}</p>
    <div v-for="details in value.ProduktDetails">
        <h3>{{ details.Os }}</h3>
        <p>{{ details.Bt }}</p>
    </div>
</div>
</template>
<style lang="scss" scoped>

</style>