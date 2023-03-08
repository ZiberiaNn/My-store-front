import React from "react";
import "./../styles/components/Login.css";
import MyStoreLogo from "./../styles/images/MyStoreLogo.png";
import { AuthService } from "../services/auth.service";
import { saveItemInLocal } from "../services/localStorage.service";

const Login = () => {
    const service = new AuthService();
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
            event.preventDefault(event.target.form[1].value);
            const {accessToken, refreshToken} = await service.login(email, password); // llamar a la función de autenticación
            saveItemInLocal("accessToken", accessToken);
            saveItemInLocal("refreshToken", refreshToken);
        } catch (error) {
            console.error(error);
            setLoginError(true);
        }
    }
    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt" data-tilt>
                        <img src={MyStoreLogo} alt="IMG" />
                    </div>

                    <form className="login100-form validate-form">
                        <span className="login100-form-title">
                            Login
                        </span>

                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <input className="input100" type="text" name="email" placeholder="Email" onChange={handleInputChange}/>
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <input className="input100" type="password" name="password" placeholder="Password" onChange={handleInputChange}/>
                        </div>

                        <p className="txt-error">{loginError && "Invalid login credentials. Please try again."}</p>

                        <div className="container-login100-form-btn">
                            <button type="submit" className="login100-form-btn" onClick={handleSubmit}>
                                Login
                            </button>
                        </div>
                        <div className="text-center p-t-12">
                            <span className="txt1">
                                Forgot
                            </span>
                            <a className="txt2" href="#">
                                Username / Password?
                            </a>
                        </div>
                        <div className="text-center p-t-136">
                            <a className="txt2" href="#">
                                Create your Account
                                <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export { Login };