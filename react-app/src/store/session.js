// constants
const SET_READER = "session/SET_READER";
const SET_ADVISOR = "session/SET_ADVISOR";
const REMOVE_USER = "session/REMOVE_USER";

const setReader = (reader) => ({
    type: SET_READER,
    payload: reader
});

const setAdvisor = (advisor) => ({
    type: SET_ADVISOR,
    payload: advisor
})

const removeUser = () => ({
    type: REMOVE_USER,
})

const initialState = { reader: null, advisor: null };

export const authenticate = () => async (dispatch) => {
    const response = await fetch('/api/auth/',{
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (data.errors) {
        return;
    }
    // TODO: account for advisor
    if (data.type === "Reader") {
      dispatch(setReader(data))
    } else if (data.type === "Advisor") {
      dispatch(setAdvisor(data))
    }
  }
  
  export const login = (email, password) => async (dispatch)  => {
    const response = await fetch('/api/auth/login', {
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
    
    dispatch(setReader(data))
    return {};
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
  
  export const logout = () => async (dispatch) => {
    const response = await fetch("/api/auth/logout", {
      headers: {
        "Content-Type": "application/json",
      }
    });
    
    const data = await response.json();
    dispatch(removeUser());
  };
  
  
  export const signUp = (email, password) => async (dispatch)  => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    if (data.errors) {
        return data;
    }
    
    dispatch(setReader(data))
    return {};
  }

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case SET_READER:
            return {
              ...state,
              reader: action.payload
            }
        case SET_ADVISOR:
            return {
              ...state,
              advisor: action.payload
            }
        case REMOVE_USER:
            return {
              ...initialState
            }
        default:
            return state;
    }
}
