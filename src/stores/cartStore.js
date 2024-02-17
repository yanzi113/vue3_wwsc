import { defineStore } from "pinia";
import { ref, computed} from "vue";
import { useUserStore } from "@/stores/userStore";
import {
  findNewCartListAPI,
  insertCartAPI,
  delCartAPI,
  updateCartItemAPI,
} from "@/apis/cart";
export const useCartStore = defineStore(
  "cart",
  () => {
    const cartList = ref([]);
    // 计算属性
    // 1.总数量 = 所有项的count之和
    const allCount = computed(() =>
      cartList.value.reduce((a, c) => a + c.count, 0)
    );
    // 2.总价 所有项的count*price之和
    const allPrice = computed(() =>
      cartList.value.reduce((a, c) => a + c.count * c.price, 0)
    );
    // 3.已选择数量
    const selectedCount = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count, 0)
    );
    // 4.已选择商品价钱合计
    const selectedPrice = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count * c.price, 0)
    );
    // 5.接口购物车(登录后)
    const userStore = useUserStore();
    const isLogin = computed(() => userStore.userInfo.token);
    // action
    // 获取更新后的数据
    const updateLoginCartList = async () => {
        const res = await findNewCartListAPI()
        cartList.value.length = 0
        cartList.value.push(...res.result)
        // cartList.value = res.result
      };
    // 添加
    const addCart = async (goods) => {
      //判断商品是否在购物车
      // 在购物车就直接加找到的商品项的数量
      // 不在就向cartList中加入商品
      if (isLogin.value) {
        //登录之后加入购物车逻辑
        // post请求
        await insertCartAPI(goods);
        // get请求
        updateLoginCartList();
      } else {
        //判断商品是否在购物车
        const item = cartList.value.find((item) => goods.skuId === item.skuId);
        if (item) {
          item.count += goods.count;
        } else {
          cartList.value.push(goods);
        }
      }
    };

    // 删除
    const delCart = async (skuId) => {
      if (isLogin.value) {
        // post 操作
        await delCartAPI([skuId]);
        // get 获取新数据
        await updateLoginCartList();
        console.log(cartList.value);
      } else {
        // 思路：
        // 1.找到要删除项的下标值 - splice
        // 2.使用splice删除找到的项，原数组改变
        const idx = cartList.value.findIndex(item => skuId === item.skuId);
        cartList.value.splice(idx, 1);
      }
    };

    // 清除购物车
    const clearCart = () => {
      cartList.value = [];
    };
    // 修改购物车
    const updateCartItem = async (goods) => {
      // 解构出改变时传入的参数
      const { skuId, count, selected } = goods;
      // 如果已登录修改购物车
      if (isLogin.value) {
        await updateCartItemAPI(skuId, { count, selected });
      }
    };
    // 全选
    const checkAll = (selected) => {
      // 把cartList中的每一项的selected都设置为当前的全选框状态
      cartList.value.forEach((item) => (item.selected = selected));
    };
    // 判断是否全选绑定全选框值
    const isAll = computed(() => cartList.value.every((item) => item.selected));

    return {
      allCount,
      allPrice,
      cartList,
      addCart,
      delCart,
      clearCart,
      isAll,
      checkAll,
      selectedCount,
      selectedPrice,
      updateLoginCartList,
      updateCartItem,
    };
  },
  {
    persist: true,
  }
);
