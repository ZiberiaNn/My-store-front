import axios from 'axios';

class OrderService {
  async login(email, password) {
    const response = await axios.post("http://localhost:3000/api/v1/auth/login", {
      email: email,
      password: password,
    });
    const {accessToken, refreshToken} = response.data;
    return ({accessToken, refreshToken});
  }
}

export { OrderService };