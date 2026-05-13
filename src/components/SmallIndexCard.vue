<script setup>
</script>

<template>
    <div class="smallindexcardsection">
        <div class="smallindexcard">
            <img src="/public/ikoner/index-salesguide-ikon.svg" alt="">
            <h3>Sales Guide</h3>
            <p>Discover our sales guides for industry-specific work light products</p>
        </div>
        <div class="smallindexcard">
            <img src="/ikoner/index-campaignmaterial-ikon.svg" alt="">
            <h3>Campaign material</h3>
            <p>Discover SCANGRIP's downloadable campaign materials</p>
        </div>
        <div class="smallindexcard">
            <img src="/ikoner/index-videos-ikon.svg" alt="">
            <h3>Videos</h3>
            <p>Download and discover all our videos</p>
        </div>
        <div class="smallindexcard">
            <img src="/ikoner/index-pointofsales-ikon.svg" alt="">
            <h3>POS-materials</h3>
            <p>Explore our exhibition material, merchandise, and in-store displays</p>
        </div>
        <div class="smallindexcard">
            <img src="/public/ikoner/index-brand-ikon.svg" alt="">
            <h3>Branding</h3>
            <p>Check out our brand book and download captivating branding images</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.smallindexcardsection {
    width: 90%;
    margin: 20px auto;
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
    width: 200px;
    height: 200px;
    padding: 10px;
    text-align: center;
    margin: 30px 0;

    h3 {
        font-size: 18px;
        font-weight: 400;
    }
    
    img {
        width: 100%;
        max-width: 200px;
        height: auto;
        margin-bottom: 10px;
    }
}

@media only screen and (min-width: 485px) {

    .smallindexcardsection {
        margin: 20px auto 40px auto;
    }

    .smallindexcard {
        width: 150px;
        height: 150px;
        margin: 20px;
    }

}


@media only screen and (min-width: 768px){

    .smallindexcardsection{
        justify-content: space-between;
        margin: 5% auto;
    }

    .smallindexcard{
        flex-direction: column;
        justify-content: center;
        cursor: pointer;
        text-align: center;
        width: 175px;
        height: 175px;
        padding: 10px;
        margin: 0;

        img {
            max-width: 100px;
        }

        h3 {
            font-size: 20px;
        }

        &:hover {
            outline: 1px solid #000;
            
        }
        /*
        &:hover {
            box-shadow: 0 0 10px 0 rgba(0,0,0,0.4);
            border-radius: 5px;
            transition: ease 0.3s;
            width: 175px;
            height: 175px;
            align-items: center;
            justify-content: center;

            img {
                width: 200px;
            }
        }*/
    }
}

</style>