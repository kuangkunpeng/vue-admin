import Home from '@/components/layout/Home'
import Login from '@/components/pages/Login'
import List from '@/components/pages/List'
import Index from '@/components/pages/Index'
import Info from '@/components/pages/Info'
import Add from '@/components/pages/Add'
import Test from '@/components/pages/Test'
const routes = [
{
	path: '/',
	name: '/',
	component: Home,
	redirect: '/index',
  meta: {
    requiresAuth: true ,// 是否需要登录
    name:'首页'
  },
	children: [
	{
		path: '/index',
		name: 'index',
		component: Index,
		meta: {
          requiresAuth: true ,// 是否需要登录
          name:'主页'
        }
	},
	{
		path: '/list',
		name: 'list',
		component: List,
		meta: {
          requiresAuth: true, // 是否需要登录
           name:'列表'
        }
	},
	{
		path: '/info',
		name: 'info',
		component: Info,
		meta: {
          requiresAuth: true, // 是否需要登录
          name:'详情'
        }
	},{
		path: '/add',
		name: 'add',
		component: Add,
		meta: {
          requiresAuth: true, // 是否需要登录
          name:'添加'
        }
	},{
		path: '/test',
		name: 'test',
		component: Test,
		meta: {
          requiresAuth: true // 是否需要登录
        }
	},
	]
},
{
	path:'/login',
	name:'login',
	component:Login
}
]
export default routes
