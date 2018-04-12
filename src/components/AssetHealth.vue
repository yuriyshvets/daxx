<template>
	<div class="white asset">
		<v-toolbar flat dark color="primary" class="blue">

	    <v-toolbar-title class="white--text">Asset Overview</v-toolbar-title>

	    <v-btn icon>
        <v-icon>arrow_forward</v-icon>
      </v-btn>

      <v-toolbar-title class="white--text">Master station 1-1</v-toolbar-title>

	    <v-spacer></v-spacer>

	    <v-btn icon>
	      <v-icon>place</v-icon>
	    </v-btn>

	  </v-toolbar>

  	<v-tabs
      color="white"
      dark
      slider-color="blue darken-2"
      class="dont-move"
    >
      <v-tab
        class="blue--text"
        v-for='item in assetItems'
        :key="item.id"
        ripple
      >
        {{item.title}}
      </v-tab>
      
      <v-tab-item
        v-for='item in assetItems'
        :key="item.id"
      >
      	<v-divider class="grey lighten-2"></v-divider>
        <v-card flat>
          <component :is="item.component"></component>
          <p v-if="!item.component">{{item.title}} content</p>
        </v-card>

      </v-tab-item>
      
    </v-tabs>
	</div>
</template>

<script>

  import TorqueProfile from './TorqueProfile'

	export default {
		components: {TorqueProfile},
		data() {
			return {
				assetItems: [
					{id: 1, title: 'Events', component: ''},
					{id: 2, title: 'Position', component: ''},
					{id: 3, title: 'Travel time', component: ''},
					{id: 4, title: 'Torque profile', component: 'TorqueProfile'},
					{id: 5, title: 'Work orders', component: ''},
					{id: 6, title: 'Alarm Analytics', component: ''},
				]
			}
		}
	}

</script>
<style>
	.asset {
		border: 1px solid #e0e0e0 !important;
	}
	.dont-move .tabs__container {
		transform: translateX(0) !important;
	}
</style>