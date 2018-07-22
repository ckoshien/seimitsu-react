import {connect} from 'react-redux'
import Table from '../components/Table';

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
  )(Table)