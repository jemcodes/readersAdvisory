import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToOrder } from '../store/product';

export default function AddToOrder() {
    const dispatch = useDispatch();
    products = useSelector(state => state.product)
    reader = useSelector(state => state.session.reader)
    const product_id = products.id
    const reader_id = reader.id
    const history = useHistory()

    const addProduct = (e) => {
        e.preventDefault()
        const orderPayload = {
            product_id,
            reader_id
        }
        dispatch(addToOrder(orderPayload))
        history.push('/orders')
    }

    const removeProduct = (e) => {
        e.preventDefault()
        const orderPayload = {
            product_id,
            reader_id
        }
        dispatch(removeFromOrder(orderPayload))
        history.push('/orders')
    }

    return (
        <>
            <div>
                <button onClick={addProduct}>Add To Order</button>
            </div>
            <div>
                <button onClick={removeProduct}>Remove From Order</button>
            </div>
        </>
    )

}