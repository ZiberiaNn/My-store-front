import axios from 'axios';

class ProductService {
    async getProducts() {
        const response = await axios.get("http://localhost:3000/api/v1/products");
        return response.data;
      }
}

export { ProductService };