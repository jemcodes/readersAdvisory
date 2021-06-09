import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useParams, NavLink } from 'react-router-dom';
import { showProduct } from '../store/product';

const ShowProducts = () => {
    const dispatch = useDispatch();
    const reader = useSelector(state => state.session.reader);
    const products = useSelector(state => state.product)
    let authors;

    useEffect(() => {
        dispatch(showProducts())
    }, [dispatch])

    return (
        <div id="product-container">
            <div id="product-contents">
                <h2 id="product-header">product</h2>
                {product.product_type ? (
                    <div className="product-list-div">
                        <ul>
                            <li className="product-list-items">Title: {product.title}</li>
                            <li className="product-list-items">Cover Type: {product.cover_type}</li>
                            <li className="product-list-items">Genres: {product.genres}</li>
                            <li className="product-list-items">Author: {product.author}</li>
                        </ul>
                        <NavLink to={`/readers/${reader_id}/product/update`}>
                            <button id="update-product-btn" type="button">
                                Add to order
                    </button>
                        </NavLink>
                    </div>
                ) : (
                    <div className="product-list-div">
                        <h1>Start a new product!</h1>
                        <NavLink to={`/readers/${reader_id}/product/new`}>
                            <button id="start-product-btn" type="button">
                                Start New product
                        </button>
                        </NavLink>
                    </div>
                )}
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default ShowProducts;