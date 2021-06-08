import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

const ProtectedRoute = props => {
  const reader = useSelector(state => state.session.reader)
  const advisor = useSelector(state => state.session.advisor)
  
  return (
    <Route {...props}>
      {(reader) ? props.children  : <Redirect to="/login" />}
      {(advisor) ? props.children : <Redirect to="/advisor-login" />}
    </Route>
  )
};


export default ProtectedRoute;
