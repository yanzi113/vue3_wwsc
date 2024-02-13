import http from '@/utils/http'
export function getCategoryAPI (){
    return http.get('/home/category/head')
}
// 获取新鲜好物数据

export function getNewAPI(){
    return http.get('/home/new')
}

// 人气推荐

export function getHotAPI(){
    return http.get('/home/hot')
}