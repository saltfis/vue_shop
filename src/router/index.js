import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/login'
import Home from '@/components/home'


Vue.use(VueRouter)

const router = new VueRouter({
        routes: [
            //若哈希值为/，重定向到login组件
            { path: '/', redirect: '/login' },
            { path: '/login', component: Login },
            { path: '/home', component: Home }


        ]
    })
    // 设置路由导航守卫，三个参数to,from,next。to表示将要访问的路径；from表示从哪个地址跳转而来；next是一个函数，表示放行。

router.beforeEach((to, from, next) => {
        // 如果跳转登录页，那么直接放行
        if (to.path === '/login') return next()
            // 如果不是跳转登录页，那么需要查看存放在sessionstorge中的token令牌，如果有令牌，则放行；如果没有令牌，则强制跳转到登录页面
        const tokenStr = window.sessionStorage.getItem('token')
        if (!tokenStr) return next('/login')
        next();

    })
    // 将路由暴露出来
export default router