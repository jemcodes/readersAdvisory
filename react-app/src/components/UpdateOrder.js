import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { showOrders, updateOrders, deleteOrders } from '../store/advisor';

const UpdateOrderForm = () => {
    const { order_id } = useParams();

    const reader = useSelector(state => state.session.reader);
    const advisor = useSelector(state => state.session.advisor);
    const product = useSelector(state => state.product);
    const orders = useSelector(state => state.order);

    const [cover_options, setCoverOptions] = useState("");
    const [genre_options, setGenreOptions] = useState("");
    const [author_options, setAuthorOptions] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

  const updateCoverOptions = (e) => {
        setCoverOptions(e.target.value);
    };

    const updateGenreOptions = (e) => {
        setGenreOptions(e.target.value);
    };

    const updateAuthorOptions = (e) => {
        setAuthorOptions(e.target.value);
    };

    useEffect(() => {
        dispatch(updateOrder(order_id))
    }, [dispatch, order_id])

    useEffect(() => {
        if (orders) {
            setCoverOptions(order.cover_options)
            setGenreOptions(order.genre_options)
            setAuthorOptions(order.author_options)
        }
    }, [orders])


    const handlSubmit = async (e) => {
        e.preventDefault();
        const reader_id = reader.id
        const editedOrder = {
            cover_options,
            genre_options,
            author_options,
            reader_id,
            advisor_id,
            product_id
        }
        await dispatch(updateOrders(editedOrder))
        history.push(`/orders`)
    };

    const onDeleteOrder = async () => {
        const orderDeleted = await dispatch(deleteOrders(orders))
        if (orderDeleted) {
            history.push("/orders")
        }
    }

   return (
        <div id="update-orders-container">
            <form id="update-orders-contents" onSubmit={handlSubmit}>
                <h3 id="update-orders-header">Update orders</h3>
                <div className="update-order-list-div">
                    <label className="update-order-list-items">Please select which cover type you prefer</label>
                    {['Hardcover', 'Paperback', 'No order'].map((choice) => (
                        <>
                            <input className="update-order-inputs"
                                id={choice}
                                type="radio"
                                name="cover_choices"
                                onChange={updateCoverOptions}
                                value={choice}
                                required={true}
                            ></input>
                            <label htmlFor={choice}>{choice}</label>
                        </>
                    ))}
                </div>
                <div className="update-order-list-div">
                    <label className="update-order-list-items">Please select which genres you enjoy</label>
                    {['Biography', 'Classic Literature', 'Contemporary Literature', 'Crime', 'Fantasy', 'Graphic Novels & Comics', 'LGBTQ+ Fiction', 'Historical Fiction', 'Horror', 'Humor & Comedy', 'Memoir', 'Mystery', 'Nonfiction', 'Paranormal', 'Philosophical', 'Poetry', 'Pulp Fiction', 'Romance', 'Science Fiction', 'Speculative Fiction', 'Suspense', 'Thriller', 'Young Adult'].map((genre) => (
                        <>
                            <input className="update-order-text"
                                type="checkbox"
                                name="genre_choices"
                                onChange={updateGenreOptions}
                                value={genre}
                                required={true}
                            ></input>
                            <label htmlFor={genre}>{genre}</label>
                        </>
                    ))}
                </div>
                <div className="update-order-list-div">
                    <label className="update-order-list-items">Please list some authors you like, separated by commas</label>
                    <textarea className="update-order-text"
                        // type="text"
                        name="author_choices"
                        onChange={updateAuthorOptions}
                        value={author_options}
                        required={true}
                    />
                </div>
                <div id="update-orders-btns">
                    <button id="update-orders-btn" type="submit">Update this order!</button>
                    <button id="delete-orders-btn" type="button" onClick={onDeleteorders}>Delete This Order</button>
                    {/* <button type="button" onClick={onDeleteAccount}>Delete This Account</button> */}
                </div>
            </form>
        </div>
    );
};

export default UpdateOrderForm;
