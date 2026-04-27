<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import LargeIndexCard from '@/components/LargeIndexCard.vue';
</script>
<template>
    <Navbar/>
    <div class="LargeIndexCardsDiv">
        <LargeIndexCard 
            CardHeading="Product data and prices" 
            CardText="How to find product information, technical details and prices." 
            CardImg="public/ikoner/infosite-productdataandprices-ikon.svg"
            CardDownload="https://partner.scangrip.com/Files/Images/00-PARTNER/PDF/Guides/How%20to%20find%20product%20data%20and%20prices.pdf"
        />
        <LargeIndexCard
            CardHeading="Marketing materials" 
            CardText="How to download pictures, videos, brochures, symbols and logos." 
            CardImg="public/ikoner/infosite-marketingmaterials-ikon.svg"
            CardDownload="https://partner.scangrip.com/Files/Images/00-PARTNER/PDF/Guides/How%20to%20download%20pictures.pdf"
        />
        <LargeIndexCard 
            CardHeading="Sales tools" 
            CardText="How to find sales campaigns, exhibition equipment and other sales tools." 
            CardImg="public/ikoner/infosite-salestools-ikon.svg"
            CardDownload="https://partner.scangrip.com/Files/Images/00-PARTNER/PDF/Guides/How%20to%20find%20sales%20tools.pdf"
        />
         <LargeIndexCard 
            CardHeading="Certificates and documentation" 
            CardText="How to find CE certificates, manuals, energy labels and other documentation." 
            CardImg="public/ikoner/infosite-certificatesanddocumentation-ikon.svg"
            CardDownload="https://partner.scangrip.com/Files/Images/00-PARTNER/PDF/Guides/How%20to%20find%20certificates%20and%20documentation.pdf"
        />
    </div>
    <Footer/>
</template>
<style lang="scss" scoped>
.LargeIndexCardsDiv{
        display: flex;
        flex-direction: column;
    }

    @media only screen and (min-width: 768px){
        .LargeIndexCardsDiv{
        display: flex;
        flex-direction: row;
        gap: 5%;
        margin: 2.5% 5%;
        }
    }
</style>