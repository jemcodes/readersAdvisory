import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

const ProtectedRoute = props => {
  const reader = useSelector(state => state.session.reader)
  const advisor = useSelector(state => state.session.advisor)
  
  // TODO: redirect to advisor login for advisor routes
  return (
    <Route {...props}>
      {(reader || advisor) ? props.children  : <Redirect to="/login" />}
    </Route>
  )
};


export default ProtectedRoute;
