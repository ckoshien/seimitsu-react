import React from 'react';
import {Radar} from 'react-chartjs-2'
import store from '..';

const options={
  scale:{
    ticks:{
      //beginAtZero:true,
      min:0,
      max:100
    }
  },
}

const data = {
  labels: ['音程', '安定性', '表現', 'リズム','V&L'],
  datasets: [
    {
      label: '',
      backgroundColor: 'rgba(255,0,0,0.5)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: []
    }
  ]
};

class RadarChart2 extends React.Component{

  render() {
    if(store.getState().isOpenModal){
      data.datasets[0].data=[]
      //data.datasets[0].label=store.getState().row.artist+'/'+store.getState().row.songTitle
      data.datasets[0].data.push(store.getState().row.chInterval)
      data.datasets[0].data.push(store.getState().row.chStability)
      data.datasets[0].data.push(store.getState().row.chExpress)
      data.datasets[0].data.push(store.getState().row.chRhythm)
      data.datasets[0].data.push(store.getState().row.chVibrato)
    }
    return (
      <div>
        {store.getState().row.artist}/{store.getState().row.songTitle}
        <br/>
        {store.getState().row.score}点
        <Radar data={data} options={options}/>
      </div>
    );
  }
};
export default RadarChart2