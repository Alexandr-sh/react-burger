import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { useEffect, useRef } from 'react';
import { useDrag, useDrop  } from 'react-dnd';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { removeTopping } from '../../services/actions/changeTopping';
import style from './BurgerConstructor.module.css';

function BurgerConstructorElement({index,type,isLocked,text,price,thumbnail,moveListItem,_id}){

    const dispatch = useDispatch();

    const [{ isDragging }, dragRef] = useDrag({
        type: "constructorElement",
        item: { index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const [spec, dropRef] = useDrop({
        accept: "constructorElement",
        hover: (item, monitor) => {
            const dragIndex = item.index
            const hoverIndex = index
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return
            if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return

            moveListItem(dragIndex, hoverIndex)
            item.index = hoverIndex
        },
    })

    const ref = useRef(null)
    const dragDropRef = dragRef(dropRef(ref))

    const handleClose = () => {
        dispatch(removeTopping({
            index:index,
            _id:_id
        }))
    }


    return (
        <div ref={dragDropRef}>
            <ConstructorElement
                type={type}
                isLocked={isLocked}
                text={text}
                price={price}
                thumbnail={thumbnail}
                handleClose={handleClose}
            />
        </div>
    )
}

export default BurgerConstructorElement
