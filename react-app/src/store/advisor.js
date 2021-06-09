// ACTIONS
const GET_ADVISEES = "readers/GET_ADVISEES";

// ACTION CREATORS
const getAdvisees = (advisor_id) => ({
    type: GET_ADVISEES,
    payload: advisor_id
})

// THUNK ACTIONS
export const showAdvisees = (advisor_id) => async (dispatch) => {
    const response = await fetch(`/api/advisors/${advisor_id}/advisees`);
    if (response.ok) {
        const data = await response.json();
        dispatch(getAdvisees(data))
    }
}

// REDUCERS 

const initialState = {
    advisees: undefined
};

export default function advisor(state = initialState, action) {
    let nextState = {}
    switch (action.type) {
        case GET_PREFERENCES:
            nextState = {
                advisees: {
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
