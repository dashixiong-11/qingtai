 import Home from "../pages/Home.vue"
import About from "../pages/About.vue"
import ColdRoom from "../pages/ColdRoom.vue"
import ColdRoomManagement from "../pages/ColdRoomManagement.vue"
export const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/coldroommanagement',
    component: ColdRoomManagement,
    children: [
      {
        // 当访问 /blog/:id 时，BlogPost 将被渲染在 Blog 的 <router-view> 内
        path: ':id',
        component: ColdRoom,
      },
    ],
  }
]