import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './Context/Context';

const PrivateRoute = ({children}) => {
    const {user}=useContext(AuthContext)


    
    if(user && user.uid){
        return children
    }

    return Navigate('/login')
};

export default PrivateRoute;