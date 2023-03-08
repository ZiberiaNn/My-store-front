import React, { useContext } from "react";
import "./../styles/containers/LoginForm.css";
import { AuthService } from "../services/auth.service";
import { saveItemInLocal } from "../services/localStorage.service";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";
import { AuthContext } from "../utils/useAuth";

const LoginContainer = () => {
    const service = new AuthService();
    const navigate = useNavigate();
    const { handleLogin } = useContext(AuthContext);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loginError, setLoginError] = React.useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const { accessToken, refreshToken } = await service.login(email, password); // llamar a la función de autenticación
            saveItemInLocal("accessToken", accessToken);
            saveItemInLocal("refreshToken", refreshToken);
            handleLogin();
            navigate('/my-orders');
        } catch (error) {
            console.error(error);
            setLoginError(true);
        }
    }
    return (
        <div className="limiter">
            <div className="container-login100">
                <LoginForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} loginError={loginError}></LoginForm>
            </div>
        </div>
    );
}
export { LoginContainer };