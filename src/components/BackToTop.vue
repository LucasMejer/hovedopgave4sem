<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { onBeforeUnmount } from 'vue';  


let buttonHidden = ref(true);

function backToTop() {
    const currentScrollY = window.scrollY
    if (currentScrollY <= 400) {
        buttonHidden.value = true;
    }
    else {
        buttonHidden.value = false;
    }
}


onMounted( () => {
    window.addEventListener("scroll", backToTop);
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", backToTop);
});
</script>

<template>
    <div :class="{'button-hidden': buttonHidden}" class="back-to-top">
            <a href="#top">
                <p>Back to Top</p>
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
        display: flex;
        justify-content: center;
        border-radius: 15px;
        position: fixed;
        z-index: 5;
        bottom: 10px;
        right: 10px;
        transition: 0.3s ease;
        /*border: 2px solid c.$font-color-primary;*/
        

        a {
            display: flex;
            white-space: nowrap;
            text-decoration: none;
            align-items: center;
            padding: 10px;

            p {
                font-size: 14px;
                color: c.$font-color-secondary;
                margin-right: 5px;
            }
        }


        img {
            height: 20px;
        }

        .black {
            display: none;
        }

        .white {
            display: block;
        }

        &:hover {
            background-color: c.$red-color-icon;
/*
            p {
                color: c.$font-color-primary;
            }

            .black {
                display: block;
            }

            .white {
                display: none;
            }*/
        }
    }

    .button-hidden {
        transform: translateY(150%);
        transition: 0.3s ease;
    }
}



</style>