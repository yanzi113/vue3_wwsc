import { useIntersectionObserver } from '@vueuse/core'
export const lazyPlugin = {
install(app){
app.directive('img-lazy',{
    // el传入的数据对应的标签元素，binding是传递给指令的值v-img-lazy="item.picture" 即src
    // vueuse 
    // target的作用是将其绑定到需要进行可见性观察的DOM元素上，
    // 以便使用useIntersectionObserver函数来监听该元素是否进入视口。
        mounted(el,binding){
            const { stop } = useIntersectionObserver(
                //要观察的是否进入视口的元素
                el,
                ([{ isIntersecting }]) => {
                    // 如果进入视口，则加载，传递给指令的值赋值给src
                    console.log("isIntersecting:",isIntersecting);
                    if(isIntersecting){
                    el.src = binding.value;
                    // 加载一次之后没必要重复加载了
                    stop();
                    }
                },
              )
        }
    }
)
}
}