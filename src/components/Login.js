import React from "react";
import { AuthService } from "../services/auth.service";

const service = new AuthService();
const Login = () => {

    return (<button onClick={async() => await service.login("admin@gmail.com","12345678")}>Hi</button>);
}
export { Login };