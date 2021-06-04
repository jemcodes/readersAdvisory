import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

const ProtectedRoute = props => {
  const reader = useSelector(state => state.session.reader)
  
  return (
    <Route {...props}>
      {(reader) ? props.children  : <Redirect to="/login" />}
    </Route>
  )
};


export default ProtectedRoute;
