import { useEffect, useState } from "react";
import { ProductService } from "../services/product.service";

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
            {products.map(product => (
                <p key={product.id}>{product.name}</p>
            ))}
        </div>
    );
};

export { Products };