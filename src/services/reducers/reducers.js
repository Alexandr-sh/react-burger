import { combineReducers } from 'redux';

const initialState = {
    loading: true,
    bun: {},
    ingridients: {},
    topping: null,
    orderDetails: null,
    ingridientFormIsOpened: false,
    orderFormIsOpened: false
}


const bun = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_BUN": {
            return { ...state, bun: action.data }
        }
        default: return state;
    }
}


const topping = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_TOPPING": {
            return { ...state, topping: action.data }
        }
        default: return state;
    }
}

const ingridients = (state = initialState, action) => {
    switch (action.type) {
        case "GET_INGRIDIENTS": {
            return { ...state, ingridients: action.data }
        }
        default: return state;
    }
}

const order = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ORDER_INFO": {
            return { ...state, orderDetails: action.data }
        }
        default: return state;
    }
}

const loading = (state = initialState, action) => {
    switch (action.type) {
        case "LOADING": {
            return { ...state, loading: action.value }
        }
        default: return state;
    }
}

const openIngridientsForm = (state = initialState, action) => {
    switch (action.type) {
        case "OPEN_INGRIDIENT_FORM": {
            return { ...state, ingridientFormIsOpened: action.value }
        }
        default: return state;
    }
}

const openOrderForm = (state = initialState, action) => {
    switch (action.type) {
        case "OPEN_ORDER_FORM": {
            return { ...state, orderFormIsOpened: action.value }
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
    openIngridientsForm,
    openOrderForm
})


