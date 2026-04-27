<script setup>

const cardInfo = defineProps({
            CardHeading:String,
            CardText:String,
            CardImg:String,
            CardDownload:String,
        })



</script>

<template>
    <div class="CardDiv" :style="{backgroundImage: `url(${cardInfo.CardImg})`}">
        <h2 class="CardText">{{ CardHeading }}</h2>
        <h3 class="CardText CardDesc">{{ CardText }}</h3>
        <a class="DownloadButton" :href="cardInfo.CardDownload">
            <h3>Download</h3>
            <img src="/ikoner/download-ikon.svg" alt="">
        </a> 
    </div>
</template>

<style lang="scss">

    @use '../assets/_colors' as c; 
 
    .CardDiv{
        width: 90%;
        height: 400px;
        margin: 5% 5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.7);
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        background-blend-mode: darken;
        .CardText{
            text-align: center;
            color: c.$font-color-secondary;
            margin: 25px 0px;
            width: 80%;
        }
        .DownloadButton{
            display: flex;
            margin: 25px 0px;
            padding: 10px;
            align-items: center;
            text-align: center;
            text-decoration: none;
            border: 1px;
            border-color: c.$font-color-secondary;
            border-style: solid;
            cursor: pointer;
            h3{
                margin: 0px 5px;
                color: c.$font-color-secondary;
            }
        }
    }

    @media only screen and (min-width: 768px){
        .CardDiv{
            position: relative;
            background-color: rgba(0, 0, 0, 0);
            background-position: center top;
            background-size: clamp(140px, 65%, 280px);
            justify-content: flex-end;
            width: 100%;
            height: 30vw;
            min-height: 350px;
            max-height: 450px;
            margin: 0px;
            .CardText{
                margin: clamp(3px, 2.5%, 13px) 0px;
                position: relative;
                color: c.$font-color-primary;
            }
            .CardDesc{
                font-weight: 400;
                font-size: 16px;
            }
            .DownloadButton{
                position: relative;
                margin: 10px 0px;
                border-color: c.$font-color-primary;
                h3{
                    color: c.$font-color-primary;
                }
                img{
                    filter: brightness(0);
                }
            }
        }
    }
</style>