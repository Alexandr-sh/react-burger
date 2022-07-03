import { getIngridientsData } from "../../utils/burger-api"
import { url } from "../../utils/constants"
import { changeBun } from '../../services/actions/changeBun';
import { GET_INGRIDIENTS_SUCCESS } from "../../utils/constants";
import { GET_INGRIDIENTS } from "../../utils/constants";
import { GET_INGRIDIENTS_FAILED } from "../../utils/constants";




function getIngridientsSuccess(data) {
    return {
        type: GET_INGRIDIENTS_SUCCESS,
        data: data
    }
}


export const getIngridients = () => {
    return function (dispatch) {
        dispatch({
            type: GET_INGRIDIENTS
        })
        getIngridientsData(url).then(res => {
            return res.json()
        }).then(res => {
            dispatch(getIngridientsSuccess(res.data))
            let initialBun = {}
            for (let i = 0; i < res.data.length; ++i) {
                if (res.data[i].type === "bun") {
                    initialBun = res.data[i];
                    break;
                }
            }
            dispatch(changeBun(initialBun))
        }).catch(err => {
            console.log(err)
            dispatch({
                type: GET_INGRIDIENTS_FAILED
            })
        })

    }
}


