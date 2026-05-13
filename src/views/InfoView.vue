<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import LargeIndexCard from '@/components/LargeIndexCard.vue';
import FAQAccordion from '@/components/FAQAccordion.vue';
import BackToTop from '@/components/BackToTop.vue';

</script>
<template>
    <Navbar/>
    <BackToTop/>
        <div class="breadcrumb">
        <li>
            <router-link to="/">
                <p>Home</p>
            </router-link>
            <p>></p>
            <p>Info and guides</p>
        </li>
    </div>
    <h1>INFO AND GUIDES</h1>
    <div class="LargeIndexCardsDiv">
        <LargeIndexCard 
            CardHeading="Product data and prices" 
            CardText="How to find product information, technical details and prices."
            CardButtonText="Read more"
            CardImg="/ikoner/infosite-productdataandprices-ikon.svg"
            CardDownload="/download/info-product-data-and-prices.pdf"
            CardButtonIcon="/ikoner/arrow-right.svg"
        />
        <LargeIndexCard
            CardHeading="Marketing materials" 
            CardText="How to download pictures, videos, brochures, symbols and logos."
            CardButtonText="Read more"
            CardImg="/ikoner/infosite-marketingmaterials-ikon.svg"
            CardDownload="/download/info-marketing-materials.pdf"
            CardButtonIcon="/ikoner/arrow-right.svg"
        />
        <LargeIndexCard 
            CardHeading="Sales tools" 
            CardText="How to find sales campaigns, exhibition equipment and other sales tools."
            CardButtonText="Read more" 
            CardImg="/ikoner/infosite-salestools-ikon.svg"
            CardDownload="/download/info-sales-tools.pdf"
            CardButtonIcon="/ikoner/arrow-right.svg"
        />
         <LargeIndexCard 
            CardHeading="Certificates and documentation" 
            CardText="How to find CE certificates, manuals, energy labels and other documentation."
            CardButtonText="Read more"
            CardImg="/ikoner/infosite-certificatesanddocumentation-ikon.svg"
            CardDownload="/download/info-certificates-and-documentation.pdf"
            CardButtonIcon="/ikoner/arrow-right.svg"
        />
    </div>
    <h1>FAQ</h1>
        <div class="FAQAccordioncard">
        <FAQAccordion 
        overskrift="Where can I find how many lumen the lamps illuminate?" 
        skjulttekst="You can either find the lumen output for the product by finding the product under ‘Product Information’, or by downloading the ‘Master data’ file."
        />
        <FAQAccordion 
        overskrift="Which file formats are available for download?"
        skjulttekst="You can export  the material in either CSV, Json or XML."
        />
        <FAQAccordion 
        overskrift="Where can I find marketing material for specific trades?"
        skjulttekst="You can choose your trade from the filter on the left hand side of the product overview."
        />
        <FAQAccordion 
        overskrift="Can I download the marketing material in other languages?"
        skjulttekst="Yes. You can choose between english, german, french or danish by clickling on the flag in the upper right of the website."
        />
        <FAQAccordion 
        overskrift="Where can I finde the EAN number of a product?" 
        skjulttekst="You can find the EAN number of a product right under the products name. The number has the following structure: 00.0000"
        />
    </div>
    <Footer/>
</template>
<style lang="scss" scoped>
@use '../assets/colors.scss' as c;

h1{
    display: flex;
    justify-content: center;
}

.LargeIndexCardsDiv{
        display: flex;
        flex-direction: column;
    }

.FAQAccordioncard {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    width: 90%;
    margin: 10px auto 20px;
}

a{
    color: c.$font-color-primary;
}

p{
    margin: 10px 0px;
}

li p{
    list-style: none;
    padding: 10px 10px 0px 0px;
}

.breadcrumb {
    width: 90%;
    margin: auto;
    
li{
    display: flex;
}}

@media only screen and (min-width: 768px){
        .LargeIndexCardsDiv{
        display: flex;
        flex-direction: row;
        gap: 5%;
        margin: 2.5% 5%;
        }
    .FAQAccordioncard {
        grid-template-columns: 1fr 1fr;
        margin: 10px auto 60px;
    }
}
</style>
