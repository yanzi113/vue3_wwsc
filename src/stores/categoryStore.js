import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from "@/apis/layout";
export const useCategoryStore = defineStore('category', () => {
// 首先初始化一个数组列表 然后设置一个获得数据的函数 因为用到网络请求所以是异步 
const categoryList = ref([]);
const getCategory = async () =>{
    let res = await getCategoryAPI();
    categoryList.value = res.result;
}
onMounted(()=>{
  getCategory()
})

  return { categoryList, getCategory}
})
