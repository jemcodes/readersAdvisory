// ACTIONS
const GET_PRODUCTS = "products/GET_PRODUCTS"
const ADD_PRODUCTS = "products/ADD_PRODUCTS";
const REMOVE_PRODUCTS = "products/REMOVE_PRODUCTS";


// ACTION CREATORS
const showProducts = () => ({
    type: GET_PRODUCTS
})

const addToOrder = (orderPayload) => ({
    type: ADD_PRODUCTS,
    payload: orderPayload
})

const removeFromOrder = (orderPayload) => ({
    type: REMOVE_PRODUCTS,
    payload: orderPayload
})

// THUNK ACTIONS
export const showAllProducts = () => async (dispatch) => {
    const response = await fetch(`/api/products`);
    if (response.ok) {
        const data = await response.json();
        dispatch(showProducts(data))
    }
}

export const addingToOrder = (orderPayload) => async (dispatch) => {
    const { advisor_id } = orderPayload
    const response = await fetch(`/api/readers/${advisor_id}/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(orderPayload)
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(addToOrder(data))
    }
}

export const removingFromOrder = (orderPayload) => async (dispatch) => {
    const { advisor_id } = orderPayload
    const response = await fetch(`/api/advisors/${advisor_id}/orders`, {
        method: "DELETE"
    });

    if (response.ok) {
        dispatch(removeFromOrder(orderPayload));
        return orderPayload;
    }
}

// REDUCERS 

const initialState = {
    products: undefined
};

export default function product(state = initialState, action) {
    let nextState = {}
    switch (action.type) {
        case GET_PRODUCTS:
            nextState = {
                title: action.payload.title,
                cover_type: action.payload.cover_type,
                genres: action.payload.genres,
                author: action.payload.author,
            }

            return {
                ...state,
                ...nextState
            }
        case ADD_PRODUCTS:
            return {
                ...state,
                ...nextState,
            }

        case REMOVE_PRODUCTS:
            return { ...initialState }
        default:
            return state;
    }
}