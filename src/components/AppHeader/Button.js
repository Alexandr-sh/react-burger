import React from 'react';

import { Typography } from '@ya.praktikum/react-developer-burger-ui-components'
import { Box } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './Button.module.css'
import PropTypes from 'prop-types';

class Button extends React.Component {
    render() {
      return <div className={styles.Button}>
        {this.props.icon}
        <p className = {`${styles.buttonText}`}>{this.props.title}</p>
      </div>;
    }
} 

Button.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element
}; 

export default Button;