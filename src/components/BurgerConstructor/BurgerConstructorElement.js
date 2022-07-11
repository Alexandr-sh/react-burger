import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { useEffect, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import PropTypes from 'prop-types';
import { removeTopping } from '../../services/actions/changeTopping';
import style from './BurgerConstructorElement.module.css'

function BurgerConstructorElement(props) {


    const dispatch = useDispatch();

    const [{ isDragging }, dragRef] = useDrag({
        type: "constructorElement",
        item: { index: props.index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const [spec, dropRef] = useDrop({
        accept: "constructorElement",
        hover: (item, monitor) => {
            const dragIndex = item.index
            const hoverIndex = props.index
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return
            if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return

            props.moveListItem(dragIndex, hoverIndex)
            item.index = hoverIndex
        },
    })

    const ref = useRef(null)
    const dragDropRef = dragRef(dropRef(ref))

    const handleClose = () => {
        dispatch(removeTopping({
            index: props.index,
            _id: props._id
        }))
    }


    return (
        <div ref={dragDropRef} className={style.element}>
            <ConstructorElement
                isLocked={props.isLocked}
                text={props.text}
                price={props.price}
                thumbnail={props.thumbnail}
                handleClose={handleClose}
            />
        </div>
    )
}

BurgerConstructorElement.propTypes = {
    index: PropTypes.number.isRequired,
    moveListItem: PropTypes.func.isRequired,
    _id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired
};

export default BurgerConstructorElement
