import React from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import styles from './Modal.module.css'
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { BURGER_INGRIDIENT_PROPTYPES } from '../../utils/constants';
import { useState, useEffect, useRef  } from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const Modal = (props) => {

    const thisRef = useRef(null);

    useEffect(() => {
        if(thisRef.current!==null) thisRef.current.focus();
    })

    const closeByEsc = (e) => {
        if (e.key === "Escape") {
            props.onClose()
        }
    }

    if (!props.isOpen) return null;
    return ReactDOM.createPortal(
        <div className={styles.modal} onKeyDown={closeByEsc} tabIndex={-1} ref={thisRef}>
            <ModalOverlay closeModal={props.onClose} />
            <div className={styles.container}>
                <button className={styles.button} onClick={props.onClose}><CloseIcon type="primary" /></button>
                {props.children}
            </div>
        </div>,
        document.body
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired
};

export default Modal;