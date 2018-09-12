import React from 'react'
import CanvasJSReact from '../lib/canvasjs.react'
import store from '../index'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class StackedChart extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        CanvasJS.addColorSet('color1',[
            '#7cb5ec',
            '#434348',
            '#90ed7d',
            '#f7a35c',
            '#8085e9'
        ])
        //console.log(store.getState().data.graphList)
        if(store.getState().isloadData){
            for(var i=0;i<10;i++){
                options.data[0].dataPoints.push(
                    {
                        label:store.getState().data.graphList[i].value.toString(),
                        y:store.getState().data.graphList[i].from0to2
                    }
                );
                options.data[1].dataPoints.push(
                    {
                        label:store.getState().data.graphList[i].value.toString(),
                        y:store.getState().data.graphList[i].from2to4
                    }
                );
                options.data[2].dataPoints.push(
                    {
                        label:store.getState().data.graphList[i].value.toString(),
                        y:store.getState().data.graphList[i].from4to6
                    }
                );
                options.data[3].dataPoints.push(
                    {
                        label:store.getState().data.graphList[i].value.toString(),
                        y:store.getState().data.graphList[i].from6to8
                    }
                );
                options.data[4].dataPoints.push(
                    {
                        label:store.getState().data.graphList[i].value.toString(),
                        y:store.getState().data.graphList[i].from8to10
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
export default StackedChart

const options = {
    colorSet:'color1',
    animationEnabled: true,
    exportEnabled: false,
    title: {
        text: "得点分布一覧",
        fontFamily: "Noto Sans Japanese"
    },
    axisY: {
        title: "",
        prefix: "",
        suffix: ""
    },
    toolTip: {
        shared: true,
        reversed: true
    },
    legend: {
        verticalAlign: "center",
        horizontalAlign: "right",
        reversed: true,
        cursor: "pointer",
        itemclick: this.toggleDataSeries
    },
    data: [
    {
        type: "stackedColumn",
        name: ".0～.2",
        showInLegend: true,
        //yValueFormatString: "#,###k",
        dataPoints: []
    },
    {
        type: "stackedColumn",
        name: ".2～.4",
        showInLegend: true,
        //yValueFormatString: "#,###k",
        dataPoints: []
    },
    {
        type: "stackedColumn",
        name: ".4～.6",
        showInLegend: true,
        //yValueFormatString: "#,###k",
        dataPoints: []
    },
    {
        type: "stackedColumn",
        name: ".6～.8",
        showInLegend: true,
        //yValueFormatString: "#,###k",
        dataPoints: []
    },{
        type: "stackedColumn",
        name: ".8～.0",
        showInLegend: true,
        //yValueFormatString: "#,###k",
        dataPoints: []
    }
  ]
}