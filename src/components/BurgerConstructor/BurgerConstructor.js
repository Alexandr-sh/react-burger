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
import { v4 as uuidv4 } from 'uuid';

import BurgerConstructorElement from './BurgerConstructorElement';
import { BURGER_INGRIDIENT_PROPTYPES } from '../../utils/constants';
import openOrderForm from '../../services/actions/openOrderForm';



function BurgerConstructor(props) {

    useEffect(() => {
        console.log(bun)
        let newTotalPrice = bun.price * 2;
        topping.forEach(element => {
            newTotalPrice += element.price;
        });
        setTotalPrice(newTotalPrice.toString());
    })

    const inputRef = useRef(null);

    const [totalPrice, setTotalPrice] = useState(0);

    const dispatch = useDispatch();

    const [, dropTarget] = useDrop({
        accept: "ingridient",
        drop(ingridientData) {
            if (ingridientData.type === 'bun') dispatch(changeBun(ingridientData))
            if (ingridientData.type !== 'bun') {
                ingridientData.index = topping.length
                dispatch(addTopping({...ingridientData}))
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
        store: store
    }), shallowEqual)

    const getOrderInfo = () => {
        const ingridients = [...topping, bun]
        dispatch(getOrderData({ ingredients: ingridients }))
    }

    const closeModal = () => {
        dispatch(openOrderForm(false))
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
            {bun ? (
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={bun.name + " (верх)"}
                    price={bun.price}
                    thumbnail={bun.image}
                    key={bun._id}
                />) :
                (<h2>Пожалуйста, перенесите сюда булку и ингредиенты для создания заказа</h2>)
            }
            {
                topping.map((ingridient) => (
                    (<BurgerConstructorElement
                        isLocked={false}
                        text={ingridient.name}
                        price={ingridient.price}
                        thumbnail={ingridient.image}
                        key={uuidv4()}
                        index={ingridient.index}
                        moveListItem={moveListItem}
                        _id={ingridient._id}
                    />)
                ))
            }
            {bun && (
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={bun.name+" (низ)"}
                    price={bun.price}
                    thumbnail={bun.image}
                    key={bun._id + 1}
                />)
            }
            <div className={styles.footer}>
                <div className={`${styles.totalPrice} text text_type_digits-medium`}>{totalPrice}</div>
                <CurrencyIcon type="primary" />
                <button className={`${styles.button} text text_type_main-default`} onClick={getOrderInfo}>Оформить заказ</button>
            </div>
            <Modal isOpen={orderFormIsOpened} onClose={closeModal}><OrderDetails data={order} /></Modal>
        </div>
    )
}

export default BurgerConstructor;