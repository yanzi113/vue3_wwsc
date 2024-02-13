import http from '@/utils/http'
export function getBannerAPI (distributionSite='1'){
    return http.get('/home/banner',{params:{distributionSite}})
}
export function getProductsAPI(){
    return http.get('/home/goods')
}
