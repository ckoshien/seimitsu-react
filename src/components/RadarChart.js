import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts'
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsExporting from 'highcharts/modules/exporting';

HighchartsMore(ReactHighcharts.Highcharts);
HighchartsExporting(ReactHighcharts.Highcharts)
//let state;

class RadarChart extends Component {
    state={
      config: {
        chart: {
          polar: true,
          //type:'line'
        },
        title: {
          text: 'Highcharts-more'
        },
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          tickmarkPlacement: 'on',
          lineWidth: 0
        },
        yAxis: {
          gridLineInterpolation: 'polygon',
          lineWidth: 0,
          min: 0
      },
        series: [{
          data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4],
          pointPlacement: 'on'
        }]
      }
    }

  render() {
    console.log('graph')
    const { config } = this.state;
    return <ReactHighcharts config={config} />
  }
}

export default RadarChart
