import { OPEN_ORDER_FORM } from "../../utils/constants"

function openOrderForm(value) {
    return {
        type: OPEN_ORDER_FORM,
        value: value
    }
}

export default openOrderForm