import { OPEN_INGRIDIENT_FORM } from "../../utils/constants"

export function openIngridientForm(value){
    return {type: OPEN_INGRIDIENT_FORM,
    value: value}
}