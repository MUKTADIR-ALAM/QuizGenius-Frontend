import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useLocation } from 'react-router';


const PrivateRoute = ({children}) => {

    const {user, loading }= useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <progress className="progress max-w-40"></progress>
    }


    if(user){
        return children
    }

    return <Navigate to='/sign-in' state={location?.pathname || '/'}></Navigate>
};

export default PrivateRoute;