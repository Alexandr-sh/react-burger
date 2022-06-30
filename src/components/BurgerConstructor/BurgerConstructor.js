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
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getOrderData } from '../../utils/burger-api';

const url = 'https://norma.nomoreparties.space/api/orders';

const OrderDetailsModal = Modal(OrderDetails);



function BurgerConstructor(props) {

    const [totalPrice, setTotalPrice] = useState(0);

    const { request, order, openOrderForm, topping, bun } = useSelector(store => ({
        request: store.ingridients.request,
        ingridients: store.ingridients.ingridientsData,
        openIngridientForm: store.openIngridientForm,
        topping: store.topping,
        bun: store.bun
    }), shallowEqual)

    useEffect(() => {
        let newTotalPrice = bun.price * 2;
        topping.forEach(element => {
            newTotalPrice += element.price;
        });
        setTotalPrice(newTotalPrice);
    })

    const getOrderInfo = () => { }

    return (
        <div className={styles.burgerConstructor} >
            <ConstructorElement
                type="top"
                isLocked={true}
                text={bun.name}
                price={bun.price}
                thumbnail={bun.image}
                key={bun._id}
            />
            {
                topping.map((ingridient, index) => (
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
                text={bun.name}
                price={bun.price}
                thumbnail={bun.image}
                key={bun._id + 1}
            />
            <div className={styles.footer}>
                <div className={`${styles.totalPrice} text text_type_digits-medium`}>{totalPrice}</div>
                <CurrencyIcon type="primary" />
                <button className={`${styles.button} text text_type_main-default`} onClick={getOrderInfo}>Оформить заказ</button>
            </div>
            <OrderDetailsModal/>
        </div>
    )
}

BurgerConstructor.propTypes = {
    data: PropTypes.array,
    bun: PropTypes.object
};

export default BurgerConstructor;