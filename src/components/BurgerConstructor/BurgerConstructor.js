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
import { MainContext } from '../../utils/mainContext.js';

const OrderDetailsModal = Modal(OrderDetails);

function BurgerConstructor(props) {

    const state = useContext(MainContext);

    const [orderFormIsOpened, openOrderForm] = useState(false);

    const [totalPrice,setTotalPrice] = useState(0);

    const getOrderInfo = () => {
        openOrderForm(true);
    }

    const closeOrderInfo = () => {
        openOrderForm(false);
    }

    useEffect(() => {
        let newTotalPrice = state.bun.price*2;
        state.topping.forEach(element => {
            newTotalPrice += element.price;
        });
        setTotalPrice(newTotalPrice);
    },[state.topping])



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
                key={state.bun._id+1}
            />
            <div className={styles.footer}>
                <div className={`${styles.totalPrice} text text_type_digits-medium`}>{totalPrice}</div>
                <CurrencyIcon type="primary" />
                <button className={`${styles.button} text text_type_main-default`} onClick={getOrderInfo}>Оформить заказ</button>
            </div>
            <OrderDetailsModal isOpened={orderFormIsOpened} close={closeOrderInfo}/>
        </div>
    )
}

/*class BurgerConstructor extends React.Component {
    state = {orderFormIsOpened: false}
    constructor(props){
        super(props)
    }

    updateData() {
        this.data = [];
        this.totalPrice = this.props.bun.price*2;
        this.props.data.forEach(element => {
            if ((element.__v > 0)&&(element.type!=="bun")) {
                for (let i = 0; i < element.__v; i++) {
                    this.data.push(element);
                    this.totalPrice += element.price;
                }
            }
        });
    }

    getOrderInfo = () => {
        this.setState(prevState => ({...prevState, orderFormIsOpened: true}))
    }

    closeOrderInfo = () => {
        this.setState(prevState => ({...prevState, orderFormIsOpened: false}))
    }


    render() {
        this.updateData();
        return <div className={styles.burgerConstructor} >
            <ConstructorElement
                type="top"
                isLocked={true}
                text={this.props.bun.name}
                price={this.props.bun.price}
                thumbnail={this.props.bun.image}
                key={this.props.bun._id}
            />
            {
                this.data.map((ingridient, index) => (
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
                text={this.props.bun.name}
                price={this.props.bun.price}
                thumbnail={this.props.bun.image}
                key={this.props.bun._id+1}
            />
            <div className={styles.footer}>
                <div className={`${styles.totalPrice} text text_type_digits-medium`}>{this.totalPrice}</div>
                <CurrencyIcon type="primary" />
                <button className={`${styles.button} text text_type_main-default`} onClick={this.getOrderInfo}>Оформить заказ</button>
            </div>
            <OrderDetailsModal isOpened={this.state.orderFormIsOpened} close={this.closeOrderInfo}/>
        </div>;
    }
}*/

BurgerConstructor.propTypes = {
    data: PropTypes.array,
    bun: PropTypes.object
  }; 

export default BurgerConstructor;