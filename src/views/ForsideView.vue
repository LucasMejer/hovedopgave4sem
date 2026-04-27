<script setup>
import Carousel from '@/components/Carousel.vue';
import Footer from '@/components/Footer.vue';
import LargeIndexCard from '@/components/LargeIndexCard.vue';
import Navbar from '@/components/Navbar.vue';
import Videosection from '@/components/videosection.vue';

</script>

<template>
    <Navbar/>
    <Carousel />
    <div class="LargeIndexCardsDiv">
        <LargeIndexCard 
            CardHeading="Master data" 
            CardText="Find master data for all available SCANGRIP products - in a single file" 
            CardImg="/ikoner/index-masterdata-ikon.svg"
            CardDownload="/download/master-data.xlsx"
        />
        <LargeIndexCard
            CardHeading="Media file" 
            CardText="Download the complete file 'Media' containing pictures, manuals, energy labels, MSDS and DoC info." 
            CardImg="/ikoner/index-mediafile-ikon.svg" 
        />
        <LargeIndexCard 
            CardHeading="Pricelist" 
            CardText="Download SCANGRIP's price lists for all products/markets." 
            CardImg="/ikoner/index-pricelist-ikon.svg" 
        />
    </div>
    <Videosection/>
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
