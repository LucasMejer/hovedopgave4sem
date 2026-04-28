<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import LargeIndexCard from '@/components/LargeIndexCard.vue';
import FAQAccordion from '@/components/FAQAccordion.vue';
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
    <FAQAccordion 
    overskrift="Where can I find how many lumen the lamps illuminate?" skjulttekst="Dette er den skjulte tekst"
    />
    <FAQAccordion 
    overskrift="Which file formats are available for download?"
    />
    <FAQAccordion 
    overskrift="Where can I find marketing material for specific trades"
    />
        <FAQAccordion 
    overskrift="Can I download the marketing material in other languages?"
    />
        <FAQAccordion 
    overskrift="Where can I finde the EAN number of a product?"
    />
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