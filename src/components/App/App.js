import React, { useEffect } from 'react';
import styles from './App.module.css';

import Modal from '../Modal/Modal';

import { useSelector } from 'react-redux';

import { Typography } from '@ya.praktikum/react-developer-burger-ui-components'

import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import IngredientDetails from '../IngredientDetails/IngredientDetails';


const IngredientModal = Modal(IngredientDetails);




const App = () => {
  return (
    <div className={`${styles.App} text text_type_main-default`}>
      <AppHeader />
      <div className={styles.content}>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </div>
  )
}

export default App;