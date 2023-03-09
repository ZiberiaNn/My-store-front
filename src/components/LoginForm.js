import React from "react";
import "./../styles/components/LoginForm.css";
import MyStoreLogo from "./../styles/images/MyStoreLogo.png";

const LoginForm = ({handleInputChange, handleSubmit, loginError}) => {
    return (
        <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
                <img src={MyStoreLogo} alt="IMG" />
            </div>

            <form className="login100-form validate-form">
                <span className="login100-form-title">
                    Login
                </span>

                <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                    <input className="input100" type="text" name="email" placeholder="Email" onChange={handleInputChange} />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Password is required">
                    <input className="input100" type="password" name="password" placeholder="Password" onChange={handleInputChange} />
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
    );
}
export { LoginForm };