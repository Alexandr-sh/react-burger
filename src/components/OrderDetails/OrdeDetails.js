import styles from './OrderDetails.module.css'
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import doneImgPath from '../../images/done.png'
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import openOrderForm from "../../services/actions/openOrderForm"
import { useEffect } from 'react';
import { BURGER_INGRIDIENT_PROPTYPES, ORDER_PROPTYPES } from '../../utils/constants';
import PropTypes from 'prop-types';

function OrderDetails(props) {
    return (
        <>
            <div className={styles.orderDetails}>
                <h2 className={`${styles.header} text text_type_digits-large`}>{props.data.number}</h2>
                <h3 className={`${styles.subHeading} text text_type_main-medium`}>{props.data.number}</h3>
                <img src={doneImgPath} className={styles.doneImg} />
                <div className={`${styles.status} text text_type_main-medium`}>Ваш заказ начали готовить</div>
                <div className={`${styles.statusDescr} text text_type_main-medium`}>Дождитесь готовности на орбитальной станции</div>
            </div>
        </>
    )
}

OrderDetails.propTypes = {
    data: PropTypes.shape(ORDER_PROPTYPES).isRequired
};

export default OrderDetails;