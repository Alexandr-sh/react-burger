import React from 'react';
import styles from './IngredientDetails.module.css'
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import Spec from './Spec';


class IngredientDetails extends React.Component {
    render() {
        return (<>
            {this.props.isOpened && (
                <div className={styles.container}>
                    <ModalOverlay closeModal={this.props.closeModal}/>
                    <div className={styles.ingredientDetails}>
                        <button className={styles.button} onClick={this.props.closeModal}><CloseIcon type="primary" /></button>
                        <h2 className={`${styles.header} text text_type_main-large`}>Детали ингридиента</h2>
                        <img src={this.props.data.image} className={styles.img} />
                        <h3 className={`${styles.name} text text_type_main-medium`}>{this.props.data.name}</h3>
                        <ul className={styles.specs}>
                            <Spec name="Калории,ккал" count={this.props.data.calories}></Spec>
                            <Spec name="Белки, г" count={this.props.data.proteins}></Spec>
                            <Spec name="Жиры, г" count={this.props.data.fat}></Spec>
                            <Spec name="Углеводы, г" count={this.props.data.carbohydrates}></Spec>
                        </ul>
                    </div>
                </div>
            )}
        </>)
    }
}

IngredientDetails.propTypes = {
    isOpened: PropTypes.bool,
    closeModal: PropTypes.func,
    data: PropTypes.object
  }; 

export default IngredientDetails;