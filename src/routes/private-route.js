import React from "react";
import { Outlet  , Navigate } from 'react-router-dom';
import PropTypes from "prop-types";

function PrivateRoute(){
    const user = localStorage.getItem('fenixrh:userData')

    if(!user){
        return <Navigate to='/'/>
    }
    return <Outlet />
}

export default PrivateRoute

PrivateRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}