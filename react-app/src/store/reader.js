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


// REDUCERS 

const initialState = {
    list: [],
};

export default function reader(state = initialState, action) {
    switch(action.type) {
        case GET_PREFERENCES:
            const nextState = {}
            return {
                ...state,
                ...nextState
            }
        default:
            return state;
    }
}


