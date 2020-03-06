import React, { Component } from 'react';
import store from './index'
import { loadData } from './actions/actions';
import { Tab,Tabs } from 'react-bootstrap';
import CtrlTable from './container/CtrlTable'
import CtrlChart from './container/CtrlCharts'
import CtrlLineChart from './container/CtrlLineChart';

class App extends Component {
  componentDidMount(){
    fetch(process.env.PUBLIC_URL+'/data.json')
    .then((response)=>{
      if(response.status===200){
        return response.json();
      }else{
        return null;
      }
    })
    .then((json)=>{
      if(json!=null){
        store.dispatch(loadData(json));
        console.log(store.getState());
      }
    })
  }
  render(){
    console.log(store.getState());
      return(
        <div>
          <Tabs>
            <Tab title={'結果'} eventKey={0}>
              <CtrlTable/>
            </Tab>
            <Tab title={'点数分布'} eventKey={1}>
              <CtrlChart/>
            </Tab>
            <Tab title={'成績推移'} eventKey={2}>
              <CtrlLineChart/>
            </Tab>
          </Tabs>
        </div> 
      )
   
  }

}
export default App;

