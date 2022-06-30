import { getIngridientsData } from "../../utils/burger-api"
import { url } from "../../utils/constants"




function getIngridientsSuccess(data) {
    return {
        type: "GET_INGRIDIENTS_SUCCESS",
        data: data
    }
}


export const getIngridients = () => {
    return function (dispatch) {
        dispatch({
            type: "GET_INGRIDIENTS"
        })
        getIngridientsData(url).then(res => {
            return res.json()
        }).then(res => {
            dispatch(getIngridientsSuccess(res.data))
        }).catch(err => {
            console.log(err)
            dispatch({
                type: "GET_INGRIDIENTS_FAILED"
            })
        })

    }
}


