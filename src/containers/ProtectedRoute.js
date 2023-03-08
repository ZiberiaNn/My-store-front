import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../utils/useAuth";
const ProtectedRoute = ({ children }) => {
    const {isLogged} = useContext(AuthContext);
    if (!isLogged) {
        return <Navigate to="/login" />
    }
    return children;
}
export {ProtectedRoute};