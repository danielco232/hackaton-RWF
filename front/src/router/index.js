import Vue from 'vue'
import Router from 'vue-router'
import Chat from '@/components/Chat/Chat'
import HomePage from '@/views/HomePage'
import auth from './middleware/auth'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/views/Home').default
    },
    {
      path: '/login',
      name: 'login',
      component: require('@/views/Login').default
    },
    {
      path: '/signin',
      name: 'signin',
      component: require('@/views/Signin').default
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: require('@/views/Dashboard').default,
      meta: {
        middleware: [auth],
      }
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
    },
    {
      path: '/homepage',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/match',
      name: 'Match',
      component: require('@/views/Match').default
    },
    {
      path: '/info',
      name: 'Info',
      component: require('@/views/Info').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = to.meta.middleware
    const funcChaine = []
    for (let i = middleware.length - 1; i >= 0; i--) {
      funcChaine[i] = () => middleware[i]({
        from,
        next: i !== (middleware.length - 1) ? funcChaine[i+1] : next,
        router,
        to
      })
    }
    funcChaine[0]()
  } else {
    next()
  }
})

export default router