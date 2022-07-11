import React from 'react';
import styles from './BurgerIngredients.module.css';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import ListItem from './ListItem.js';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIngridients } from '../../services/actions/getIngridients';
import { changeCurrentIngridient } from '../../services/actions/changeCurrentIngridient';
import { openIngridientForm } from '../../services/actions/openIngridientForm';
import { DEFAULT_INGRIDIENT } from '../../utils/constants';



function BurgerIngredients(props) {

    const thisRef = useRef(null);
    const bunsRef = useRef(null);
    const saucesRef = useRef(null);
    const toppingRef = useRef(null);

    const {request, ingridients, ingridientFormOpen, currentIngridient} = useSelector(store => ({
        request: store.ingridients.request,
        ingridients: store.ingridients.ingridientsData,
        ingridientFormOpen: store.openIngridientForm,
        currentIngridient: store.currentIngridient
    }))

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getIngridients())
    }, [])

    const [current, setCurrent] = useState("Булки");

    const handleScroll = (e) =>{
        e.stopPropagation()
        const scrollPosition = thisRef.current.scrollTop
        const saucesLevel = saucesRef.current.offsetTop-300
        const toppingLevel = toppingRef.current.offsetTop-300
        if (scrollPosition <= saucesLevel) setCurrent("Булки")
        if ((scrollPosition > saucesLevel)&(scrollPosition <= toppingLevel)) setCurrent("Соусы")
        if (scrollPosition > toppingLevel) setCurrent("Начинки")
    }

    const scrollTo = (type) => {
        setCurrent(type)
        if(type === "Булки") bunsRef.current.scrollIntoView({behavior:"smooth"})
        if(type === 'Соусы') saucesRef.current.scrollIntoView({behavior:"smooth"})
        if(type === 'Начинки') toppingRef.current.scrollIntoView({behavior:"smooth"})
    }

    const closeModal = () => {
        dispatch(changeCurrentIngridient(DEFAULT_INGRIDIENT))
        dispatch(openIngridientForm(false))
    }

    return(
        !request&&
        <div className={styles.container}>
        <h2 className={`${styles.title} text text_type_main-large`}>Соберите бургер</h2>
            <div className={styles.selector}>
                <Tab value="Булки" active={current === "Булки"} onClick={scrollTo}>
                    Булки
                </Tab>
                <Tab value="Соусы" active={current === 'Соусы'} onClick={scrollTo}>
                    Соусы
                </Tab>
                <Tab value="Начинки" active={current === 'Начинки'} onClick={scrollTo}>
                    Начинки
                </Tab>
            </div>
        <div className={styles.burgerIngridients} onScroll={handleScroll} ref={thisRef}>
            
            <h3 className={`${styles.title} text text_type_main-medium`} ref={bunsRef}>Булки</h3>
            <div className={styles.ingridientsList} >
                {ingridients.map((ingridient, index) => (
                    ingridient.type === "bun" && (
                        <ListItem data={ingridient} key={ingridient._id}/>
                    )
                ))}
            </div>
            <h3 className={`${styles.title} text text_type_main-medium`} ref={saucesRef}>Соусы</h3>
            <div className={styles.ingridientsList} >
                {ingridients.map((ingridient, index) => (
                    ingridient.type === "sauce" && (
                        <ListItem data={ingridient} key={ingridient._id}/>
                    )
                ))}
            </div>
            <h3 className={`${styles.title} text text_type_main-medium`} ref={toppingRef}>Начинки</h3>
            <div className={styles.ingridientsList} >
                {ingridients.map((ingridient, index) => (
                    ingridient.type === "main" && (
                        <ListItem data={ingridient} key={ingridient._id}/>
                    )
                ))}
                    </div>
            <Modal isOpen={ingridientFormOpen} onClose={closeModal}><IngredientDetails data={currentIngridient}/></Modal>
        </div>
        </div>
    )
}

export default BurgerIngredients;