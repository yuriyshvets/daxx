<script>
  // import axios from 'axios';
  import { Bar } from 'vue-chartjs'

  export default {
    data() {
      return {
        labels: [],
        datasets: [
        ]
      }  
    },
    computed: {
      maxValue() {
        
        var maxValues = [];

        function getMax(arr) {
          let max = 0;
          for (let i = 0; i < arr.length; ++i) {
            if (arr[i] > max) max = arr[i];
          }
          
          return max;
        }

        this.datasets.forEach(function(item){
            maxValues.push(getMax(item.data));
        });
        
        console.log(getMax(maxValues));
        return getMax(maxValues);
      }
    },
    props: ['height', 'direction', 'response'],
    extends: Bar,
    mounted () {
      let labelsPoints = {
        first: 0,
        last: 0
      };
      if (this.direction == 'Open') {
        labelsPoints.first = 0;
        labelsPoints.last = 99;
      } else {
        labelsPoints.first = 1;
        labelsPoints.last = 100;
      }

      for (labelsPoints.first; labelsPoints.first <= labelsPoints.last; labelsPoints.first++) {
        this.labels.push(labelsPoints.first);
      }

      const filterProfile = this.response.filter(profile => profile.Profile == 2);

      var filterProfileDirection = filterProfile.filter(profile => profile.Direction == this.direction);

      const filterLength = filterProfileDirection.length / 100;

      for (var i = 1; i <= filterLength; i++) {
        let dataset = filterProfileDirection.splice(0, 100);

        let datasetAverages = [];
        let datasetLasts = [];
        dataset.map((item) => {datasetAverages.push(item.AverageTorque)});
        dataset.map((item) => {datasetLasts.push(item.LastTorque)});
        var yAxisID = 'bar-y-axis-' + i;

        this.datasets.push(
          {
            label: 'Average open torque',
            backgroundColor: 'rgba(1, 90, 145, 0.7)',
            data: datasetAverages,
            stack: 'Average',
            yAxisID: yAxisID,
          },
          {
            label: 'Last open torque',
            backgroundColor: 'rgba(139, 177, 229, 0.7)',
            data: datasetLasts,
            stack: 'Last',
            yAxisID: yAxisID,
          }
        );
      }

        this.renderChart(
        { labels: this.labels,
          datasets: this.datasets,
        },
        {legend: {
            display: true,
            onClick: function(e, legendItem) {
              var index = legendItem.datasetIndex;

                  let ci = this.chart;
                  console.log(ci.getDatasetMeta(index));
                  let currentLabel = ci.getDatasetMeta(index);
                  let labels = ci.chart.data.datasets.filter((item) => item.stack == currentLabel.stack);
                    console.log(labels);
                  labels.forEach(function(meta) {
                      meta.hidden = !meta.hidden;
                  });
                  ci.update();
            },
            labels: {
              boxWidth: 10,
              usePointStyle: true,
              pointStyle: 'circle',
              filter: function(legendItem, chartData) {
                //console.log(chartData.datasets);
                 if(legendItem.datasetIndex < 2 ) return true ;
                 //console.log(chartData.datasets[legendItem.datasetIndex].stack);
                // return true or false based on legendItem's datasetIndex (legendItem.datasetIndex)
              }
            }
            
        },
          scales: {
            xAxes: [{
              display: true,
              //id: "bar-x-axis-2",
              //type: 'category',
              //autoSkip: true,
              //autoSkipPadding: 35,
              barPercentage: 1,
              categoryPercentage: 1,
              //stacked: true,
              //type: 'linear',
              //type : 'value',
              scaleLabel: {
                display: true,
                labelString: 'Valve position'
              },
              // labels: [0,'15','30'],
              //splitNumber: 2,
              ticks: {
                //max: 100,
                //min: 0,
                //stepSize: 10,
                //maxTicksLimit: 11,
                maxRotation: 0,
                
                autoSkip: true,
                beginAtZero: true,
                // fontColor: 'red'
                // callback(ticks) {
                //  //ticks.ticks = ticks.ticks.map(function(i){
                //     if(ticks % 10 == 0 || ticks == 99) {
                //       return ticks;
                //     } else return '';
                //   //});
                // }
              },
              gridLines: {
                //tickMarkLength: 50
                // lineWidth: 50,
                // borderDashOffset: 50,
                // drawOnChartArea: false

              },
              afterBuildTicks: function(ticks) { 
                console.log(ticks.ticks);
                //humdaysChart.ticks = [];

                // ticks.ticks = ticks.ticks.map(function(i){
                //   if(i % 10 == 0 || i == 99) {
                //     return i;
                //   } else return '';
                // });

                console.log(ticks.ticks);
                //humdaysChart.ticks.push(99);

                //let countTicks = 0;
                // if (this.direction == 'Open') {
                //   countTicks = 99;
                // } else {
                //   countTicks = 100;
                // }
              // for (let i = 0; i <= 99; i++) {
              //   if(i % 10 == 0) {
              //     humdaysChart.ticks.push(i);
              //   } else {
              //     humdaysChart.ticks.push('');
              //     //if (i==99) humdaysChart.ticks.push(countTicks)
              //   }
                
              //}   
            //if (this.direction == 'Open') ;
            // humdaysChart.ticks = [];
            // humdaysChart.ticks.push(0);
            // humdaysChart.ticks.push('');
            // humdaysChart.ticks.push(50);
            // humdaysChart.ticks.push(100);    
          }
            }],
            yAxes: [{
              id: "bar-y-axis-1",
              display: true,
              //stacked: true,
              autoSkip: true,
              scaleLabel: {
                display: true,
                labelString: 'Required torque, (%)'
              },
              ticks: {
                max: this.maxValue,
                stepSize: 5,

              },
            },
            {
              id: "bar-y-axis-2",
              stacked: true,
              display: false,
              ticks: {
                max: this.maxValue,
              },
              type: 'linear',
              gridLines: {
                // drawOnChartArea: false
              }
            }
            ]
          },
                  
        }
        )

      // Overwriting base render method with actual data.
      
    },
  }

</script>
