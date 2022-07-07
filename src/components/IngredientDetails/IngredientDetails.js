import React from 'react';
import styles from './IngredientDetails.module.css'
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import Spec from './Spec';
import { useSelector, useDispatch } from 'react-redux';
import { openIngridientForm } from '../../services/actions/openIngridientForm';
import { changeCurrentIngridient } from '../../services/actions/changeCurrentIngridient';
import { BURGER_INGRIDIENT_PROPTYPES } from '../../utils/constants';
import { useEffect } from 'react';

function IngredientDetails(props) {

    useEffect(() => {
        console.log(props)
    })

    return (
        <>
            <div className={styles.ingredientDetails}>
                <h2 className={`${styles.header} text text_type_main-large`}>Детали ингридиента</h2>
                <img src={props.data.image} className={styles.img} />
                <h3 className={`${styles.name} text text_type_main-medium`}>{props.data.name}</h3>
                <ul className={styles.specs}>
                    <Spec name="Калории,ккал" count={props.data.calories}></Spec>
                    <Spec name="Белки, г" count={props.data.proteins}></Spec>
                    <Spec name="Жиры, г" count={props.data.fat}></Spec>
                    <Spec name="Углеводы, г" count={props.data.carbohydrates}></Spec>
                </ul>
            </div>
        </>
    )
}

IngredientDetails.propTypes = {
    data: PropTypes.shape(BURGER_INGRIDIENT_PROPTYPES).isRequired
};

export default IngredientDetails;