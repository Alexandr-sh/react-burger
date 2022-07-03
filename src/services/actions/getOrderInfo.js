import { getOrderInfo } from "../../utils/burger-api"
import { orderUrl } from "../../utils/constants"

function getOrderSuccess(data) {
    return {
        type: "GET_ORDER_SUCCESS",
        data: data
    }
}

export const getOrderData = (ingridients) => {
    return function (dispatch) {
        dispatch({
            type: "GET_ORDER"
        })
        console.log(ingridients)
        getOrderInfo(orderUrl,ingridients).then(res => {
            return res.json()
        }).then(res => {
            console.log(res)
            dispatch(getOrderSuccess(res.data))
        }).catch(err => {
            console.log(err)
            dispatch({
                type: "GET_ORDER_FAILED"
            })
        })

    }
}