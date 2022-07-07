import React from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import styles from './Modal.module.css'
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { BURGER_INGRIDIENT_PROPTYPES } from '../../utils/constants';
import { useState,useEffect } from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const Modal = (props) => {
    if (!props.isOpen) return null;
    return ReactDOM.createPortal(
        <div className={styles.container}>

            <div className={styles.orderDetails}>
                <button className={styles.button} onClick={props.onClose}><CloseIcon type="primary" /></button>
                {props.children}
            </div>
        </div>,
        document.body
    );
};

Modal.propTypes = {
    isOpened: PropTypes.bool.isRequired,
    data: PropTypes.shape(BURGER_INGRIDIENT_PROPTYPES).isRequired
};

export default Modal;