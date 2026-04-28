<script setup>
</script>
<template>
    <div class="backgroundcolor">
        <div class="videosection">
            <iframe src="https://www.youtube.com/embed/8-yhd09uDU0?si=QNQ0yk_fa6nPv0hq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p>Unsure how to use the partner site? Learn how to navigate througt the  partner site by watching our guide video.</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets/colors' as c;
@use '../assets/headings' as h;
.backgroundcolor{
        width: 100%;
        background-color: c.$section-color-video;
    }
.videosection{
    display: flex;
    flex-direction:column;
    padding-top: 23.5px;
    iframe{
        aspect-ratio: 16/9;
        width: 90%;
        margin: auto;
    }
    p{
        width: 90%;
        margin: 20px auto 10px auto;
    }
}

@media only screen and (min-width: 768px){
    .videosection{
        width: 90%;
        margin: auto;
        padding: 20px 0px 20px 0px;
        flex-direction: row-reverse;
        background-color: none;
            p{
                display: flex;
                align-items: center;
                width: 90%;
            }
        }
    }
</style>