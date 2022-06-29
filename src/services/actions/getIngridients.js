export const getIngridients = ()=>{
    type: "GET_INGRIDIENTS"
}

export const getIngridientsSuccess = (data)=>{
    type: "GET_INGRIDIENTS_SUCCESS"
    data:data
}

export const getIngridientsFailed = ()=>{
    type: "GET_INGRIDIENTS_FAILED"
}


