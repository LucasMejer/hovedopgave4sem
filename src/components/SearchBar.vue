<script setup>
import { ref } from 'vue';


function clickInside() {

};


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
        <div class="search-input-container">
            <input class="search-input" type="text" placeholder="Search..." v-model="search">
            <img class="search-icon" src="../../public/ikoner/search.png" alt="">
        </div>
        
        <div class="searched-dropdown-container">
            <div class="searched-dropdown">
                <div class="searched-product">
                    <img class="product-image" src="../../public/novamini.png" alt="">
                    <div class="product-content">
                        <div class="product-text">
                            <h3 class="text">NOVA MINI</h3>
                            <p class="text number">03.6200</p>
                        </div>
                        <div class="product-tags">
                            <p class="tag">Construction</p>
                            <p class="tag">Electrician</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss">
    @use '../assets/_colors.scss' as c;
    @use '../assets/_headings.scss' as f;

    .search-bar {
        margin: 0 auto;
        padding: 15px 0 25px 0;
        width: 90%;

        &:hover .searched-dropdown-container {
            display: block;
        }


        .search-input-container {
            display: flex;
            align-items: center;
            justify-content: flex-end;


            

            .search-input {
                height: 30px;
                width: 100%;
                min-width: 200px;
                border: 1px solid #afafaf;
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
                margin-right: 10px;
                position: absolute;
            }
        }

        .searched-dropdown-container {
            display: none;
            position: relative;
            z-index: 6;


            .searched-dropdown {
                position: relative;
                background-color: #fff;
                border: 1px solid #afafaf;
                list-style-type: none;
                width: 100%;
                box-sizing: border-box;


                .searched-product {
                    display: flex;
                    padding: 10px;

                    .product-image {
                        width: 50px;
                        height: 50px;
                    }

                    .product-content {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        margin-left: 10px;


                        .product-text {
                            display: flex;
                            align-items: flex-end;
                            


                            .text {
                                
                                
                            }

                            .number {
                                color: c.$hover-state-active;
                                margin-bottom: 3px;
                                margin-left: 5px;
                            }
                        }

                        .product-tags {
                            display: flex;

                            .tag {
                                margin-right: 5px;
                            }
                            
                        }
                    }

                    
                }

                
            }
        }

        .hide-searches {
            display: none;
        }

    }

    @media (min-width: 1280px) {

        .search-bar {
                padding: 0 20px;

                .search-input {
                    min-width: 150px;
                    max-width: 500px;
                }

                .search-icon {
                    &:hover {
                        cursor: pointer;
                    }
                }


                .searched-dropdown-container {
                    


                    .searched-dropdown {
                        
                        position: absolute;
                        box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.4);
                        border: none;
                        /*
                        list-style-type: none;
                        width: 100%;
                        box-sizing: border-box;*/

                        .searched-product {

                            &:hover {
                                background-color: #e6e6e6;
                                cursor: pointer;
                            }
                        }



                    }
                }
                
            }
    }


</style>