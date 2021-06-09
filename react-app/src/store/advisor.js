// ACTIONS
const GET_ORDERS = "advisors/GET_ORDERS";
const CREATE_ORDERS = "advisors/CREATE_ORDERS";
const EDIT_ORDERS = "advisors/EDIT_ORDERS";
const DELETE_ORDERS = "advisors/DELETE_ORDERS";

// ACTION CREATORS
const createOrder = (orderPayload) => ({
    type: CREATE_ORDERS,
    payload: orderPayload
})

const getOrders = (advisor_id) => ({
    type: GET_ORDERS,
    payload: advisor_id
})

const editOrder = (editedOrder) => ({
    type: EDIT_ORDERS,
    payload: editedOrder
})

const removeOrder = (orderPayload) => ({
    type: DELETE_ORDERS,
    payload: orderPayload
})

// THUNK ACTIONS
export const showOrders = (advisor_id) => async (dispatch) => {
    const response = await fetch(`/api/advisors/${advisor_id}/orders`);
    if (response.ok) {
        const data = await response.json();
        dispatch(getOrders(data))
    }
}

export const captureOrder = (orderPayload) => async (dispatch) => {
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
        dispatch(createOrder(data))
    }
}

export const updateOrder = (editedOrder) => async (dispatch) => {
    const { advisor_id, order_id } = editedOrder
    const response = await fetch(`/api/advisors/${advisor_id}/orders/${order_id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(editedOrder)
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(updateOrder(data))
    }
}

export const deleteSubscription = (orderPayload) => async (dispatch) => {
    const { reader_id } = subscriptionPayload
    const response = await fetch(`/api/advisors/${advisor_id}/orders/${order_id}`, {
        method: "DELETE"
    });

    if (response.ok) {
        dispatch(removeOrder(orderPayload));
        return subscriptionPayload;
    }
}

// REDUCERS 

const initialState = {
    orders: undefined
};

export default function advisor(state = initialState, action) {
    let nextState = {}
    switch (action.type) {
        case GET_ORDERS:
            nextState = {
                orders: {
                    cover_options: action.payload.cover_options,
                    genre_options: action.payload.genre_options,
                    author_options: action.payload.author_options,
                    reader_id: action.payload.reader_id,
                    advisor_id: action.payload.advisor_id,
                    product_id: action.payload.product_id
                }
            }

            return {
                ...state,
                ...nextState
            }
        case CREATE_ORDERS:
            return { ...state, ...action.payload}
        default:
            return state;
    }
}
