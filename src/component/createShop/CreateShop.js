import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreateShop.css";

const CreateShop = () => {
  const [formData, setFormData] = useState({
    label: "",
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
    setFormData((prevData) => ({
      ...prevData,
      avatar: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.label || !formData.avatar) {
      setError("Please fill out all fields and upload an avatar.");
      return;
    }

    setLoading(true);
    setError("");

    const formPayload = new FormData();
    formPayload.append("label", formData.label);
    formPayload.append("avatar", formData.avatar);

    try {
      const response = await axios.post(
        "http://localhost:2022/api/admin/create-shop",
        formPayload,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (response.data.success) {
        alert("product added successfully!");
        navigate("/"); // Redirect to the blogs page after creation
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "An error occurred while creating the blog."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-blog-container">
      <h2>Add Product Into Shop</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group mb-3">
          <label htmlFor="label">label</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="label"
            value={formData.label}
            onChange={handleChange}
            placeholder="Enter product label"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="avatar">Avatar</label>
          <input
            type="file"
            className="form-control"
            id="avatar"
            name="avatar"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Creating..." : "Add product"}
        </button>
      </form>
    </div>
  );
};

export default CreateShop;
