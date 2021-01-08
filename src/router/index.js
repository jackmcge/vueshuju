import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home',
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('@/views/login')
  },
  {
    path:'/home',
    name:'home',
    redirect:'index',
    meta:{title:'首页'},
    component:()=>import('@/layout/index'),
    children:[
      {
        path:'/index',
        name:'index',
        meta:{title:'首页'},
        component:()=>import('@/views/Home/home')
      },
      {
        path:'/input-manager',
        name:'input-manager',
        meta:{title:'申请管理'},
        component:()=>import('@/views/Home/input-manager/index')
      },
      {
        path:'/loan-input',
        name:'loan-input',
        meta:{title:'贷款申请'},
        component:()=>import('@/views/Home/loan-input')
      },
      {
        path:'/shenpi',
        name:'shenpi',
        meta:{title:'贷款审批'},
        component:()=>import('@/views/Home/shenpi'),
        children:[
          {
            path:'first',
            name:'first',
            meta:{title:'初审'},
            component:()=>import('@/views/Home/shenpi/first')
          },
          {
            path:'end',
            name:'end',
            meta:{title:'终审'},
            component:()=>import('@/views/Home/shenpi/end')
          }
        ]
      },
      {
        path:'/biaoli',
        name:'biaoli',
        meta:{title:'标题管理'},
        component:()=>import('@/views/Home/biaoli')
      },
      {
        path:'/quanli',
        name:'quanli',
        meta:{title:'权限管理'},
        component:()=>import('@/views/Home/quanli')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
