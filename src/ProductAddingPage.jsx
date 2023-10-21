import axios from "axios";
import React, { useState } from "react";

const containerStyle = {
  maxWidth: "400px",
  margin: "0 auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  backgroundColor: "#fff",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const inputStyle = {
  width: "100%",
  marginBottom: "10px",
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#007BFF",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const ProductAddingPage = () => {
  const [formData, setFormData] = useState();


  const handleInputChange = (data) => {
    setFormData((pre) => ({ ...pre, ...data }));
  };

  const handleSubmit = async (e) => {
    try {
       const {data} = await  axios.post(`http://localhost:8000/api/addProduct`,formData)
       if(data.status)setFormData({
        name:'',price:'',quantity:''
       })
       console.log(data);
    } catch (error) {
        alert(error.message)
    }
  };

  return (
    <div style={containerStyle}>
      <h2>Add a New Product</h2>
      <label>
        Product Name:
        <input
          type="text"
          value={formData?.name}
          onChange={(e) => handleInputChange({ name: e.target.value })}
          style={inputStyle}
        />
      </label>
      <label>
        Product Price:
        <input
          type="number"
          value={formData?.price}
          onChange={(e) => handleInputChange({ price: e.target.value })}
          style={inputStyle}
        />
      </label>
      <label>
        Product Quntity:
        <input
          type="number"
          value={formData?.quantity}
          onChange={(e) => handleInputChange({ availableQuantity: e.target.value })}
          style={inputStyle}
        />
      </label>
      <button type="submit" style={buttonStyle} onClick={handleSubmit}>
        Add Product
      </button>
    </div>
  );
};

export default ProductAddingPage;
