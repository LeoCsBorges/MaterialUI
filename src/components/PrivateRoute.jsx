import { Navigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    
    if (loading) {
        return <div>Carregando...</div>;
    }
    
    return user ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;