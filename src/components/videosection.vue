<script setup>
</script>
<template>
    <div class="videosection">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/8-yhd09uDU0?si=QNQ0yk_fa6nPv0hq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p>Unsure how to use the partner site? Learn how to navigate througt the  partner site by watching our guide video.</p>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets/colors' as c;
@use '../assets/headings' as h;
.videosection{
    display: flex;
    flex-direction:column;
    background-color: c.$hover-state-active;
    
    p{
        color: c.$font-color-secondary;
    }
}
</style>