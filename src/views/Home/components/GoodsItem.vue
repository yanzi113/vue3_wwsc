<script setup>
defineProps({
    good: {
        type: Object,
        default: () => { },
    }
})
</script>

<template>
    
    <RouterLink :to="`/detail/${good.id}`" class="goods-item">
        <img v-img-lazy="good.picture" alt="" />
        <p class="name ellipsis">{{ good.name }}</p>
        <p class="desc ellipsis">{{ good.desc }}</p>
        <p class="price">&yen;{{ good.price }}</p>
    </RouterLink>
    <!-- 因为目前在引用插槽（子组件）并没有需要插入的内容，所以，不需要在插槽里写slot标签 -->
    <!-- <slot></slot> -->
</template>

<style lang="scss" scoped>
.goods-item {
  display: block;
  width: 230px;
  padding: 20px 30px;
  text-align: center;
  transition: all .5s;

  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
  }

  img {
    width: 160px;
    height: 160px;
  }

  p {
    padding-top: 10px;
  }

  .name {
    font-size: 16px;
  }

  .desc {
    color: #999;
    height: 29px;
  }

  .price {
    color: $priceColor;
    font-size: 20px;
  }
}
</style>