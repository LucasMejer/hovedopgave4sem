<script setup>
import iconMaster from'../assets/icons/masterdata-green.svg'
import iconMedia from'../assets/icons/mediafile-yellow.svg'
import iconPrice from'../assets/icons/pricelist-green.svg'

const cards =[
    {title:'Master data',
    icon: iconMaster,
    bodytext:'Find master data for all available SCANGRIP products.',
    button: 'download',
    },
    {title:'Media file',
    icon: iconMedia,
    bodytext:'Find master data for all available SCANGRIP products.',
    button: 'download',
    },
    {title:'Price list',
    icon: iconPrice, 
    bodytext:'Find master data for all available SCANGRIP products.',
    button: 'download',
    }
]
</script>
<template>
    <div v-for="card in cards" :key="card.title">
        <svg>{{ card.svg }}</svg>
        <h2>{{ card.title }}</h2>
        <p>{{ card.bodytext }}</p>
        <button>{{ card.button }}</button>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/colors' as c;
</style>