import axios from 'axios';

class AuthService {
  async login(email, password) {
    const response = await axios.post("http://localhost:3000/api/v1/auth/login", {
      email: email,
      password: password,
    });
    const {accessToken, refreshToken} = response.data;
    console.log({accessToken, refreshToken});
  }
}

export { AuthService };