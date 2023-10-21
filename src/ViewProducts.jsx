import axios from "axios";
import React, { useEffect, useState } from "react";

export const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(null);

  console.log("products", products);

  useEffect(() => {
    try {
      axios.get(`http://localhost:8000/api/getAllProducts`).then(({ data }) => {
        setProducts(data.data);
      });
    } catch (error) {
      alert(error.message);
    }
  }, []);

  const addToCart = async (productId) => {
    try {
      const userId = "6533550e69cdbc02eec055d1";
      if (quantity === null) return alert("Please select quantity");
      const { data } = await axios.post(
        `http://localhost:8000/api/addTocart`,
        {
          productId,
          userId,
          quantity,
        }
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="m-5">
      <h2 className="font-semibold">Product List</h2>
      {products.map((product, index) => (
        <div className="border flex justify-between m-2 p-5">
          <span>Name: {product.name}</span>
          <span>Price: {product.price}</span>
          <span>Available Quantity: {product.availableQuantity}</span>
          <span>
            Select Quantity:{" "}
            <input
              className="border w-20"
              type="number"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </span>
          <button
            className="bg-blue-600 rounded-sm p-2 text-white"
            onClick={() => addToCart(product._id)}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};
