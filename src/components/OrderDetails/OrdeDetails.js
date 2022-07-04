import styles from './OrderDetails.module.css'
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import doneImgPath from '../../images/done.png'
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import openOrderForm from "../../services/actions/openOrderForm"
import { useEffect } from 'react';

function OrderDetails(props){

    const dispatch = useDispatch();

    const {isOpened , order, request} = useSelector(store => ({
        isOpened: store.openOrderForm,
        order: store.order.orderData.order
    }))



    const close = () => {
        dispatch(openOrderForm(false))
    }

    return (
        <>
            {isOpened && (
                <div className={styles.container}>
                    <ModalOverlay closeModal={close}/>
                    <div className={styles.orderDetails}>
                        <button className={styles.button} onClick={close}><CloseIcon type="primary" /></button>
                        <h2 className={`${styles.header} text text_type_digits-large`}>{order.number}</h2>
                        <h3 className={`${styles.subHeading} text text_type_main-medium`}>{order.number}</h3>
                        <img src={doneImgPath} className={styles.doneImg}/>
                        <div className={`${styles.status} text text_type_main-medium`}>Ваш заказ начали готовить</div>
                        <div className={`${styles.statusDescr} text text_type_main-medium`}>Дождитесь готовности на орбитальной станции</div>
                    </div>
                </div>
            )}
        </>
    )
}

export default OrderDetails;