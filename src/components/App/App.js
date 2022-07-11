import React, { useEffect } from 'react';
import styles from './App.module.css';

import Modal from '../Modal/Modal';

import { useSelector } from 'react-redux';

import { Typography } from '@ya.praktikum/react-developer-burger-ui-components'

import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import IngredientDetails from '../IngredientDetails/IngredientDetails';

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";






const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={`${styles.App} text text_type_main-default`}>
        <AppHeader />
        <div className={styles.content}>
          <BurgerIngredients />
          <BurgerConstructor />
        </div>
      </div >
    </DndProvider>
  )
}

export default App;