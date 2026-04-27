<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import LargeIndexCard from '@/components/LargeIndexCard.vue';
</script>
<template>
    <Navbar/>
    <div class="LargeIndexCardsDiv">
        <LargeIndexCard 
            CardHeading="Master data" 
            CardText="Find master data for all available SCANGRIP products - in a single file" 
            CardImg="ikoner/infosite-salestools-ikon.svg"
            CardDownload=""
        />
        <LargeIndexCard
            CardHeading="Media file" 
            CardText="Download the complete file 'Media' containing pictures, manuals, energy labels, MSDS and DoC info." 
            CardImg="/ikoner/index-mediafile-ikon.svg"
            CardDownload="https://partner.scangrip.com/Files/Images/00-Website-pictures/Partner/Marketing%20items/Price%20and%20data/Pictures_Manuals_EnergyLabels_MSDS_DOC_ProductSheet.zip"
        />
        <LargeIndexCard 
            CardHeading="Pricelist" 
            CardText="Download SCANGRIP's price lists for all products/markets." 
            CardImg="/ikoner/index-pricelist-ikon.svg"
            CardDownload="/download/price-list.xlsx"
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