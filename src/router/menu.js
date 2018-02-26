const menu = [
{
  path: '/index',
  name: '首页',
  icon: 'ivu-icon ivu-icon-home',
  level: 1,
  sort: 1,
  fixed: false
},
{
  path: '/',
  name: '列表页',
  icon: 'ivu-icon ivu-icon-soup-can',
  level: 0,
  fixed: false,
  children: [
  {
    path: '/list',
    name: '表格',
    level: 1,
    icon:'funnel',
    children: [],
    fixed: false
  }

  ]
}
]

export default menu
