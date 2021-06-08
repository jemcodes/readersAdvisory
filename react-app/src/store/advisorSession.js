// constants
const SET_ADVISOR = "session/SET_ADVISOR";
const REMOVE_ADVISOR = "session/REMOVE_ADVISOR";

const setAdvisor = (advisor) => ({
    type: SET_ADVISOR,
    payload: advisor
})

const removeAdvisor = () => ({
    type: REMOVE_ADVISOR,
})

const initialState = { advisor: null };

export const authenticate = () => async (dispatch) => {
    const response = await fetch('/api/auth/', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    if (data.errors) {
        return;
    }

    dispatch(setAdvisor(data))
}

export const advisorLogin = (email, password) => async (dispatch) => {
    const response = await fetch('/api/auth/advisor-login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    const data = await response.json();
    if (data.errors) {
        return data;
    }

    dispatch(setAdvisor(data))
    return {};
}

export const advisorLogout = () => async (dispatch) => {
    const response = await fetch("/api/auth/advisor-logout", {
        headers: {
            "Content-Type": "application/json",
        }
    });

    const data = await response.json();
    dispatch(removeAdvisor());
};


// export const signUp = (email, password) => async (dispatch) => {
//     const response = await fetch("/api/auth/signup", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             email,
//             password,
//         }),
//     });
//     const data = await response.json();
//     if (data.errors) {
//         return data;
//     }

//     dispatch(setUser(data))
//     return {};
// }

export default function advisor(state = initialState, action) {
    switch (action.type) {
        case SET_ADVISOR:
            return { advisor: action.payload }
        case REMOVE_ADVISOR:
            return { advisor: null }
        default:
            return state;
    }
}
