import { useEffect, useState } from "react";
import { ProductService } from "../services/product.service";
import "./../styles/components/ProductTable.scss";

const Products = () => {
  const productService = new ProductService();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await productService.getProducts();
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>PRODUCT LIST</h1>
      <table class="product-table">
        <tr>
          <th>ID</th>
          <th>Category</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {products.map((product) => (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.category.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      ))}  
      </table>
    </div>
  );
};

export { Products };
