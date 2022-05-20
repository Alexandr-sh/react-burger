import React from 'react';
import styles from './IngredientDetails.module.css'
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

class IngredientDetails extends React.Component {
    render() {
        /*console.log(this.props.isOpened)*/
        return (<>
            {this.props.isOpened && (
                <div className={styles.container}>
                    <ModalOverlay closeModal={this.props.closeModal}/>
                    <div className={styles.ingredientDetails}>
                        <button className={styles.button} onClick={this.props.closeModal}><CloseIcon type="primary" /></button>
                        <h2 className={`${styles.header} text text_type_main-large`}>Детали ингридиента</h2>
                        <img src={this.props.data.image} className={styles.img} />
                        <h3 className={`${styles.name} text text_type_main-medium`}>{this.props.data.name}</h3>
                        <div className={styles.specs}>
                            <div className={styles.spec}>
                                <div className={`${styles.specName} text text_type_main-default text_color_inactive`}>Калории,ккал</div>
                                <div className={`${styles.specCount} text text_type_digits-default text_color_inactive`}>{this.props.data.calories}</div>
                            </div>
                            <div className={styles.spec}>
                                <div className={`${styles.specName} text text_type_main-default text_color_inactive`}>Белки, г</div>
                                <div className={`${styles.specCount} text text_type_digits-default text_color_inactive`}>{this.props.data.proteins}</div>
                            </div>
                            <div className={styles.spec}>
                                <div className={`${styles.specName} text text_type_main-default text_color_inactive`}>Жиры, г</div>
                                <div className={`${styles.specCount} text text_type_digits-default text_color_inactive`}>{this.props.data.fat}</div>
                            </div>
                            <div className={styles.spec}>
                                <div className={`${styles.specName} text text_type_main-default text_color_inactive`}>Углеводы, г</div>
                                <div className={`${styles.specCount} text text_type_digits-default text_color_inactive`}>{this.props.data.carbohydrates}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>)
    }
}

export default IngredientDetails;