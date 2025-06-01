import { Navigate } from "react-router";
import { useUser } from "../contexts/UserContext";

export const PrivateRoute = ({ children }) => {
    const { user } = useUser();
    
    if (!user) {
        return <Navigate to='/' replace />;
    }
    
    return children;
};

export default PrivateRoute;