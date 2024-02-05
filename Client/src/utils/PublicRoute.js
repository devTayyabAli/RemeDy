import React from 'react'
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

const PublicRoute = ({ children }) => {
    const isuser = useSelector((state) => state.Auth.isAuth);
    console.log('PublicRoute', isuser)
    if (isuser) {
        return <Navigate to="/dashBoard" />
    }
    return children

};

export default PublicRoute;