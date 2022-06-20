import React from 'react';
import styles from './ListItem.module.css';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'

import PropTypes from 'prop-types';


class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.selectIngridient(this.props.data);
      }



    render() {
        return <div className={styles.listItem} onClick={this.handleClick}>
            {this.props.data.__v > 0 ? (
                <Counter count={this.props.data.__v} size="default" />
            ) : null}
            <img src={this.props.data.image} className={styles.image} />
            <div className={styles.price}>
                <div className={`text text_type_digits-default ${styles.value}`}>{this.props.data.price}</div>
                <CurrencyIcon type="primary" />
            </div>
            <div className={styles.name}>{this.props.data.name}</div>
        </div>;
    }
}

ListItem.propTypes = {
    data: PropTypes.object
};

export default ListItem;