import React from 'react';
import {Bar} from 'react-chartjs-2';
import store from '../index'

const data = {
  labels: [
    '88','89','90','91','92','93','94','95','96','97',
  ],
  datasets: [
    {
      label: '.0~.2',
      //fill: false,
      //lineTension: 0,
      backgroundColor: '#7cb5ec',
      data: [],
    },
    {
      label: '.2~.4',
      fill: false,
      lineTension: 0,
      backgroundColor: '#434348',
      data: [],
    },
    {
      label: '.4~.6',
      fill: false,
      lineTension: 0,
      backgroundColor: '#90ed7d',
      data: [],
    },
    {
      label: '.6~.8',
      fill: false,
      lineTension: 0,
      backgroundColor: '#f7a35c',
      data: [],
    },
    {
      label: '.8~.0',
      fill: false,
      lineTension: 0,
      backgroundColor: '#8085e9',
      data: [],
    }
  ]
};

const options={
  // title:{
  //   display:true,
  //   position:'bottom',
  //   text:{}
  // },
  maintainAspectRatio: true,
  //responsive:false,
  legend:{
    display:true
  },
  tooltips:{
      //position: position,
      mode: 'index',
      intersect: false,
  },
  plugins:{
    //https://chartjs-plugin-datalabels.netlify.com/options.html
    datalabels:{
      display:false,
      color:'gray',
      font:{
        size:16
      }
    }
  },
  
  scales: {
    xAxes: [{
      stacked:true,
      // ticks:{
      //   autoSkip:false
      // }
    }],
    yAxes:[{
      stacked:true,
      // ticks:{
      //   min:0,
      //   //max:100
      // }
    }]
  }
}

class AverageDistChart extends React.Component{

  render() {
    if (store.getState().isloadData) {
      if(data.datasets[0].data.length === 0 ){
        for (var i = 0; i < 10; i++) {
          data.datasets[0].data.push(
            store.getState().data.graphList[i].from0to2
          );
        }
      }
      if(data.datasets[1].data.length === 0 ){
        for (var i = 0; i < 10; i++) {
          data.datasets[1].data.push(
            store.getState().data.graphList[i].from2to4
          );
        }
      }
      if(data.datasets[2].data.length === 0 ){
        for (var i = 0; i < 10; i++) {
          data.datasets[2].data.push(
            store.getState().data.graphList[i].from4to6
          );
        }
      }
      if(data.datasets[3].data.length === 0 ){
        for (var i = 0; i < 10; i++) {
          data.datasets[3].data.push(
            store.getState().data.graphList[i].from6to8
          );
        }
      }
      if(data.datasets[4].data.length === 0 ){
        for (var i = 0; i < 10; i++) {
          data.datasets[4].data.push(
            store.getState().data.graphList[i].from8to10
          );
        }
      }
    }
    console.log(data.datasets)
    return (
      <div>
        <Bar data={data} height={300} width={300} options={options}/>
      </div>
    );
  }
}
export default AverageDistChart