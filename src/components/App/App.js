import React, { useEffect } from 'react';
import styles from './App.module.css';

import Modal from '../Modal/Modal';


import { Typography } from '@ya.praktikum/react-developer-burger-ui-components'

import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
const url = 'https://norma.nomoreparties.space/api/ingredients';

const IngredientModal = Modal(IngredientDetails);


function checkApiError(res) {
  if (res.ok) {
    return res;
  }
  return Promise.reject(`Ошибка сервера -- ${res.status}`)
}

const App = () => {
  const [state, setState] = React.useState({
    data: null,
    loading: true,
    bun: "60666c42cc7b410027a1a9b5"
  })

  useEffect(() => {
    const getProductData = async () => {
      setState({ ...state, loading: true });
      const res = await fetch(url, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => checkApiError(res)).catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      const serverData = await res.json();
      let initialBun = {};
      for (let i=0; i<serverData.data.length; ++i){
        if (serverData.data[i].type === "bun"){
          serverData.data[i].__v=2;
          initialBun = serverData.data[i];
          break;
        }
      }
      setState({ data: serverData.data, loading: false, bun: initialBun });
    }
    getProductData();
  }, [])

  const selectBun = (bun) => {
    if (bun._id !== state.bun._id) {
      const newData = [...state.data];
      newData.forEach((item) => {
        if (item._id === bun._id) item.__v = 2;
        if (item._id === state.bun._id) item.__v = 0;
      })
      setState(prevState => ({...prevState, bun:bun, data: newData}));
    }
  }

  const addIngridient = (ingr) => {
    if (ingr.type === "bun") {
      selectBun(ingr);
    }
    else {
      const newData = [...state.data];
      newData.forEach((item) => {
        if (item._id === ingr._id) item.__v += 1;
      })
      setState(prevState => ({...prevState, data: newData}));
    }
  }

  return (
    <div className={`${styles.App} text text_type_main-default`}>
      <AppHeader />
      <div className={styles.content}>
        {!state.loading && <BurgerIngredients data={state.data} addIngridient={addIngridient} />}
        {!state.loading && <BurgerConstructor data={state.data} bun={state.bun}/>}
      </div>
    </div>
  )
}

export default App;