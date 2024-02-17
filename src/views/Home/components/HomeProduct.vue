<script setup>
import { getCategoryAPI } from "@/apis/layout";
import { getProductsAPI  } from "@/apis/home"
import { onMounted, ref } from 'vue';
import GoodsItem from "./GoodsItem.vue";
import HomePanel from './HomePanel.vue'
const goodsProductList = ref([])
const getGoodsProductList = async () =>{
        // 解构语法
        let { result } = await getProductsAPI()
        goodsProductList.value = result 
        console.log(result); 
}
onMounted(()=>{
        getGoodsProductList()
})
</script>

<template>
        <div class="home-product">
          <HomePanel v-for="item in goodsProductList" :title="item.name"  :key="item.id" >
            <div class="box">
              <RouterLink class="cover" to="/">
                <img v-img-lazy="item.picture" />
                <strong class="label">
                  <span>{{ item.name }}馆</span>
                  <span>{{ item.saleInfo }}</span>
                </strong>
              </RouterLink>
              <ul class="goods-list">
                <li v-for="good in item.goods" :key="good.id">
                 <GoodsItem :good="good"></GoodsItem>
                </li>
              </ul>
            </div>
          </HomePanel>
        </div>
      </template>

<style scoped lang='scss'>
.home-product {
  background: #fff;
  margin-top: 20px;
  margin-left: 100px;
  .sub {
    margin-bottom: 2px;

    a {
      padding: 2px 12px;
      font-size: 16px;
      border-radius: 4px;

      &:hover {
        background: $xtxColor;
        color: #fff;
      }

      &:last-child {
        margin-right: 80px;
      }
    }
  }

  .box {
    display: flex;

    .cover {
      width: 240px;
      height: 590px;
      margin-right: 10px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
      }

      .label {
        width: 188px;
        height: 66px;
        display: flex;
        font-size: 18px;
        color: #fff;
        line-height: 66px;
        font-weight: normal;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);

        span {
          text-align: center;

          &:first-child {
            width: 76px;
            background: rgba(0, 0, 0, 0.9);
          }

          &:last-child {
            flex: 1;
            background: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }

    .goods-list {
      width: 1400px;
      display: flex;
      flex-wrap: wrap;

      li {
        width: 240px;
        height: 300px;
        margin-right: 10px;
        margin-bottom: 10px;

        &:nth-last-child(-n + 4) {
          margin-bottom: 0;
        }

        &:nth-child(4n) {
          margin-right: 0;
        }
      }
    }


  }
}
</style>