import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/views/Layout/index.vue";
import Login from "@/views/Login/index.vue";
import Home from "@/views/Home/index.vue";
import Category from "@/views/Category/index.vue";
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'
import PayBack from "@/views/Pay/PayBack.vue";
import Member from '@/views/Member/index.vue'
import UserInfo from '@/views/Member/components/UserInfo.vue'
import UserOrder from '@/views/Member/components/UserOrder.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        // 子路由不用加斜杠
        {
          path: "",
          component: Home,
        },
        {
          // 重构 根据每次传入不同id显示不同的分类的内容
          path: "category/:id",
          component: Category,
        },
        {
          path: 'category/sub/:id',
          component: SubCategory
        },
        {
          path: 'detail/:id',
          component: Detail
        },
        {
          path: 'cartlist',
          component: CartList
        },
        {
          path: 'checkout',
          component: Checkout
        },
        {
          path: 'pay',
          component: Pay
        },
        {
          path: 'paycallback', // 注意路径，必须是paycallback
          component: PayBack
        },
        {
          path: 'member',
          component: Member,
          children: [
            {
              path: '',
              component: UserInfo
            },
            {
              path: 'order',
              component: UserOrder
            }
          ]
        }
      ],
    },
    {
      path: "/login",
      component: Login,
    },
  ],
  // 每次路由变化，滚动条都在之前哪个位置，需要在这里定制路由滚动行为
  scrollBehavior(){
    return{
      top:0
    }
  }
});

export default router;
