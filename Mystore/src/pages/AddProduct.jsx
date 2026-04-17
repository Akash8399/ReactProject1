import React, { useState } from "react";
import "../styles/addproduct.css";
import { useProducts } from "../context/ProductContext";

export default function AddProduct() {
  const { fetchProducts } = useProducts();

  const initialState = {
    name: "",
    price: "",
    image: "",
    rating: "",
    description: "",
    category: ""
  };

  const [data, setData] = useState(initialState);

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  async function handleSubmit(e) {
    // e.preventDefault();

    if (!data.name || !data.price || !data.category) {
      alert("Please fill all fields");
      return;
    }

    const newProduct = {
      ...data,
      id: Date.now()
    };

    try {
      const res = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)
      });

      if (!res.ok) throw new Error("Error adding product");

      alert("Product Added ✅");

      fetchProducts(); // refresh UI

      setData(initialState);
    } catch (err) {
      console.log(err);
      alert("Something went wrong ❌");
    }
  }

  return (
    <div className="form-container">
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={data.name}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={data.price}
          onChange={handleChange}
        />

        <input
          type="url"
          name="image"
          placeholder="Image URL"
          value={data.image}
          onChange={handleChange}
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          value={data.description}
          onChange={handleChange}
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={data.rating}
          onChange={handleChange}
        />

        <select
          name="category"
          value={data.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Kids">Kids</option>
        </select>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}