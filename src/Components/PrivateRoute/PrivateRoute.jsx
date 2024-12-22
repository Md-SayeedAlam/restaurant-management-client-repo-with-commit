import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {

    const location = useLocation()
    console.log(location)
    const {user,loading} = useContext(AuthContext)

    if(loading){
        return <div className='flex justify-center items-center h-[200px]'><span className="loading loading-spinner size-20  text-accent"></span></div>
    }

    if(user && user?.email) {return children}


    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivateRoute;