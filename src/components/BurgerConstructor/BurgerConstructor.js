import React from 'react';
import styles from './BurgerConstructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import OrderDetails from '../OrderDetails/OrdeDetails';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState, useRef, useCallback } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useDrop } from "react-dnd";

import { changeBun } from '../../services/actions/changeBun';
import { changeCurrentIngridient } from '../../services/actions/changeCurrentIngridient';
import { addTopping } from '../../services/actions/changeTopping';
import { updateTopping } from '../../services/actions/changeTopping';
import { getOrderData } from '../../services/actions/getOrderInfo';

import BurgerConstructorElement from './BurgerConstructorElement';


const url = 'https://norma.nomoreparties.space/api/orders';

const OrderDetailsModal = Modal(OrderDetails);



function BurgerConstructor(props) {

    const inputRef = useRef(null);

    const [totalPrice, setTotalPrice] = useState(0);

    const dispatch = useDispatch();

    const [, dropTarget] = useDrop({
        accept: "ingridient",
        drop(ingridientData) {
            if (ingridientData.type === 'bun') dispatch(changeBun(ingridientData))
            if (ingridientData.type !== 'bun') {
                ingridientData.index = topping.length
                dispatch(addTopping(ingridientData))
            }
            dispatch(changeCurrentIngridient(ingridientData))
        },
    });

    const { request, order, orderFormIsOpened, topping, bun, store } = useSelector(store => ({
        request: store.ingridients.request,
        ingridients: store.ingridients.ingridientsData,
        orderFormIsOpened: store.openOrderForm,
        topping: store.topping,
        bun: store.bun,
        order: store.order.orderData.order,
        store:store
    }), shallowEqual)

    useEffect(() => {
        let newTotalPrice = bun.price * 2;
        topping.forEach(element => {
            newTotalPrice += element.price;
        });
        setTotalPrice(newTotalPrice);
    })

    const getOrderInfo = () => {
        const ingridients = [...topping,bun]
        dispatch(getOrderData({ ingredients: ingridients }))
     }

    const moveListItem = useCallback(
        (dragIndex, hoverIndex) => {
            const dragItem = topping[dragIndex]
            const hoverItem = topping[hoverIndex]

            const updatedTopping = [...topping]
            updatedTopping[dragIndex] = hoverItem
            updatedTopping[hoverIndex] = dragItem

            dispatch(updateTopping(updatedTopping))
        },
        [topping],
    )

    return (
        <div className={styles.burgerConstructor} ref={dropTarget}>
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
                    <BurgerConstructorElement
                        isLocked={false}
                        text={ingridient.name}
                        price={ingridient.price}
                        thumbnail={ingridient.image}
                        key={index}
                        index={ingridient.index}
                        moveListItem={moveListItem}
                        _id={ingridient._id}
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
            <OrderDetailsModal />
        </div>
    )
}

BurgerConstructor.propTypes = {
    data: PropTypes.array,
    bun: PropTypes.object
};

export default BurgerConstructor;