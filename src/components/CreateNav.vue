<script setup>

</script>

<template>
    <div class="HeadingsDiv">
        <h2 class="HeadingOn">
            Product Information
        </h2>
        <h2 class="HeadingOff">
            Marketing Items
        </h2>
    </div>
    <div class="NavigationDiv">
        <div class="SorterDiv">
            <div class="FiltSortDiv">
                <h3>
                Sorter
                </h3>
                <img src="/ikoner/arrow-down.png" alt="">
                <h3>
                Filtrer
                </h3>
                <img src="/ikoner/arrow-down.png" alt="">
            </div>
        </div>
        <div class="SearchBarDiv">
            <input type="text" placeholder="Søg..." >
            <img src="../../public/ikoner/search.png" alt="">
        </div>
        <div class="TrashDiv">
            <div>
                <p>
                Seneste slettet produkter:
                </p>
                <img src="/ikoner/trash-ikon.svg" alt="">
            </div>
            <button>
                <p>
                Slet valgte produkter
                </p>
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    .HeadingsDiv{
        display: flex;
        flex-direction: row;
        gap: 50px;
        align-items: flex-end;
        width: 90%;
        margin: 50px auto;
        .HeadingOn{
            text-decoration: underline;
            cursor: pointer;
        }
        .HeadingOff{
            font-weight: 400;
            cursor: pointer;
        }
    }

    .NavigationDiv{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        width: 90%;
        margin: auto;
        .SorterDiv{
            display: flex;
            cursor: pointer;
            
            .FiltSortDiv{
                display: flex;
                img{
                height: 25px;
                width: 25px;
                margin-right: 15px;
                }
            }
        }
        .SearchBarDiv{
            display: flex;
            gap: 15px;
            input{
                width: 250px;
            }
            img{
                height: 25px;
                cursor: pointer;
            }
        }

        .TrashDiv{
            display: flex;
            flex-direction: column;
            gap: 25px;
            cursor: pointer;
            div{
                display: flex;
                align-items: center;
                gap: 10px;
            }
            button{
                height: 35px;
                background-color: #c200004f;
                border-style: none;
                border-width: 0px;
                p{
                    color: #ffffff;
                }
            }
            img{
                height: 25px;
                width: 25px;
            }
        }
    }
</style>