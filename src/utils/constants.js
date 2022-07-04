import PropTypes from 'prop-types';

export const baseUrl = 'https://norma.nomoreparties.space/api';

export const CHANGE_BUN = "CHANGE_BUN"
export const CHANGE_CURRENT_INGRIDIENT = "CHANGE_CURRENT_INGRIDIENT"
export const ADD_TOPPING = "ADD_TOPPING"
export const REMOVE_TOPPING = "REMOVE_TOPPING"
export const UPDATE_TOPPING = "UPDATE_TOPPING"
export const CHANGE_TOTAL_PRICE = "CHANGE_TOTAL_PRICE"
export const GET_INGRIDIENTS_SUCCESS = "GET_INGRIDIENTS_SUCCESS"
export const GET_INGRIDIENTS = "GET_INGRIDIENTS"
export const GET_INGRIDIENTS_FAILED ="GET_INGRIDIENTS_FAILED"
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS"
export const GET_ORDER = "GET_ORDER"
export const GET_ORDER_FAILED = "GET_ORDER_FAILED"
export const OPEN_INGRIDIENT_FORM = "OPEN_INGRIDIENT_FORM"
export const OPEN_ORDER_FORM = "OPEN_ORDER_FORM"

export const BURGER_INGRIDIENT_PROPTYPES = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number.isRequired,
}