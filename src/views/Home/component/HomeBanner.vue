<script setup>
import { getBannerAPI } from "@/apis/home";
// 首先初始化一个数组列表 然后设置一个获得数据的函数 因为用到网络请求所以是异步 
const bannerList = ref([]);
const getBanner = async () =>{
    let res = await getBannerAPI();
    bannerList.value = res.result;
}
onMounted(()=>{
  getBanner()
})
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src=item.imgUrl alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang='scss'>
.home-banner {
  width: 1200px;
  height: 500px;
   position: absolute;
   left: 250px;
   top:185px;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>@/apis/home