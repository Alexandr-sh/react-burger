import React from 'react';
import styles from './Spec.module.css'
import PropTypes from 'prop-types';

class Spec extends React.Component {
    render() {
        return (
            <li className={styles.spec}>
                <div className={`text text_type_main-default text_color_inactive`}>{this.props.name}</div>
                <div className={`text text_type_digits-default text_color_inactive`}>{this.props.count}</div>
            </li>
        )
    }
}

Spec.propTypes = {
    name: PropTypes.string,
    count: PropTypes.number
};

export default Spec