import { getOrderInfo } from "../../utils/burger-api"
import { orderUrl } from "../../utils/constants"
import openOrderForm from "../actions/openOrderForm"

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
        getOrderInfo(orderUrl,ingridients).then(res => {
            return res.json()
        }).then(res => {
            dispatch(getOrderSuccess(res))
            dispatch(openOrderForm(true))
        }).catch(err => {
            console.log(err)
            dispatch({
                type: "GET_ORDER_FAILED"
            })
        })

    }
}