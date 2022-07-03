import { CHANGE_BUN } from "../../utils/constants"

export function changeBun(data) {
    return {
        type: CHANGE_BUN,
        data: data
    }
}