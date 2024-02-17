import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { loginAPI } from "@/apis/user";
import { useCartStore } from "@/stores/cartStore";
import { mergeCartAPI } from "@/apis/cart";
export const useUserStore = defineStore(
  "user",
  () => {
    const cartStore = useCartStore();
    // 1. 定义管理用户数据的state
    const userInfo = ref({});
    // 2. 定义获取接口数据的action函数
    const getUserInfo = async (user) => {
      const res = await loginAPI(user);
      userInfo.value = res.result;
      // 合并购物车
      // map()方法遍历购物车列表cartList中的每一项，并将每一项的skuId、selected和count属性组成一个新的对象,最后传入需要的参数调用api
      await mergeCartAPI(
        cartStore.cartList.map((item) => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count,
          };
        })
      );
            // 刷新购物车列表
      cartStore.updateLoginCartList();
    };
    //  退出登录实现：新增清除用户信息action，清除购物车信息
    const clearUserInfo = () => {
      userInfo.value = {};
      cartStore.clearCart();
    };
    // 3. 以对象的格式把state和action return
    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
    };
  },
  {
    persist: true,
  }
);
