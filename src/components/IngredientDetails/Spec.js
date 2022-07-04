import React from 'react';
import styles from './Spec.module.css'
import PropTypes from 'prop-types';

function Spec(props) {
    return (
        <li className={styles.spec}>
            <div className={`text text_type_main-default text_color_inactive`}>{props.name}</div>
            <div className={`text text_type_digits-default text_color_inactive`}>{props.count}</div>
        </li>
    )
}

Spec.propTypes = {
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
};

export default Spec