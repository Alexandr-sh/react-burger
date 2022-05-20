import React from 'react';
import styles from './BurgerIngredients.module.css';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import ListItem from './ListItem.js';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';

const IngridientsDetailsModal = Modal(IngredientDetails);

class BurgerIngredients extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: "Булки",
            ingrFormIsOpened: false,
            selectedIngridient: null
        }
    }
    setCurrent = () => {
    };

    selectIngridient = (data) => {
        this.setState(prevState => ({...prevState, selectedIngridient:data, ingrFormIsOpened: true}));
        this.props.addIngridient(data);
    }


    render() {
        return <div className={styles.burgerIngridients}>
            <h2 className={`${styles.title} text text_type_main-large`}>Соберите бургер</h2>
            <div className={styles.selector}>
                <Tab value="Булки" active={this.state.current === "Булки"} onClick={this.setCurrent}>
                    Булки
                </Tab>
                <Tab value="Соусы" active={this.state.current === 'Соусы'} onClick={this.setCurrent}>
                    Соусы
                </Tab>
                <Tab value="Начинки" active={this.state.current === 'Начинки'} onClick={this.setCurrent}>
                    Начинки
                </Tab>
            </div>
            <h3 className={`${styles.title} text text_type_main-medium`}>Булки</h3>
            <div className={styles.ingridientsList} >
                {this.props.data.map((ingridient, index) => (
                    ingridient.type === "bun" ? (
                        <ListItem data={ingridient} key={ingridient._id} selectIngridient={this.selectIngridient}/>
                    ) : (
                        null
                    )
                ))}
            </div>
            <h3 className={`${styles.title} text text_type_main-medium`}>Соусы</h3>
            <div className={styles.ingridientsList} >
                {this.props.data.map((ingridient, index) => (
                    ingridient.type === "sauce" ? (
                        <ListItem data={ingridient} key={ingridient._id} selectIngridient={this.selectIngridient}/>
                    ) : (
                        null
                    )
                ))}
            </div>
            <h3 className={`${styles.title} text text_type_main-medium`}>Начинки</h3>
            <div className={styles.ingridientsList} >
                {this.props.data.map((ingridient, index) => (
                    ingridient.type === "main" ? (
                        <ListItem data={ingridient} key={ingridient._id} selectIngridient={this.selectIngridient}/>
                    ) : (
                        null
                    )
                ))}
            </div>
            <IngridientsDetailsModal data = {this.state.selectedIngridient} isOpened={this.state.ingrFormIsOpened}/>
        </div>;
    }
}

export default BurgerIngredients;