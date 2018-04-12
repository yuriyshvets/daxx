<template>
	<div >
	    <v-tabs
	      color="white"
	      dark
	      slider-color="blue darken-2"
	      class="sidebar"
	    >
	      <v-tab
	        class="blue--text "
	        v-for="tab in tabItems"
	        :key="tab.id"
	        ripple
	      >
	        {{tab.title}}
	      </v-tab>
	      <v-tab-item
	        v-for="tab in tabItems"
	        :key="tab.id"
	      >
	        <v-card flat class="grey lighten-4 py-4 px-4">
	          <component :is="tab.component"></component>
	          <p v-if="!tab.component">{{tab.title}} content</p>
	        </v-card>
	      </v-tab-item>
	    </v-tabs>
	  </div>

</template>

<script>
import AssetHealth from './AssetHealth'
  export default {
    components: {
      'asset-health': AssetHealth
    },
    data() {
      return {
        tabItems: [
          {id: 1, title: 'Dashboard', component: ''},
          {id: 2, title: 'Asset health', component: 'asset-health'},
          {id: 3, title: 'Work orders', component: ''},
        ]
      }
    }
  }
</script>
<style>
	.sidebar {
    height: 48px;
  }
</style>