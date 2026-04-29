<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import LargeIndexCard from '@/components/LargeIndexCard.vue';
import FAQAccordion from '@/components/FAQAccordion.vue';
import FAQAccordionTest from '@/components/FAQAccordionTest.vue';
</script>
<template>
    <Navbar/>
    <h1>INFO AND GUIDES</h1>
    <div class="LargeIndexCardsDiv">
        <LargeIndexCard 
            CardHeading="Product data and prices" 
            CardText="How to find product information, technical details and prices." 
            CardImg="/ikoner/infosite-productdataandprices-ikon.svg"
            CardDownload="https://partner.scangrip.com/Files/Images/00-PARTNER/PDF/Guides/How%20to%20find%20product%20data%20and%20prices.pdf"
        />
        <LargeIndexCard
            CardHeading="Marketing materials" 
            CardText="How to download pictures, videos, brochures, symbols and logos." 
            CardImg="/ikoner/infosite-marketingmaterials-ikon.svg"
            CardDownload="https://partner.scangrip.com/Files/Images/00-PARTNER/PDF/Guides/How%20to%20download%20pictures.pdf"
        />
        <LargeIndexCard 
            CardHeading="Sales tools" 
            CardText="How to find sales campaigns, exhibition equipment and other sales tools." 
            CardImg="/ikoner/infosite-salestools-ikon.svg"
            CardDownload="https://partner.scangrip.com/Files/Images/00-PARTNER/PDF/Guides/How%20to%20find%20sales%20tools.pdf"
        />
         <LargeIndexCard 
            CardHeading="Certificates and documentation" 
            CardText="How to find CE certificates, manuals, energy labels and other documentation." 
            CardImg="/ikoner/infosite-certificatesanddocumentation-ikon.svg"
            CardDownload="https://partner.scangrip.com/Files/Images/00-PARTNER/PDF/Guides/How%20to%20find%20certificates%20and%20documentation.pdf"
        />
    </div>
    <h1>FAQ</h1>
    <FAQAccordion 
    overskrift="Where can I find how many lumen the lamps illuminate?" 
    skjulttekst="You can either find the lumen output for the product by finding the product under ‘Product Information’, or by downloading the ‘Master data’ file."
    />
    <FAQAccordion 
    overskrift="Which file formats are available for download?"
    skjulttekst="You can export  the material in either CSV, Json or XML."
    />
    <FAQAccordion 
    overskrift="Where can I find marketing material for specific trades"
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
    <h1>FAQ</h1>
    <div class="FAQAccordionTest">
        <FAQAccordionTest
        overskrift="Where can I find how many lumen the lamps illuminate?" 
        skjulttekst="You can either find the lumen output for the product by finding the product under ‘Product Information’, or by downloading the ‘Master data’ file."
        />
        <FAQAccordionTest
        overskrift="Where can I find how many lumen the lamps illuminate?" 
        skjulttekst="You can either find the lumen output for the product by finding the product under ‘Product Information’, or by downloading the ‘Master data’ file."
        />
        <FAQAccordionTest
        overskrift="Which file formats are available for download?"
        skjulttekst="You can export  the material in either CSV, Json or XML."
        />
        <FAQAccordionTest
        overskrift="Where can I find marketing material for specific trades"
        skjulttekst="You can choose your trade from the filter on the left hand side of the product overview."
        />
        <FAQAccordionTest
        overskrift="Can I download the marketing material in other languages?"
        skjulttekst="Yes. You can choose between english, german, french or danish by clickling on the flag in the upper right of the website."
        />
        <FAQAccordionTest
        overskrift="Where can I finde the EAN number of a product?" 
        skjulttekst="You can either find the lumen output for the product by finding the product under ‘Product Information’, or by downloading the ‘Master data’ file."
        />
    </div>
    <Footer/>
</template>
<style lang="scss" scoped>
h1{
    display: flex;
    justify-content: center;
}

.LargeIndexCardsDiv{
        display: flex;
        flex-direction: column;
    }

.FAQAccordionTest{
    display: grid;
    grid-template-columns: auto;
    width: 90%;
    margin: auto;
    gap: 5%;
}

    @media only screen and (min-width: 768px){
        .LargeIndexCardsDiv{
        display: flex;
        flex-direction: row;
        gap: 5%;
        margin: 2.5% 5%;
        }
        .FAQAccordionTest{
            grid-template-columns: 47.5% 47.5%;
            row-gap: 10%;
        }
    }
</style>