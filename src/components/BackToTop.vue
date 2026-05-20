<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { onBeforeUnmount } from 'vue';  


let buttonHidden = ref(true);

function backToTopScroll() {
    const currentScrollY = window.scrollY
    if (currentScrollY <= 400) {
        buttonHidden.value = true;
    }
    else {
        buttonHidden.value = false;
    }
}

function backToTopClick() {
    window.scrollTo({top: 0, behavior: 'smooth'})
}


onMounted( () => {
    window.addEventListener("scroll", backToTopScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", backToTopScroll);
});
</script>

<template>
    <div :class="{'button-hidden': buttonHidden}" class="back-to-top">
            <button @click="backToTopClick" aria-label="back to top button">
                <div class="overlay">
                    <p>Back to Top</p>
                </div>
                
                <img class="white" src="../../public/ikoner/up-arrow-hvid.png" alt="">
            </button>
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
        bottom: 20px;
        right: 20px;
        transition: 0.3s ease;
        border: 1px solid c.$background-color-primary; 
        overflow: hidden;

        button {
            display: flex;
            white-space: nowrap;
            text-decoration: none;
            align-items: center;
            padding: 5px 0px 5px 5px;
            background-color: c.$font-color-primary;
            transition: 0.3s ease;
            border: none;
            cursor: pointer;


            p {
                position: relative;
                font-size: 14px;
                color: c.$font-color-secondary;
                margin-right: 5px;
                display: none;
                white-space: nowrap;
            }
        }

        .overlay {
            position: relative;
            overflow: hidden;
            left: 100%;
            width: 0;
            transition: 0.3s ease;

        }


        img {
            height: 20px;
            z-index: 6;
            background-color: c.$font-color-primary;
            transition: 0.3s ease;
            padding: 5px 10px 5px 5px;
        }

        .black {
            display: none;
        }

        .white {
            display: block;
        }

        &:hover {
            background-color: c.$red-color-logo;
            border: 1px solid c.$red-color-logo;

            p {
                display: inline;
                width: 100%;
                right: 0;
                padding: 5px 0 5px 10px;
            }

            img {
                background-color: c.$red-color-logo;
            }

            .overlay {
                left: 0;
                width: auto;
                height: auto;
            }

            button {
                background-color: c.$red-color-logo;
            }

        }
    }

    .button-hidden {
        transform: translateY(150%);
        transition: 0.3s ease;
    }
}

</style>