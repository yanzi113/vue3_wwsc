<script setup>
import HomeBanner from "@/views/Home/components/HomeBanner.vue";
import HomeCategory from "./components/HomeCategory.vue";
import HomeHot from "./components/HomeHot.vue";
import HomeNew from "./components/HomeNew.vue";
import HomeProduct from "./components/HomeProduct.vue";
</script>

<template>
    <div>
        <HomeCategory></HomeCategory>
        <HomeBanner></HomeBanner>
    </div>
    <div>
        <HomeNew></HomeNew>
        <HomeHot></HomeHot>
        <HomeProduct></HomeProduct>
    </div>
</template>

<style lang="scss" scoped>

</style>