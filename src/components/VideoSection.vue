<script setup>
</script>
<template>
    <div class="backgroundcolor">
        <div class="videosection">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Cpjg4pIZbGU?si=68dTU7Dq3vqH_EQ2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div class="columntext">
                <h2>Unsure how to use the Business Partner Site?</h2>
                <h3>Learn how to navigate through the Business Partner Site by watching our guide video.</h3>
                <h3>You can find more information and guides &nbsp;<router-link to="/info" href="#top" class="info-link">here</router-link>.</h3>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets/colors' as c;
@use '../assets/headings' as h;
.backgroundcolor{
        width: 100%;
        background-color: c.$section-color-background;
    }
.videosection{
    width: 90%;
    display: flex;
    flex-direction:column;
    padding: 40px 0;
    margin: auto;
    iframe{
        aspect-ratio: 16/9;
        width: 100%;
        margin: 0 auto 20px 0;
        height: auto;
    }
    .columntext{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h2{
        margin: 20px 0 0px 0;
    }

    h3{
        margin: 20px 0 0px 0;
        font-weight: 400;
        
    }
    .info-link {
        margin: 0;
        text-decoration: underline;
        cursor: pointer;
        display: inline;
        color: inherit;

        
    }

}

@media only screen and (min-width: 768px){
    .videosection{
        width: 90%;
        margin: auto;
        padding: 50px 0px;
        flex-direction: row-reverse;
        background-color: none;
        iframe {
            width: 60%;
            margin: 0;
        }

        h2{
            margin: 0px;
        }
        
        h3{
            margin: 20px 20px 0 0;
        }
    }
    }
</style>