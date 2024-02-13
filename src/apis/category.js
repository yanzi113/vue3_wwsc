import http from '@/utils/http'
export function getCategoryAPI (id){
    return http.get('/category',{params:{id}})
}
// 二级面包屑导航
export function getCategoryFilterAPI(id){
    return http.get('/category/sub/filter',{params:{id}});
    
}
export const getSubCategoryAPI = (data) => {
    return http.post('/category/goods/temporary',data);
}