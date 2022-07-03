import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { useEffect, useRef, forwardRef } from 'react';

function BurgerConstructorElement(props){

    const inputRef = useRef(null);

    return (
        <div ref={inputRef}>
            <ConstructorElement
                type={props.type}
                isLocked={props.isLocked}
                text={props.text}
                price={props.price}
                thumbnail={props.thumbnail}
                handleClose={props.handleClose}
            />
        </div>
    )
}

export default BurgerConstructorElement

/*const BurgerConstructorElement = forwardRef((props, thisRef) => {
    return (
        <ConstructorElement
                type={props.type}
                isLocked={props.isLocked}
                text={props.text}
                price={props.price}
                thumbnail={props.thumbnail}
                ref={thisRef}
                handleClose={props.handleClose}
            />
    )
})

export default BurgerConstructorElement*/
