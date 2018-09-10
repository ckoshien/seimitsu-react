import {connect} from 'react-redux'
import Table from '../components/Table';
import LineChart from '../components/LineChart';

const getStore=(results)=>{
  return results;
}

const mapStateToProps = state => ({
    results: getStore(state)
  })
  
const mapDispatchToProps = (dispatch) => 
    ({ 
        
    })
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LineChart)