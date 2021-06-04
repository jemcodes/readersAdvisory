// ACTIONS
const SET_PREFERENCES = "readers/SET_PREFERENCES";
const GET_PREFERENCES = "readers/GET_PREFERENCES";
const REMOVE_PREFERENCES = "readers/PREFERENCES";


// ACTION CREATORS
const setPreferences = (readerPreferences) => ({
    type: SET_PREFERENCES,
    payload: readerPreferences
});

const getPreferences = (readerPreferences) => ({
    type: GET_PREFERENCES,
    payload: readerPreferences
})

const removPreferences = () => ({
    type: REMOVE_PREFERENCES,
})

// THUNK ACTIONS
export const showPreferences = (id) => async (dispatch) => {
    const response = await fetch(`api/readers/${id}/preferences`);
    if (response.ok) {
        const data = await response.json();
        dispatch(getPreferences(data))
    }
}

export const capturePreferences = (readerPreferences) => async (dispatch) => {
    const response = await fetch(`/api/readers/`, {
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


// REDUCERS 

const initialState = {
    list: [],
    preferences: undefined
};

export default function reader(state = initialState, action) {
    switch(action.type) {
        case GET_PREFERENCES:
            const nextState = {preferences: {
                user_name: action.payload.user_name,
                cover_choices: action.payload.cover_choices,
                genre_choices: action.payload.genre_choices,
                author_choices: action.payload.author_choices,
                other_choices: action.payload.other_choices}
            }

            return {
                ...state,
                ...nextState
            }
        case SET_PREFERENCES:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}


