import React from 'react';
import auth from "../services/authService";

function Logout(props) {
    auth.logout(); 
    window.location = "/";
    return null;
}

export default Logout;