<script setup>
</script>

<template>
    <div class="smallindexcardsection">
        <div class="smallindexcard">
            <div class="image-container">
                <img src="/public/ikoner/index-salesguide-ikon.svg" alt="">
            </div>
            <h3>Sales Guide</h3>
            <p>Discover our sales guides for industry-specific work light products</p>
        </div>
        <div class="smallindexcard">
            <div class="image-container">
                <img src="/ikoner/index-campaignmaterial-ikon.svg" alt="">
            </div>
            <h3>Campaign material</h3>
            <p>Discover SCANGRIP's downloadable campaign materials</p>
        </div>
        <div class="smallindexcard">
            <div class="image-container">
                <img src="/ikoner/index-videos-ikon.svg" alt="">
            </div>
            <h3>Videos</h3>
            <p>Download and discover all our videos</p>
        </div>
        <div class="smallindexcard">
            <div class="image-container">
                <img src="/ikoner/index-pointofsales-ikon.svg" alt="">
            </div>
            <h3>POS-materials</h3>
            <p>Explore our exhibition material, merchandise, and in-store displays</p>
        </div>
        <div class="smallindexcard">
            <div class="image-container">
                <img src="/public/ikoner/index-brand-ikon.svg" alt="">
            </div>
            <h3>Branding</h3>
            <p>Check out our brand book and download captivating branding images</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../assets/_colors.scss' as c;

.smallindexcardsection {
    width: 90%;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.smallindexcard{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    padding: 10px;
    text-align: center;
    margin: 30px auto;

    h3 {
        margin-bottom: 8px;
    }

    p {
        font-size: 16px;
    }

    .image-container {
        display: flex;
        width: 170px;
        height: 170px;
        margin-bottom: 12px;

        img {
            width: 100%;
            height: auto;
            margin: auto;
            transition: ease 0.3s;
        }
    }
}
    



@media only screen and (min-width: 768px){

    .smallindexcardsection{
        margin: 0 auto;
        justify-content: space-between;
    }

    .smallindexcard{
        flex-direction: column;
        cursor: pointer;
        width: 170px;
        height: 170px;
        padding: 10px;
        margin: 20px 0;
        
        transition: ease 0.3s;

        .image-container {
            width: 50px;
            height: 50px;
            transition: ease 0.3s;

            
    
        }

        h3 {
            font-size: 18px;
        }

        p {
            font-size: 12;
            display: none;
            transition: ease 0.3s;
            
        }

        
        &:hover {

            
            transition: ease 0.3s;



            .image-container {
                height: 75px;
                width: 75px;
                transition: ease 0.3s;

                
            }

            p {
                display: block;
                font-size: 14;
                transition: ease 0.3s;
            }
            
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