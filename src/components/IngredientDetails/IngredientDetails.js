import React from 'react';
import styles from './IngredientDetails.module.css'
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import Spec from './Spec';
import { useSelector, useDispatch } from 'react-redux';
import { openIngridientForm } from '../../services/actions/openIngridientForm';


function IngredientDetails(props){

    const dispatch = useDispatch();

    const {isOpened , ingridientData} = useSelector(store => ({
        isOpened: store.openIngridientForm,
        ingridientData: store.currentIngridient
    }))

    const close = () => {
        dispatch(openIngridientForm(false))
    }

    return(
        <>
            {isOpened && (
                <div className={styles.container}>
                    <ModalOverlay closeModal={props.closeModal}/>
                    <div className={styles.ingredientDetails}>
                        <button className={styles.button} onClick={props.closeModal}><CloseIcon type="primary" /></button>
                        <h2 className={`${styles.header} text text_type_main-large`}>Детали ингридиента</h2>
                        <img src={ingridientData.image} className={styles.img} />
                        <h3 className={`${styles.name} text text_type_main-medium`}>{ingridientData.name}</h3>
                        <ul className={styles.specs}>
                            <Spec name="Калории,ккал" count={ingridientData.calories}></Spec>
                            <Spec name="Белки, г" count={ingridientData.proteins}></Spec>
                            <Spec name="Жиры, г" count={ingridientData.fat}></Spec>
                            <Spec name="Углеводы, г" count={ingridientData.carbohydrates}></Spec>
                        </ul>
                    </div>
                </div>
            )}
        </>
    )
}


IngredientDetails.propTypes = {
    isOpened: PropTypes.bool,
    closeModal: PropTypes.func,
    data: PropTypes.object
  }; 

export default IngredientDetails;