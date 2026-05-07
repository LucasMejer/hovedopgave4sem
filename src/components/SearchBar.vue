<script setup>
/*
Searchbar
Hent data fra database
Put det i et array
Hold det indtastede i inputfeltet op mod elementerne i arrayet
Vis kun det der matcher med det søgte
*/
</script>

<template>

    <div class="search-bar">
        <input class="search-input" type="text" placeholder="Search...">
        <img class="search-icon" src="../../public/ikoner/search.png" alt="">
    </div>
    
</template>

<style lang="scss">
    @use '../assets/_colors.scss' as c;
    @use '../assets/_headings.scss' as f;

    .search-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px auto;
        padding: 15px 0 25px 0;
        width: 90%;


        .search-input {
            height: 30px;
            width: 100%;
            min-width: 200px;
            border: 1px solid #afafaf;
            margin: 0 10px 0 0;
            padding: 5px 10px;
            font-family: f.$font-primary;
            font-size: 13px;
        }

        ::placeholder {
            color: #c5c5c5;
        }

        .search-icon {
            width: 20px;
            height: 20px;
        }
    }

    @media (min-width: 1280px) {

        .search-bar {
                padding: 0 30px;

                .search-input {
                    min-width: 150px;
                    max-width: 500px;
                }

                .search-icon {
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
    }


</style>