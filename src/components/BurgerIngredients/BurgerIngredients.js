import React from 'react';
import styles from './BurgerIngredients.module.css';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import ListItem from './ListItem.js';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { MainContext } from '../../services/mainContext.js';

const IngridientsDetailsModal = Modal(IngredientDetails);

function BurgerIngredients(props) {
    const [ingrFormIsOpened, openIngrForm] = React.useState(false);
    const [selectedIngridient, setIngridient] = React.useState(null);
    const [current, setCurrent] = React.useState("Булки");

    const state = useContext(MainContext);

    const selectIngridient = (data) => {
        setIngridient(data);
        openIngrForm(true);
        props.addIngridient(data)
    }

    return(
        <div className={styles.burgerIngridients}>
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
                {state.ingridients.map((ingridient, index) => (
                    ingridient.type === "bun" && (
                        <ListItem data={ingridient} key={ingridient._id} selectIngridient={selectIngridient}/>
                    )
                ))}
            </div>
            <h3 className={`${styles.title} text text_type_main-medium`}>Соусы</h3>
            <div className={styles.ingridientsList} >
                {state.ingridients.map((ingridient, index) => (
                    ingridient.type === "sauce" && (
                        <ListItem data={ingridient} key={ingridient._id} selectIngridient={selectIngridient}/>
                    )
                ))}
            </div>
            <h3 className={`${styles.title} text text_type_main-medium`}>Начинки</h3>
            <div className={styles.ingridientsList} >
                {state.ingridients.map((ingridient, index) => (
                    ingridient.type === "main" && (
                        <ListItem data={ingridient} key={ingridient._id} selectIngridient={selectIngridient}/>
                    )
                ))}
            </div>
            <IngridientsDetailsModal data = {selectedIngridient} isOpened={ingrFormIsOpened}/>
        </div>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.array
  }; 

export default BurgerIngredients;