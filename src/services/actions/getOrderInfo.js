import { getOrderInfo } from "../../utils/burger-api"
import { orderUrl } from "../../utils/constants"
import openOrderForm from "../actions/openOrderForm"
import { GET_ORDER_SUCCESS } from "../../utils/constants"
import { GET_ORDER } from "../../utils/constants"
import { GET_ORDER_FAILED } from "../../utils/constants"

function getOrderSuccess(data) {
    return {
        type: GET_ORDER_SUCCESS,
        data: data
    }
}

export const getOrderData = (ingridients) => {
    return function (dispatch) {
        dispatch({
            type: GET_ORDER
        })
        getOrderInfo(orderUrl,ingridients).then(res => {
            return res.json()
        }).then(res => {
            dispatch(getOrderSuccess(res))
            dispatch(openOrderForm(true))
        }).catch(err => {
            console.log(err)
            dispatch({
                type: GET_ORDER_FAILED
            })
        })

    }
}