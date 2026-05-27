<script setup>
import Carousel from '@/components/Carousel.vue';
import Footer from '@/components/Footer.vue';
import LargeIndexCard from '@/components/LargeIndexCard.vue';
import Navbar from '@/components/Navbar.vue';
import SmallIndexCard from '@/components/SmallIndexCard.vue';
import VideoSection from '@/components/VideoSection.vue';
import BackToTop from '@/components/BackToTop.vue';

</script>

<template>
    <Navbar/>
    <BackToTop/>
    <SmallIndexCard/>
    <div class="LargeIndexCardsDiv">
        <LargeIndexCard 
            CardHeading="Master data" 
            CardText="Find master data for all available SCANGRIP products - in a single file"
            CardButtonText="Download"
            CardImg="/ikoner/index-masterdata-ikon.svg"
            CardDownload="/download/master-data.xlsx"
            CardButtonIcon="/ikoner/download-ikon.svg"
            class="clickable"
        />
        <LargeIndexCard
            CardHeading="Media file" 
            CardText="Download the SCANGRIP Media File containing all pictures, manuals, and more"
            CardButtonText="Download"
            CardImg="/ikoner/index-mediafile-ikon.svg"
            CardDownload="/download/media-file.zip"
            CardButtonIcon="/ikoner/download-ikon.svg"
            class="clickable"
        /> 
        <LargeIndexCard 
            CardHeading="Price list" 
            CardText="Download SCANGRIP's price lists for all products/markets"
            CardButtonText="Download"
            CardImg="/ikoner/index-pricelist-ikon.svg"
            CardDownload="/download/price-list.xlsx"
            CardButtonIcon="/ikoner/download-ikon.svg"
            class="clickable"
        />
    </div>
    <Carousel />
    <VideoSection/>
    <Footer/>
</template>
<style lang="scss" scoped>
@use '../assets/_colors.scss' as c;
    
.LargeIndexCardsDiv{
    display: flex;
    flex-direction: column;
    background-color: c.$index-section-background;
}

.clickable {
    &:hover {
        cursor: pointer;
    }
}


@media only screen and (min-width: 768px){
    .LargeIndexCardsDiv{
        display: flex;
        flex-direction: row;
        padding: 50px;
        justify-content: center;


    }
}
</style>
