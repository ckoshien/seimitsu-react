import React from 'react'
import store from '../index'
import RadarChart2 from '../components/RadarChart2'

class ModalContents extends React.Component{
    render(){
        if(store.getState().isOpenModal){
            return(
                <div
                    style={{
                        padding:5
                    }}
                >
                {store.getState().row.requestNo}
                <div
                    style={{
                        fontWeight:'bold'
                    }}
                >
                {store.getState().row.artist}
                <br/>{store.getState().row.songTitle}
                </div>
                <span className="score">{store.getState().row.score}</span>点
                <br/><span className="average">自己歌唱平均：{store.getState().row.average.toFixed(3)}点</span>
                <RadarChart2/>
                <table className="tableInModal">
                    <tbody>
                    <tr>
                        <td>安定性：<span className="circle">{store.getState().row.stability}</span></td>
                        <td>
                            ロングトーン：<span className="circle">{store.getState().row.longTone}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            抑揚：<span className="circle">{store.getState().row.modulation}</span>
                            <br/>しゃくり:<span className="circle">{store.getState().row.measure}</span>
                            <br/>こぶし:<span className="circle">{store.getState().row.sob}</span>
                            <br/>フォール:<span className="circle">{store.getState().row.fall}</span>
                            </td>
                            <td>
                                ビブラートタイプ<span className="circle">{store.getState().row.vibratoType}</span>
                                <br/>長さ:<span className="circle">{store.getState().row.vibrato}</span>秒
                            </td>
                    </tr>
                    <tr>
                        <td>リズム<span className="circle">{store.getState().row.rhythm}</span></td>
                        <td>音域<span className="circle">{store.getState().row.lowPitch}～{store.getState().row.highPitch}</span></td>
                    </tr>
                    </tbody>
                </table>
                </div>
            )
        }else{
            return(<div></div>)
        }
    }
}
export default ModalContents

const circle=(number)=>{
    switch(number){
        case 1:
            return('🌗🌑🌑🌑🌑1')
        case 2:
            return('🌗🌑🌑🌑🌑2')
        case 3:
            return('🌑🌑🌑🌑🌗3')
        case 4:
            return('🌑🌑🌕🌕🌕4')
        case 5:
            return('🌕🌕🌕🌕🌗5')
        case 6:
            return('🌕🌕🌕🌕🌗6')
        case 7:
            return('🌕🌕🌕🌕🌗7')
        case 8:
            return('🌕🌕🌕🌕🌗8')
        case 9:
            return('🌕🌕🌕🌕🌗9')
        case 10:
            return('🌕🌕🌕🌕🌕10')

    }
    
}