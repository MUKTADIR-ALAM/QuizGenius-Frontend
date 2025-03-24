import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";


const PrivetRoute = ({children}) => {
    const {user} = useAuth();

    if(!user){
        return <Navigate to="/login" />
    }

    return children;
};

export default PrivetRoute;