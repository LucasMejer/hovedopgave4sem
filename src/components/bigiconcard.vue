<script setup>
const cards =[
    {title:'prodctitle', items:
        ['svg', 'bodytext', 'button']}
]
</script>
<template>
    <div v-for="card in cards" :key="defaultServerConditions.title">
        <h2>{{ card.title }}</h2>
    </div>
    <div>
        <p>virker dette?</p>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/colors' as c;
</style>