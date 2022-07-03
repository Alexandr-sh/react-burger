import { CHANGE_CURRENT_INGRIDIENT } from "../../utils/constants"

export function changeCurrentIngridient(data) {
    return {
        type: CHANGE_CURRENT_INGRIDIENT,
        data: data
    }
}