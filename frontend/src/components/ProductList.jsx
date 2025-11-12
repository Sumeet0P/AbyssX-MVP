import { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="bg-gray-950 rounded-xl shadow-md hover:scale-105 transition-transform duration-200"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-xl"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-500">{product.category}</p>
            <p className="text-xl font-bold mt-2">₹{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
