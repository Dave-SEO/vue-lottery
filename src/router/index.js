import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import video from '@/components/video'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'video',
      component: video
    }
  ]
})
