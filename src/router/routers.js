import Home from '@/components/layout/Home'
import Login from '@/components/pages/Login'
import List from '@/components/pages/List'
import Index from '@/components/pages/Index'
const routes = [
{
	path: '/',
	name: 'home',
	component: Home,
	redirect: '/index',
	children: [
	{ 
		path: '/index',
		name: 'index',
		component: Index,
		meta: {
          requiresAuth: true // 是否需要登录
        }
	},
	{ 
		path: '/list',
		name: 'list',
		component: List,
		meta: {
          requiresAuth: true // 是否需要登录
        }
	}
	]
},
{
	path:'/login',
	name:'login',
	component:Login
}
]
export default routes