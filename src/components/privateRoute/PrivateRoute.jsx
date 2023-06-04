import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const currentUser  = JSON.parse(localStorage.getItem("currentUser"))
    const {isAuth} = useSelector(state=>state.userLoginReducer)

  return  currentUser || isAuth ?children:<Navigate to="/login" state={location.pathname} replace={true}/>
}

export default PrivateRoute;
