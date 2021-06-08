// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
const SET_ADVISOR = "session/SET_ADVISOR";
const REMOVE_ADVISOR = "session/REMOVE_ADVISOR";

const setUser = (user) => ({
    type: SET_USER,
    payload: user
});

const setAdvisor = (advisor) => ({
  type: SET_ADVISOR,
  payload: advisor
})

const removeUser = () => ({
    type: REMOVE_USER,
})

const removeAdvisor = () => ({
  type: REMOVE_ADVISOR,
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
    
    dispatch(setUser(data))
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
    
    dispatch(setUser(data))
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
  

export const advisorLogout = () => async (dispatch) => {
  const response = await fetch("/api/auth/advisor-logout", {
    headers: {
      "Content-Type": "application/json",
    }
  });

  const data = await response.json();
  dispatch(removeAdvisor());
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
    
    dispatch(setUser(data))
    return {};
  }

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {reader: action.payload}
        case SET_ADVISOR:
          return { advisor: action.payload }
        case REMOVE_USER:
            return {reader: null}
        case REMOVE_ADVISOR:
          return { advisor: null }
        default:
            return state;
    }
}
