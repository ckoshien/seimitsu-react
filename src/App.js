import React, { Component } from 'react';
import './App.css';
import store from './index'
import { loadData } from './actions/actions';
//import BootstrapTable from 'react-bootstrap-table-next';
import CtrlTable from './container/CtrlTable'

class App extends Component {
  componentDidMount(){
    fetch('data.json')
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
    return(
        <CtrlTable/>
      )
  }

}
export default App;

