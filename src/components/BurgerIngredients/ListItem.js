import React from 'react';
import styles from './ListItem.module.css';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch } from 'react-redux';
import { changeCurrentIngridient } from '../../services/actions/changeCurrentIngridient';
import { changeBun } from '../../services/actions/changeBun';
import { openIngridientForm } from '../../services/actions/openIngridientForm';
import { useEffect } from 'react';
import { useDrag } from "react-dnd";

import PropTypes from 'prop-types';

function ListItem(props){

    /*useEffect(() => {
        console.log(props.key)
    })*/

    const [, dragRef] = useDrag({
        type: "ingridient",
        item: props.data
    });

    const dispatch = useDispatch();

    const handleClick = () =>{
        dispatch(changeCurrentIngridient(props.data))
        dispatch(openIngridientForm(true))
    }


    return (
        <div className={styles.listItem} onClick={handleClick} ref={dragRef}>
            {props.data.__v > 0 ? (
                <Counter count={props.data.__v} size="default" />
            ) : null}
            <img src={props.data.image} className={styles.image} />
            <div className={styles.price}>
                <div className={`text text_type_digits-default ${styles.value}`}>{props.data.price}</div>
                <CurrencyIcon type="primary" />
            </div>
            <div className={styles.name}>{props.data.name}</div>
        </div>
    )
}

ListItem.propTypes = {
    data: PropTypes.object
};

export default ListItem;