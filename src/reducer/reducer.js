const initialState={
  data:[],
  isloadData:false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      
      case 'LOAD_DATA':
        return (
          {
            ...state,
            type: action.type,
            data: action.data,
            isloadData:action.isloadData
          }
        )
        default:
        return state
    }
}
export default reducer;