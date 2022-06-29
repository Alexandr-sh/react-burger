import { getIngridientsData } from "../../utils/burger-api"
import { url } from "../../utils/constants"


export const getIngridientsSuccess = (data) => {
    type: "GET_INGRIDIENTS_SUCCESS"
    data: data
}


export const getIngridients = () => {
    return function (dispatch) {
        dispatch({
            type: "GET_INGRIDIENTS"
        })
        getIngridientsData(url).then( res =>{
            res.json()
        }).then(res =>{
            console.log(res)
            dispatch(getIngridientsSuccess([]))
        }).catch(err => {
            console.log(err)
            dispatch({
                type:"GET_INGRIDIENTS_FAILED"
            })
        })

    }
}


