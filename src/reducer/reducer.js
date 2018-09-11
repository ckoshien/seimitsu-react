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
      case 'OPEN_MODAL':
        return (
          {
            ...state,
            type: action.type,
            isOpenModal:action.isOpenModal,
            row: action.row
          }
        )
        case 'CLOSE_MODAL':
        return (
          {
            ...state,
            type: action.type,
            isOpenModal:action.isOpenModal,
          }
        )
      default:
        return state
    }
}
export default reducer;