<script setup>
</script>
<template>
    <div class="smallindexcardsection">
        <div class="smallindexcard">
            <img src="/public/ikoner/index-salesguide-ikon.svg" alt="">
            <p>Sales Guide</p>
        </div>
        <div class="smallindexcard">
            <img src="/ikoner/index-campaignmaterial-ikon.svg" alt="">
            <p>Campaignmaterial</p>
        </div>
        <div class="smallindexcard">
            <img src="/ikoner/index-videos-ikon.png" alt="">
            <p>Videos</p>
        </div>
        <div class="smallindexcard">
            <img src="/ikoner/index-pointofsales-ikon.svg" alt="">
            <p>POS-materials</p>
        </div>
        <div class="smallindexcard">
            <img src="/public/ikoner/index-brand-ikon.svg" alt="">
            <P>Branding</P>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.smallindexcardsection{
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 5% auto;
}

.smallindexcard{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

}
</style>