import { combineReducers } from 'redux';

const initialState = {
    loading: true,
    bun: {},
    ingridients: [],
    topping: {},
    orderDetails: {},
    ingridientFormIsOpened: false,
    orderFormIsOpened: false
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

const ingridients = (state = initialState.ingridients, action) => {
    switch (action.type) {
        case "GET_INGRIDIENTS": {
            return action.data
        }
        default: return state;
    }
}

const order = (state = initialState.orderDetails, action) => {
    switch (action.type) {
        case "GET_ORDER_INFO": {
            return action.data
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

const openIngridientsForm = (state = initialState.ingridientFormIsOpened, action) => {
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

export const rootReducer = combineReducers({
    bun,
    topping,
    ingridients,
    order,
    loading,
    openIngridientsForm,
    openOrderForm
})


