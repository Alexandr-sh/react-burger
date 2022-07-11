import React from 'react';

import { Typography } from '@ya.praktikum/react-developer-burger-ui-components'
import { Box } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './Button.module.css'
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <div className={styles.Button}>
        {props.icon}
        <p className = {`${styles.buttonText}`}>{props.title}</p>
      </div>
  )
}

Button.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element
}; 

export default Button;