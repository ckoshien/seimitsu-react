export const loadData=(data)=>{
    return{
        type:'LOAD_DATA',
        data:data,
        isloadData:true
    }
}
export const switchModal=(boolean)=>{
    return{
        type:'OPEN_MODAL',
        isOpenModal:boolean
    }
}
