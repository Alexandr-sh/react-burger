import React from 'react';
import styles from './BurgerConstructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import OrderDetails from '../OrderDetails/OrdeDetails';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
/*import { MainContext } from '../../services/mainContext.js';
import { OrderFormContext } from '../../services/orderFormContext.js';*/
import { getOrderData } from '../../utils/burger-api';

const url = 'https://norma.nomoreparties.space/api/orders';

const OrderDetailsModal = Modal(OrderDetails);

function BurgerConstructor(props) {

    const [orderState, setOrderState] = React.useState({
        name: '',
        number: 0
    })

    /*const state = useContext(MainContext);

    const [orderFormIsOpened, openOrderForm] = useState(false);

    const [totalPrice, setTotalPrice] = useState(0);

    const getOrderInfo = () => {
        const ingridients = []
        ingridients.push(state.bun._id);
        state.topping.forEach(element => {
            ingridients.push(element._id);
        });
        getOrderData(url, { ingredients: ingridients })
            .then(res => res.json())
            .then(res => {
                setOrderState({ name: res.name, number: res.order.number });
                openOrderForm(true);
            })
    }

    const closeOrderInfo = () => {
        openOrderForm(false);
    }

    useEffect(() => {
        let newTotalPrice = state.bun.price * 2;
        state.topping.forEach(element => {
            newTotalPrice += element.price;
        });
        setTotalPrice(newTotalPrice);
    })



    return (
        <div className={styles.burgerConstructor} >
            <ConstructorElement
                type="top"
                isLocked={true}
                text={state.bun.name}
                price={state.bun.price}
                thumbnail={state.bun.image}
                key={state.bun._id}
            />
            {
                state.topping.map((ingridient, index) => (
                    <ConstructorElement
                        isLocked={false}
                        text={ingridient.name}
                        price={ingridient.price}
                        thumbnail={ingridient.image}
                        key={index}
                    />
                ))
            }
            <ConstructorElement
                type="bottom"
                isLocked={true}
                text={state.bun.name}
                price={state.bun.price}
                thumbnail={state.bun.image}
                key={state.bun._id + 1}
            />
            <div className={styles.footer}>
                <div className={`${styles.totalPrice} text text_type_digits-medium`}>{totalPrice}</div>
                <CurrencyIcon type="primary" />
                <button className={`${styles.button} text text_type_main-default`} onClick={getOrderInfo}>Оформить заказ</button>
            </div>
            <OrderFormContext.Provider value={orderState}>
                <OrderDetailsModal isOpened={orderFormIsOpened} close={closeOrderInfo} />
            </OrderFormContext.Provider>
        </div>
    )*/
}

BurgerConstructor.propTypes = {
    data: PropTypes.array,
    bun: PropTypes.object
};

export default BurgerConstructor;