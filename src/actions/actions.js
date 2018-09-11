export const loadData=(data)=>{
    return{
        type:'LOAD_DATA',
        data:data,
        isloadData:true
    }
}
export const openModal=(row)=>{
    return{
        type:'OPEN_MODAL',
        isOpenModal:true,
        row:row
    }
}
export const closeModal=()=>{
    return{
        type:'CLOSE_MODAL',
        isOpenModal:false,
    }
}
