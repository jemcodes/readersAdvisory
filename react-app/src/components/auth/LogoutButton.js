import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import { Redirect } from 'react-router-dom';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    dispatch(logout());
    return <Redirect to="/" />;
  };

  return <button className="nav-bar-buttons" onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
