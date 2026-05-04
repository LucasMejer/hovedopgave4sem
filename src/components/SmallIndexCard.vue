<script setup>
</script>

<template>
    <div class="smallindexcardsection">
        <div class="smallindexcard">
            <img src="/public/ikoner/index-salesguide-ikon.svg" alt="">
            <h3>Sales Guide</h3>
        </div>
        <div class="smallindexcard">
            <img src="/ikoner/index-campaignmaterial-ikon.svg" alt="">
            <h3>Campaign material</h3>
        </div>
        <div class="smallindexcard">
            <img src="/ikoner/index-videos-ikon.png" alt="">
            <h3>Videos</h3>
        </div>
        <div class="smallindexcard">
            <img src="/ikoner/index-pointofsales-ikon.svg" alt="">
            <h3>POS-materials</h3>
        </div>
        <div class="smallindexcard">
            <img src="/public/ikoner/index-brand-ikon.svg" alt="">
            <h3>Branding</h3>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.smallindexcardsection {
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.smallindexcard{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    padding: 20px;
    text-align: center;
    
    img {
        width: 100%;
        max-width: 100px;
        height: auto;
        margin-bottom: 10px;
    }
}

@media only screen and (min-width: 768px){

    .smallindexcardsection{
        justify-content: space-between;
        margin: 5% auto;
    }

    .smallindexcard{
        flex-direction: column;
        cursor: pointer;
        margin: 0 20px;
        text-align: center;
        padding: 20px 0;

        img {
            max-width: 100px;
            
            
        }
    }
}

</style>