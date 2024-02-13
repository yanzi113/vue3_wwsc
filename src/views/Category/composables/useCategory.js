import { useRoute} from "vue-router";
import {getCategoryAPI} from "@/apis/category";
export function useCategory(){
const categoryList = ref([])
const route = useRoute()
// 首先初始化一个数组列表 然后设置一个获得数据的函数 因为用到网络请求所以是异步 
const getCategoryList = async (id) => {
  const { result } = await getCategoryAPI(route.params.id)
  categoryList.value = result
}
onMounted(() => {
  // 分类页根据对应的id刷新不同分类的数据
  getCategoryList(route.params.id)
})
return{
    categoryList
}
}