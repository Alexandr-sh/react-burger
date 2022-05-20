import React from 'react';
import styles from './OrderDetails.module.css'
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import doneImgPath from '../../images/done.png'

class OrderDetails extends React.Component {
    render() {
        console.log(this.props.isOpened)
        return (<>
            {this.props.isOpened && (
                <div className={styles.container}>
                    <ModalOverlay closeModal={this.props.closeModal}/>
                    <div className={styles.orderDetails}>
                        <button className={styles.button} onClick={this.props.closeModal}><CloseIcon type="primary" /></button>
                        <h2 className={`${styles.header} text text_type_digits-large`}>034536</h2>
                        <h3 className={`${styles.subHeading} text text_type_main-medium`}>идентификатор заказа</h3>
                        <img src={doneImgPath} className={styles.doneImg}/>
                        <div className={`${styles.status} text text_type_main-medium`}>Ваш заказ начали готовить</div>
                        <div className={`${styles.statusDescr} text text_type_main-medium`}>Дождитесь готовности на орбитальной станции</div>
                    </div>
                </div>
            )}
        </>)
    }
}

export default OrderDetails;