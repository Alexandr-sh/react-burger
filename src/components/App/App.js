import React, { useEffect } from 'react';
import styles from './App.module.css';

import Modal from '../Modal/Modal';

import { getIngridients } from '../../utils/burger-api';


import { Typography } from '@ya.praktikum/react-developer-burger-ui-components'

import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import { MainContext } from '../../services/mainContext.js';

const url = 'https://norma.nomoreparties.space/api/ingredients';

const IngredientModal = Modal(IngredientDetails);




const App = () => {

  const [state, setState] = React.useState({
    ingridients: null,
    loading: true,
    bun: "60666c42cc7b410027a1a9b5",
    topping: null,
    orderDetails: null
  })

  useEffect(() => {
    const getProductData = async () => {
      setState({ ...state, loading: true });
      const res = await getIngridients(url);
      const serverData = await res.json();
      let initialBun = {};
      for (let i = 0; i < serverData.data.length; ++i) {
        if (serverData.data[i].type === "bun") {
          serverData.data[i].__v = 2;
          initialBun = serverData.data[i];
          break;
        }
      }
      setState({ ingridients: serverData.data, loading: false, bun: initialBun, topping: [], orderDetails: null });
    }
    getProductData();
  }, [])

  const selectBun = (bun) => {
    if (bun._id !== state.bun._id) {
      const newData = [...state.ingridients];
      newData.forEach((item) => {
        if (item._id === bun._id) item.__v = 2;
        if (item._id === state.bun._id) item.__v = 0;
      })
      setState(prevState => ({ ...prevState, bun: bun, ingridients: newData }));
    }
  }

  const addIngridient = (ingr) => {
    if (ingr.type === "bun") {
      selectBun(ingr);
    }
    else {
      const newIngridients = [...state.ingridients];
      const newTopping = [...state.topping];
      newIngridients.forEach((item) => {
        if (item._id === ingr._id) {
          item.__v += 1;
          newTopping.push(item);
        }
      })
      setState(prevState => ({ ...prevState, ingridients: newIngridients, topping: newTopping }));
    }
  }

  return (
    <div className={`${styles.App} text text_type_main-default`}>
      <AppHeader />
      <div className={styles.content}>
        <MainContext.Provider value={state}>
          {!state.loading && <BurgerIngredients addIngridient={addIngridient} />}
          {!state.loading && <BurgerConstructor/>}
        </MainContext.Provider>
      </div>
    </div>
  )
}

export default App;