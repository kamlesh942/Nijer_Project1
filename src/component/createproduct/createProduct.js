import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./createProduct.css";

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    place: "",
    avatar: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setError("");
      setFormData((prevData) => ({
        ...prevData,
        avatar: file,
      }));
    } else {
      setError("Invalid file type. Only images are allowed.");
      setFormData((prevData) => ({ ...prevData, avatar: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.price ||
      !formData.place ||
      !formData.avatar
    ) {
      setError("Please fill out all fields and upload an avatar.");
      return;
    }

    setLoading(true);
    setError("");

    const formPayload = new FormData();
    formPayload.append("name", formData.name);
    formPayload.append("price", formData.price);
    formPayload.append("place", formData.place);
    formPayload.append("avatar", formData.avatar);

    try {
      const response = await axios.post(
        "http://localhost:2022/api/admin/create-product",
        formPayload,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (response.data.success) {
        alert("Product created successfully!");
        navigate("/shop");
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "An error occurred while creating the product."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-product-container">
      <h2>Create Product</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter product name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Product Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter product price"
          />
        </div>
        <div className="form-group">
          <label htmlFor="discount">Product place</label>
          <input
            type="text"
            id="discount"
            name="place"
            value={formData.place}
            onChange={handleChange}
            placeholder="Enter product discount"
          />
        </div>
        <div className="form-group">
          <label htmlFor="avatar">Product Image</label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Creating..." : "Create Product"}
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
