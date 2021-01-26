import React from 'react'
import { Redirect } from 'react-router-dom'

const Home = React.lazy(_ => import("../pages/home"));
const about = React.lazy(_ => import("../pages/about"));


// discover子路由
const HomeCpage1 = React.lazy(_ => import("../pages/home/c-pages/home-c-Page1"));
const HomeCpage2 = React.lazy(_ => import("@/pages/home/c-pages/home-c-Page2"));


const routes = [
  {
    path: '/',
    exact: true,
    // 重定向
    render: () => (
      <Redirect to="/home" />
    )
  },
  {
    path: '/home',
    component: Home,
    routes: [
      {
        path: '/home',
        exact: true,
        component: Home,
        render: () => (
          <Redirect to="/home/HomeCpage1" />
        )
      },
      {
        path: "/home/HomeCpage1",
        exact: true,
        component: HomeCpage1
      },
      {
        path: "/home/HomeCpage2",
        exact: true,
        component: HomeCpage2
      }
    ]
  },
  {
    path: '/about',
    component: about,
    exact: true,
  }
];

export default routes