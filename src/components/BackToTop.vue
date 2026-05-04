<script setup>
</script>

<template>
    <div class="back-to-top">
            <a href="#top">
                <img class="white" src="../../public/ikoner/up-arrow-hvid.png" alt="">
                <img class="black" src="../../public/ikoner/up-arrow.png" alt="">
            </a>
    </div>
</template>

<style lang="scss">
@use '../assets/_colors.scss' as c;


.back-to-top {
    display: none;
}


@media (min-width: 1280px) {

    .back-to-top {
        background-color: c.$font-color-primary;
        width: 30px;
        display: flex;
        justify-content: center;
        padding: 10px;
        border-radius: 15px;
        position: fixed;
        z-index: 5;
        bottom: 10px;
        right: 10px;
        scroll-behavior: smooth;
        border: 2px solid c.$font-color-primary;


        img {
            height: 30px;
        }

        .black {
            display: none;
        }

        .white {
            display: block;
        }

        &:hover {
            background-color: c.$background-color-primary;

            .black {
                display: block;
            }

            .white {
                display: none;
            }
        }
    }
}



</style>