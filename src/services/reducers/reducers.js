import { combineReducers } from 'redux';

import { CHANGE_BUN } from '../../utils/constants';
import { CHANGE_CURRENT_INGRIDIENT } from '../../utils/constants';
import { REMOVE_TOPPING } from '../../utils/constants';
import { ADD_TOPPING } from '../../utils/constants';
import { UPDATE_TOPPING } from '../../utils/constants';
import { CHANGE_TOTAL_PRICE } from '../../utils/constants';
import { GET_INGRIDIENTS_SUCCESS } from '../../utils/constants';
import { GET_INGRIDIENTS } from '../../utils/constants';
import { GET_INGRIDIENTS_FAILED } from '../../utils/constants';
import { GET_ORDER_SUCCESS } from '../../utils/constants';
import { GET_ORDER } from '../../utils/constants';
import { GET_ORDER_FAILED } from '../../utils/constants';
import { OPEN_INGRIDIENT_FORM } from '../../utils/constants';
import { OPEN_ORDER_FORM } from '../../utils/constants';
import { DEFAULT_INGRIDIENT } from '../../utils/constants';
import { DEFAULT_ORDER } from '../../utils/constants';

const initialState = {
    loading: true,
    bun: null,
    ingridients: {
        request: false,
        requestFailed: false,
        ingridientsData: []
    },
    topping: [],
    orderDetails: {
        request: false,
        requestFailed: false,
        orderData: DEFAULT_ORDER
    },
    ingridientFormIsOpened: false,
    orderFormIsOpened: false,
    currentIngridient: DEFAULT_INGRIDIENT,
    totalPrice: 0
}

export const order = (state = initialState.orderDetails, action) => {
    switch (action.type) {
        case GET_ORDER: {
            return {
                ...state,
                request: true,
                requestFailed: false
            }
        }

        case GET_ORDER_SUCCESS: {
            return {
                ...state,
                orderData: action.data,
                requestFailed: false,
                request: false
            }
        }

        case GET_ORDER_FAILED: {
            return {
                ...state,
                requestFailed: true,
                request: false
            }
        }
        default: return state;
    }
}

const totalPrice = (state, action) => {
    switch (action.type) {
        case CHANGE_TOTAL_PRICE: {
            return action.value
        }
        default: return state;
    }
}

const currentIngridient = (state = initialState.currentIngridient, action) => {
    switch (action.type) {
        case CHANGE_CURRENT_INGRIDIENT: {
            return action.data
        }
        default: return state;
    }
}


const bun = (state = initialState.bun, action) => {
    switch (action.type) {
        case CHANGE_BUN: {
            return action.data
        }
        default: return state;
    }
}


const topping = (state = initialState.topping, action) => {
    switch (action.type) {
        case ADD_TOPPING: {
            return [...state, action.data]
        }
        case UPDATE_TOPPING: {
            return [...action.data]
        }
        case REMOVE_TOPPING: {
            const newData = state.filter(item => item.index != action.data.index);
            return [...newData]
        }
        default: return state;
    }
}


const loading = (state = initialState.loading, action) => {
    switch (action.type) {
        case "LOADING": {
            return action.value
        }
        default: return state;
    }
}

const openIngridientForm = (state = initialState.ingridientFormIsOpened, action) => {
    switch (action.type) {
        case OPEN_INGRIDIENT_FORM: {
            return action.value
        }
        default: return state;
    }
}

const openOrderForm = (state = initialState.orderFormIsOpened, action) => {
    switch (action.type) {
        case OPEN_ORDER_FORM: {
            return action.value
        }
        default: return state;
    }
}

export const ingridients = (state = initialState.ingridients, action) => {
    switch (action.type) {
        case GET_INGRIDIENTS: {
            return {
                ...state,
                request: true,
                requestFailed: false
            }
        }

        case GET_INGRIDIENTS_SUCCESS: {
            return {
                ...state,
                ingridientsData: action.data,
                requestFailed: false,
                request: false
            }
        }

        case GET_INGRIDIENTS_FAILED: {
            return {
                ...state,
                requestFailed: true,
                request: false
            }
        }

        case CHANGE_BUN: {
            const newIngridients = [...state.ingridientsData]
            newIngridients.forEach((item) => {
                if (item.type === "bun") {
                    if (item._id === action.data._id) {
                        item.__v = 2
                    }
                    else item.__v = 0;
                }
            })
            return {
                ...state,
                ingridientsData: newIngridients
            }
        }

        case ADD_TOPPING: {
            const newIngridients = [...state.ingridientsData]
            newIngridients.forEach((item) => {
                if (item._id === action.data._id) {
                    item.__v = item.__v + 1
                }
            })
            return {
                ...state,
                ingridientsData: newIngridients
            }
        }

        case REMOVE_TOPPING: {
            const newIngridients = [...state.ingridientsData]
            newIngridients.forEach((item) => {
                if (item._id === action.data._id) {
                    item.__v = item.__v - 1
                }
            })
            return {
                ...state,
                ingridientsData: newIngridients
            }
        }
        default: return state;
    }
}

export const rootReducer = combineReducers({
    bun,
    topping,
    ingridients,
    order,
    loading,
    openIngridientForm,
    openOrderForm,
    currentIngridient
})



