import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import routes from './routers'
import Cookies from 'js-cookie'


Vue.use(Router)
const router = new Router({
	scrollBehavior: () => ({y: 0}),
	routes
})
router.beforeEach((to, from, next) => {
	if(to.matched.some((item,index)=>item.meta.requiresAuth)){
		if(Cookies.get('user')){
			next()
		}
		else{
			next({
				path:'/login'	
			})
		}
	}else{
		next();
	}
	
})

export default router
