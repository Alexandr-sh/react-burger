import React from 'react';
import styles from './OrderDetails.module.css'
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import doneImgPath from '../../images/done.png'
import PropTypes from 'prop-types';
/*import { OrderFormContext } from '../../services/orderFormContext.js';*/
import { useContext } from 'react';

function OrderDetails(props){

    /*const state = useContext(OrderFormContext);

    const close = () => {
        props.close();
        props.closeModal();
    }

    return (
        <>
            {props.isOpened && (
                <div className={styles.container}>
                    <ModalOverlay closeModal={close}/>
                    <div className={styles.orderDetails}>
                        <button className={styles.button} onClick={close}><CloseIcon type="primary" /></button>
                        <h2 className={`${styles.header} text text_type_digits-large`}>034536</h2>
                        <h3 className={`${styles.subHeading} text text_type_main-medium`}>{state.number}</h3>
                        <img src={doneImgPath} className={styles.doneImg}/>
                        <div className={`${styles.status} text text_type_main-medium`}>Ваш заказ начали готовить</div>
                        <div className={`${styles.statusDescr} text text_type_main-medium`}>Дождитесь готовности на орбитальной станции</div>
                    </div>
                </div>
            )}
        </>
    )*/
}


OrderDetails.propTypes = {
    closeModal: PropTypes.func,
    isOpened: PropTypes.bool
}; 

export default OrderDetails;