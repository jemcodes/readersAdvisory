import React from "react";
import { useDispatch } from "react-redux";
import { advisorLogout } from "../../store/session";

const AdvisorLogoutButton = () => {
    const dispatch = useDispatch();
    const onLogout = async (e) => {
        dispatch(advisorLogout());
    };

    return <button className="nav-bar-buttons" onClick={onLogout}>Advisor Logout</button>;
};

export default AdvisorLogoutButton;
