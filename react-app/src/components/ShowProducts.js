import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useParams, NavLink } from 'react-router-dom';
import { showAllProducts } from '../store/product';

const ShowProducts = () => {
    const dispatch = useDispatch();
    const reader = useSelector(state => state.session.reader);
    const product = useSelector(state => state.product)
    let authors;

    useEffect(() => {
        dispatch(showAllProducts())
    }, [dispatch])

    return (
        <div id="product-container">
            <div id="product-contents">
                <h2 id="product-header">Products</h2>
                    <div className="product-list-div">
                        <ul>
                            <li className="product-list-items">Title: {product.title}</li>
                            <li className="product-list-items">Cover Type: {product.cover_type}</li>
                            <li className="product-list-items">Genres: {product.genres}</li>
                            <li className="product-list-items">Author: {product.author}</li>
                        </ul>
                    </div>
            </div>
        </div>
    );
};

export default ShowProducts;