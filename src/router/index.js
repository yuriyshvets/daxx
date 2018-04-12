import Vue from 'vue'
import Router from 'vue-router'
import PredictiveMaintance from '@/components/PredictiveMaintance'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PredictiveMaintance',
      component: PredictiveMaintance
    }
  ]
})
