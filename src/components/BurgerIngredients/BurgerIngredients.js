import React from 'react';
import styles from './BurgerIngredients.module.css';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import ListItem from './ListItem.js';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIngridients } from '../../services/actions/getIngridients';

const IngridientsDetailsModal = Modal(IngredientDetails);

function BurgerIngredients(props) {

    const {request, ingridients, openIngridientForm} = useSelector(store => ({
        request: store.ingridients.request,
        ingridients: store.ingridients.ingridientsData,
        openIngridientForm: store.openIngridientForm
    }))

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getIngridients())
    }, [])

    const [current, setCurrent] = React.useState("Булки");

    const handleScroll = (e) =>{
        console.log(e)
    }

    return(
        !request&&
        <div className={styles.burgerIngridients} onScroll={handleScroll}>
            <h2 className={`${styles.title} text text_type_main-large`}>Соберите бургер</h2>
            <div className={styles.selector}>
                <Tab value="Булки" active={current === "Булки"} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <h3 className={`${styles.title} text text_type_main-medium`}>Булки</h3>
            <div className={styles.ingridientsList} >
                {ingridients.map((ingridient, index) => (
                    ingridient.type === "bun" && (
                        <ListItem data={ingridient} key={ingridient._id}/>
                    )
                ))}
            </div>
            <h3 className={`${styles.title} text text_type_main-medium`}>Соусы</h3>
            <div className={styles.ingridientsList} >
                {ingridients.map((ingridient, index) => (
                    ingridient.type === "sauce" && (
                        <ListItem data={ingridient} key={ingridient._id}/>
                    )
                ))}
            </div>
            <h3 className={`${styles.title} text text_type_main-medium`}>Начинки</h3>
            <div className={styles.ingridientsList} >
                {ingridients.map((ingridient, index) => (
                    ingridient.type === "main" && (
                        <ListItem data={ingridient} key={ingridient._id}/>
                    )
                ))}
            </div>
            {<IngridientsDetailsModal/>}
        </div>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.array
  }; 

export default BurgerIngredients;