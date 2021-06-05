// ACTIONS
const SET_PREFERENCES = "readers/SET_PREFERENCES";
const GET_PREFERENCES = "readers/GET_PREFERENCES";
const EDIT_PREFERENCES = "readers/EDIT_PREFERENCES";
const REMOVE_PREFERENCES = "readers/PREFERENCES";
// const DELETE_ACCOUNT = "readers/DELETE_ACCOUNT";


// ACTION CREATORS
const setPreferences = (readerPreferences) => ({
    type: SET_PREFERENCES,
    payload: readerPreferences
});

const getPreferences = (reader_id) => ({
    type: GET_PREFERENCES,
    payload: reader_id
})

const editPreferences = (editedPayload) => ({
    type: EDIT_PREFERENCES,
    payload: editedPayload
})

const removePreferences = (deletePayload) => ({
    type: REMOVE_PREFERENCES,
    payload: deletePayload
})

// const removeAccount = (readerPayload) => ({
//     type: DELETE_ACCOUNT,
//     payload: readerPayload
// })

// THUNK ACTIONS
export const showPreferences = (reader_id) => async (dispatch) => {
    const response = await fetch(`/api/readers/${reader_id}/preferences`);
    if (response.ok) {
        const data = await response.json();
        dispatch(getPreferences(data))
    }
}

export const capturePreferences = (readerPreferences) => async (dispatch) => {
    const { reader_id } = readerPreferences
    const response = await fetch(`/api/readers/${reader_id}/preferences`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(readerPreferences)
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(setPreferences(data))
    }
}

export const updatePreferences = (editedPayload) => async (dispatch) => {
    const { reader_id } = editedPayload
    const response = await fetch(`/api/readers/${reader_id}/preferences`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(editedPayload)
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(editPreferences(data))
    }
}

export const deletePreferences = (deletePayload) => async (dispatch) => {
    const { reader_id } = deletePayload
    const response = await fetch(`/api/readers/${reader_id}/preferences`, {
        method: "DELETE"
    });

    if (response.ok) {
        dispatch(removePreferences(reader_id));
        return reader_id;
    }
}

// export const deleteAccount = (readerPayload) => async (dispatch) => {
//     const { reader_id } = readerPayload
//     const response = await fetch(`/api/readers/${reader_id}`, {
//         method: "DELETE"
//     });

//     if (response.ok) {
//         dispatch(removeAccount(reader_id));
//         return reader_id;
//     }
// }


// REDUCERS 

const initialState = {
    list: [],
    preferences: undefined
};

export default function reader(state = initialState, action) {
    let nextState = {}
    switch(action.type) {
        case GET_PREFERENCES:
            nextState = {
                preferences: {
                    user_name: action.payload.user_name,
                    cover_choices: action.payload.cover_choices,
                    genre_choices: action.payload.genre_choices,
                    author_choices: action.payload.author_choices,
                    other_choices: action.payload.other_choices,
                    reader_id: action.payload.reader_id
               }   }

            return {
                ...state,
                ...nextState
            }
        case SET_PREFERENCES:
            return { ...state, ...action.payload };

        case EDIT_PREFERENCES:
            return { ...state, ...action.payload };

        case REMOVE_PREFERENCES:
            const lastState = { ...state }
            delete lastState[action.payload]
            return lastState

        // case DELETE_ACCOUNT:
        //     let finalState = { ...state }
        //     delete finalState[action.payload]
        //     return finalState

        default:
            return state;
    }
}


