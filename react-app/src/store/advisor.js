// ACTIONS
const GET_ORDERS = "readers/GET_ORDERS";

// ACTION CREATORS
const getOrders = (advisor_id) => ({
    type: GET_ORDERS,
    payload: advisor_id
})

// THUNK ACTIONS
export const showOrders = (advisor_id) => async (dispatch) => {
    const response = await fetch(`/api/advisors/${advisor_id}/orders`);
    if (response.ok) {
        const data = await response.json();
        dispatch(getOrders(data))
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
                    user_name: action.payload.user_name,
                    cover_choices: action.payload.cover_choices,
                    genre_choices: action.payload.genre_choices,
                    author_choices: action.payload.author_choices,
                    other_choices: action.payload.other_choices,
                    reader_id: action.payload.reader_id
                }
            }

            return {
                ...state,
                ...nextState
            }
        default:
            return state;
    }
}
