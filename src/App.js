import React, { Component } from 'react';
import './App.css';

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
  }
  render(){
    return(<div></div>)
  }

}

export default App;
