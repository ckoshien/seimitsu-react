import React from 'react'
import CanvasJSReact from '../lib/canvasjs.react'
import store from '..'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class LineChart extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        CanvasJS.addColorSet('color2',[
            '#7cb5ec',
            '#434348',
            '#90ed7d',
            '#f7a35c',
            '#8085e9',
            '#f15c80'
        ])
        //console.log(store.getState().data.graphList)
        if(store.getState().isloadData){
            for(var i=0;i<store.getState().data.resultList.length;i++){
                options.data[0].dataPoints.push(
                    {
                        label:store.getState().data.resultList[i].date,
                        y:store.getState().data.resultList[i].score
                    }
                );
                options.data[1].dataPoints.push(
                    {
                        label:store.getState().data.resultList[i].date,
                        y:store.getState().data.resultList[i].chExpress
                    }
                );
                options.data[2].dataPoints.push(
                    {
                        label:store.getState().data.resultList[i].date,
                        y:store.getState().data.resultList[i].chRhythm
                    }
                );
                options.data[3].dataPoints.push(
                    {
                        label:store.getState().data.resultList[i].date,
                        y:store.getState().data.resultList[i].chInterval
                    }
                );
                options.data[4].dataPoints.push(
                    {
                        label:store.getState().data.resultList[i].date,
                        y:store.getState().data.resultList[i].chStability
                    }
                );
                options.data[5].dataPoints.push(
                    {
                        label:store.getState().data.resultList[i].date,
                        y:store.getState().data.resultList[i].chVibrato
                    }
                );
            }
            
            return(
             <div>
                    <CanvasJSChart options = {options}
			        	 onRef={ref => this.chart = ref}
			        />
                </div>
            )
        }else{
            return(<div></div>)
        }
    }
}
export default LineChart

const options = {
    colorSet:'color2',
    animationEnabled: true,
    exportEnabled: false,
    title: {
        text: "得点推移",
        fontFamily: "Noto Sans Japanese"
    },
    axisY: {
        title: "",
        prefix: "",
        suffix: "",
        includeZero: false
    },
    toolTip: {
        shared: true,
        //reversed: true
    },
    legend: {
        verticalAlign: "center",
        horizontalAlign: "right",
        //reversed: true,
        cursor: "pointer",
        //itemclick: this.toggleDataSeries
    },
    data: [
    {
        type: "line",
        name: "得点",
        showInLegend: true,
        //yValueFormatString: "#,###k",
        dataPoints: []
    },
    {
        type: "line",
        name: "表現",
        showInLegend: true,
        //yValueFormatString: "#,###k",
        dataPoints: []
    },
    {
        type: "line",
        name: "リズム",
        showInLegend: true,
        //yValueFormatString: "#,###k",
        dataPoints: []
    },
    {
        type: "line",
        name: "音程",
        showInLegend: true,
        //yValueFormatString: "#,###k",
        dataPoints: []
    },{
        type: "line",
        name: "安定性",
        showInLegend: true,
        //yValueFormatString: "#,###k",
        dataPoints: []
    },
    {
        type: "line",
        name: "ビブラート",
        showInLegend: true,
        //yValueFormatString: "#,###k",
        dataPoints: []
    }
  ]
}