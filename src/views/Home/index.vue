<script setup>
import HomeBanner from "@/views/Home/component/HomeBanner.vue";
import HomeCategory from "./component/HomeCategory.vue";
import HomeHot from "./component/HomeHot.vue";
import HomeNew from "./component/HomeNew.vue";
import HomeProduct from "./component/HomeProduct.vue";
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