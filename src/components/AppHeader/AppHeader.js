import React from 'react';

import { Typography } from '@ya.praktikum/react-developer-burger-ui-components'
import { Box } from '@ya.praktikum/react-developer-burger-ui-components'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './AppHeader.module.css'
import Button from './Button'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'


function AppHeader(props) {
  return (
    <div className={styles.container}>
      <div className={styles.AppHeader}>
        <div className={styles.buttonContainer}>
          <Button title="Конструктор" icon={<BurgerIcon />} />
          <Button title="Лента заказов" icon={<ListIcon />} />
        </div>
        <Logo className={styles.buttonContainer} />
        <Button title="Личный кабинет" icon={<ProfileIcon />} />
      </div>
    </div>
  )
}

export default AppHeader;