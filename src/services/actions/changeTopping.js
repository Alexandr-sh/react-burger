import { ADD_TOPPING } from "../../utils/constants"
import { REMOVE_TOPPING } from "../../utils/constants"
import { UPDATE_TOPPING } from "../../utils/constants"

export function addTopping(data){
    return {type: ADD_TOPPING,
    data: data}
}

export function removeTopping(data){
    return {type: REMOVE_TOPPING,
    data: data}
}

export function updateTopping(data){
    return {type: UPDATE_TOPPING,
    data: data}
}