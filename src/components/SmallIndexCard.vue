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
    flex-direction: column;

}

.smallindexcard{
    display: flex;
    flex-direction: column;
    padding: 40px 0;
    justify-content: center;
    align-items: center;
    
    img {
        width: 100%;
        max-width: 250px;
        height: auto;
        margin-bottom: 10px;
    }
}

@media only screen and (min-width: 768px){

    .smallindexcardsection{
        flex-direction: row;
        justify-content: space-between;
        margin: 5% auto;
    }

    .smallindexcard{
        
        width: 200px;
        flex-direction: column;
        cursor: pointer;
        margin: 0 20px;
        text-align: center;
        padding: 0;

        img {
            max-width: 150px;
            
            
        }
    }
}

</style>