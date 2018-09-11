import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import store from '../index'
import paginationFactory from 'react-bootstrap-table2-paginator';
import {Modal} from 'react-bootstrap'
import { openModal,closeModal } from '../actions/actions';
//import RadarChart from './RadarChart';
//import Radar from './Radar'
import RadarChart2 from './RadarChart2';


const Table=({results})=>{
    if(store.getState().isloadData){
        return(
            <div className='col s12'>
            <BootstrapTable keyField={'artist songTitle'}
            data={ results.data.maxResultList } 
            columns={ columns }
            rowEvents={rowEvents}
            //pagination={ paginationFactory()}
            />
            <Modal 
                show={store.getState().isOpenModal}
                onHide={handleClose}>
                <RadarChart2/>
            </Modal>
            </div>
        )
    }else{
        return(<div>Now Loading...</div>)
    }
    
}
export default Table;
const handleClose=()=>{
    store.dispatch(closeModal())
}

const rowEvents={
    onClick:(e,row,rowIndex)=>{
        store.dispatch(openModal(row));
        console.log(store.getState())
        console.log(row);
        
    }
}
const average3Formatter=(cell, row)=>{
    return(
        <span>
        { cell.toFixed(3) }
      </span>
    )
  }
const dateFormatter=(cell,row)=>{
    var date=new Date();
    date.setTime(cell);
    return (
    <span>
      {date.toLocaleDateString()}
    </span>)
}
const songFormatter=(cell,row)=>{
    return (
    <span>
    {cell}/{row.artist}</span>)
}

const judgePointStyle=(cell,row)=>{
    var cssName;
        if(cell===100){
            cssName='';
        }else if(cell>=99){
            cssName='total_over99'
        }else if(cell>=98 && cell<99){
            cssName='total_over98'
        }else if(cell>=95 && cell<98){
            cssName='total_over95'
        }else if(cell>=90 && cell<95){
            cssName='total_over90'
        }else if(cell>=85 && cell<90){
            cssName='total_over85'
        }else if(cell>=80 && cell<85){
            cssName='total_over80'
        }
        return cssName;
}
const chartTotalFormatter=(cell,row)=>{
    return(<span>
        {row.chInterval
        +row.chRhythm
        +row.chVibrato
        +row.chStability
        +row.chExpress
    }</span>)
}

const columns=[
  {
      dataField: 'date',
      text: '日付',
      classes:'',
      sort:true,
      formatter: dateFormatter,

     
  },
  {
      dataField: 'songTitle',
      text: '曲名/アーティスト',
      classes:'songName',
      sort:true,
      formatter:songFormatter
  },
  {
      dataField: 'score',
      text: '最高点',
      classes:judgePointStyle,
      sort:true,
      formatter:average3Formatter,
  },
  {
    dataField: 'average',
    text: '平均',
    classes:judgePointStyle,
    sort:true,
    formatter:average3Formatter
  },
  {
    //dataField: 'chTotal',
    isDummyField:true,
    text: 'チ計',
    classes:'',
    //sort:true,
    formatter:chartTotalFormatter,
    // sortFunc: (a, b, order, dataField, rowA, rowB) => {
    //     //console.log(row.chInterval)
    //     if (order === 'asc') return a - b;
    //     else return b - a;
    //   }
  },
  {
    dataField: 'chInterval',
    text: '音',
    classes:judgePointStyle,
    sort:true,
   },
   {
    dataField: 'chStability',
    text: '安',
    classes:judgePointStyle,
    sort:true,
   },
   {
    dataField: 'chExpress',
    text: '表',
    classes:judgePointStyle,
    sort:true,
   },
   {
    dataField: 'chRhythm',
    text: 'リ',
    classes:judgePointStyle,
    sort:true,
   },
   {
    dataField: 'chVibrato',
    text: 'VL',
    classes:judgePointStyle,
    sort:true,
   },
   {
    dataField: 'modulation',
    text: '抑',
    classes:'int',
    sort:true,
    headerStyle: {
        maXwidth:'30',
        overflow:'hidden',
        whiteSpace:'nowrap'
      }
   },
   {
    dataField: 'measure',
    text: 'こ',
    classes:'int',
    sort:true,
   },
   {
    dataField: 'sob',
    text: 'し',
    classes:'int',
    sort:true,
   },
   {
    dataField: 'fall',
    text: 'フ',
    classes:'int',
    sort:true,
   },
   {
    dataField: 'longTone',
    text: 'ロ',
    classes:'int',
    sort:true,
   },
   {
    dataField: 'vibrato',
    text: 'ビ',
    classes:'int',
    sort:true,
   },
   {
    dataField: 'vibratoType',
    text: 'ビタ',
    classes:'int',
    sort:true,
   },
   {
    dataField: 'vibratoTime',
    text: '秒',
    classes:'int',
    sort:true,
   },
];