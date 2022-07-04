import { getOrderInfo } from "../../utils/burger-api"
import openOrderForm from "../actions/openOrderForm"
import { GET_ORDER_SUCCESS } from "../../utils/constants"
import { GET_ORDER } from "../../utils/constants"
import { GET_ORDER_FAILED } from "../../utils/constants"
import { baseUrl } from "../../utils/constants"

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
        getOrderInfo(`${baseUrl}/orders`,ingridients).then(res => {
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