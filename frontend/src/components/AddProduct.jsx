import { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    description: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/products", product);
      setMessage("✅ Product added successfully!");
      setProduct({
        name: "",
        price: "",
        image: "",
        category: "",
        description: "",
      });
    } catch (err) {
      console.error(err);
      setMessage("❌ Error adding product.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-950 shadow-lg rounded-xl p-6 mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">🧵 Add New Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
          rows="3"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>

      {message && (
        <p className="text-center mt-4 font-semibold text-green-600">{message}</p>
      )}
    </div>
  );
};

export default AddProduct;
