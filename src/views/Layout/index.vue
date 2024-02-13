<template>
<div>
  <LayoutFixed></LayoutFixed>
  <LayoutNav></LayoutNav>
  <LayoutHeader></LayoutHeader>
  <RouterView :key="$route.fullPath"/>
  <LayoutFooter></LayoutFooter>
  </div>
</template>

<script setup>
import LayoutNav from "@/views/Layout/components/LayoutNav.vue";
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue";
import LayoutFooter from "@/views/Layout/components/LayoutFooter.vue";
import LayoutFixed  from "@/views/Layout/components/LayoutFixed.vue";
</script>

<style lang="scss" scoped>
</style>