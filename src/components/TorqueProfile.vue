<template>

	<div class="mx-5">

		<div class="chart-item mb-2">
	    <h2 class="chart-title">{{directions.open}}</h2>
	    <chart-js v-if="showChart" height="120" :direction="directions.open" :response="response"></chart-js>
	  </div>

	  <v-divider class="grey lighten-2"></v-divider>

	  <div class="chart-item pt-4">
	    <h2>{{directions.close}}</h2>
	    <chart-js v-if="showChart" height="120" :direction="directions.close" :response="response"></chart-js>
	  </div>

	</div>

</template>

<script>

	import axios from 'axios';
  import Chart from './Chart';

  export default {
  	components: {'chart-js': Chart,},
  	data () {
      return {
        response: null,
        directions: {open: 'Open', close: 'Close'},
        showChart: false,
      }
    },
    mounted() {
      axios.get(`http://wb-predictivemaintenance-api.prsp7vkew2.eu-central-1.elasticbeanstalk.com/api/TorqueValues`)
      .then(response => {
        this.response = response.data;
        this.showChart = true;
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }

</script>