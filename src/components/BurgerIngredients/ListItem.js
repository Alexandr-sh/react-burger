import React from 'react';
import styles from './ListItem.module.css';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch } from 'react-redux';
import { changeCurrentIngridient } from '../../services/actions/changeCurrentIngridient';
import { changeBun } from '../../services/actions/changeBun';
import { openIngridientForm } from '../../services/actions/openIngridientForm';

import PropTypes from 'prop-types';

function ListItem(props){

    const dispatch = useDispatch();

    const handleClick = () =>{
        if (props.data.type === 'bun') dispatch(changeBun(props.data))
        dispatch(changeCurrentIngridient(props.data))
        dispatch(openIngridientForm(true))
    }

    return (
        <div className={styles.listItem} onClick={handleClick}>
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