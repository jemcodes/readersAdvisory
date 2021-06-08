// ACTIONS
const SET_SUBSCRIPTION = "readers/SET_SUBSCRIPTION";
const GET_SUBSCRIPTION = "readers/GET_SUBSCRIPTION";
const EDIT_SUBSCRIPTION = "readers/EDIT_SUBSCRIPTION";
const DELETE_SUBSCRIPTION = "readers/DELETE_SUBSCRIPTION";


// ACTION CREATORS
const setSubscription = (subscriptionPayload) => ({
    type: SET_SUBSCRIPTION,
    payload: subscriptionPayload
});

const getSubscription = (reader_id) => ({
    type: GET_SUBSCRIPTION,
    payload: reader_id
})

const editSubscription = (editedSubscription) => ({
    type: EDIT_SUBSCRIPTION,
    payload: editedSubscription
})

const removeSubscription = (subscriptionPayload) => ({
    type: DELETE_SUBSCRIPTION,
    payload: subscriptionPayload
})

const initialState = {
    subscription_type: undefined,
    payment_method: undefined,
    reader_id: undefined
};

// THUNK ACTIONS
export const showSubscription = (reader_id) => async (dispatch) => {
    const response = await fetch(`/api/readers/${reader_id}/subscriptions`);
    if (response.ok) {
        const data = await response.json();
        dispatch(getSubscription(data));
    } else {
        dispatch(getSubscription(initialState));
    }
}

export const captureSubscription = (subscriptionPayload) => async (dispatch) => {
    const { reader_id } = subscriptionPayload
    console.log('$$$$$$$$$$$$$$$$$$$', subscriptionPayload)
    const response = await fetch(`/api/readers/${reader_id}/subscriptions`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(subscriptionPayload)
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(setSubscription(data))
    }
}

export const updateSubscription = (editedSubscription) => async (dispatch) => {
    const { reader_id } = editedSubscription
    const response = await fetch(`/api/readers/${reader_id}/subscriptions`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(editedSubscription)
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(editSubscription(data))
    }
}

export const deleteSubscription = (subscriptionPayload) => async (dispatch) => {
    const { reader_id } = subscriptionPayload
    const response = await fetch(`/api/readers/${reader_id}/subscriptions`, {
        method: "DELETE"
    });

    if (response.ok) {
        dispatch(removeSubscription(subscriptionPayload));
        return subscriptionPayload;
    }
}

// REDUCERS 


export default function subscription(state = initialState, action) {
    let nextState = {}
    switch (action.type) {
        case GET_SUBSCRIPTION:
            nextState = {
                subscription_type: action.payload.subscription,
                payment_method: action.payload.payment,
                reader_id: action.payload.reader_id
            }

            return {
                ...state,
                ...nextState
            }
        case SET_SUBSCRIPTION:
            return { ...state, ...action.payload };

        case EDIT_SUBSCRIPTION:
            nextState = {
                subscription_type: action.payload.subscription,
                payment_method: action.payload.payment,
                reader_id: action.payload.reader_id
            }

            return {
                ...state,
                ...nextState
            };
        case DELETE_SUBSCRIPTION:
            return { ...initialState }


        default:
            return state;
    }
}


