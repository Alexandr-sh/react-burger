import React from 'react';
import styles from './ModalOverlay.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { openIngridientForm } from '../../services/actions/openIngridientForm';
import { changeCurrentIngridient } from '../../services/actions/changeCurrentIngridient';


function ModalOverlay(props){

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(openIngridientForm(false))
        dispatch(changeCurrentIngridient({}))
    }

    return (
        <div className={styles.modalOverlay} onClick={handleClick}>
        </div>
    )
}

ModalOverlay.propTypes = {
    closeModal: PropTypes.func
}; 

export default ModalOverlay;