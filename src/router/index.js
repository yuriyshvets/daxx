import Vue from 'vue'
import Router from 'vue-router'
import PredictiveMaintenance from '@/components/PredictiveMaintenance'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PredictiveMaintenance',
      component: PredictiveMaintenance
    }
  ]
})
