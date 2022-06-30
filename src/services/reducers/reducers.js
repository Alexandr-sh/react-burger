import { combineReducers } from 'redux';

const initialState = {
    loading: true,
    bun: {},
    ingridients: {
        request: false,
        requestFailed: false,
        ingridientsData: []
    },
    topping: [],
    orderDetails: {
        request: false,
        requestFailed: false,
        orderData: {}
    },
    ingridientFormIsOpened: false,
    orderFormIsOpened: false,
    currentIngridient: {},
    totalPrice: 0
}

const totalPrice = (state, action) => {
    switch (action.type) {
        case "CHANGE_TOTAL_PRICE": {
            return action.value
        }
        default: return state;
    }
}

const currentIngridient = (state = initialState.currentIngridient, action) => {
    switch (action.type) {
        case "CHANGE_CURRENT_INGRIDIENT": {
            return action.data
        }
        default: return state;
    }
}


const bun = (state = initialState.bun, action) => {
    switch (action.type) {
        case "CHANGE_BUN": {
            return action.data
        }
        default: return state;
    }
}


const topping = (state = initialState.topping, action) => {
    switch (action.type) {
        case "ADD_TOPPING": {
            return [...state, action.data]
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
        case "OPEN_INGRIDIENT_FORM": {
            return action.value
        }
        default: return state;
    }
}

const openOrderForm = (state = initialState.orderFormIsOpened, action) => {
    switch (action.type) {
        case "OPEN_ORDER_FORM": {
            return action.value
        }
        default: return state;
    }
}

export const ingridients = (state = initialState.ingridients, action) => {
    switch (action.type) {
        case "GET_INGRIDIENTS": {
            return {
                ...state,
                request: true,
                requestFailed: false
            }
        }

        case "GET_INGRIDIENTS_SUCCESS": {
            return {
                ...state,
                ingridientsData: action.data,
                requestFailed: false,
                request:false
            }
        }

        case "GET_INGRIDIENTS_FAILED": {
            return {
                ...state,
                requestFailed: true,
                request: false
            }
        }
        default: return state;
    }
}

export const order = (state = initialState.orderDetails, action) => {
    switch (action.type) {
        case "GET_ORDER": {
            return {
                ...state,
                request: true,
                requestFailed: false
            }
        }

        case "GET_ORDER_SUCCESS": {
            return {
                ...state,
                orderData: action.data,
                requestFailed: false,
                request:false
            }
        }

        case "GET_ORDER_FAILED": {
            return {
                ...state,
                requestFailed: true,
                request: false
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



