import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Newarrive.css";

const CreateNewProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
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
    if (!formData.title || !formData.avatar || !formData.description) {
      setError("Please fill out all fields and upload an avatar.");
      return;
    }

    setLoading(true);
    setError("");

    const formPayload = new FormData();
    formPayload.append("title", formData.title);
    formPayload.append("description", formData.description);
    formPayload.append("avatar", formData.avatar);

    try {
      const response = await axios.post(
        "http://localhost:2022/api/admin/new-product",
        formPayload,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (response.data.success) {
        alert("new latest product created successfully!");
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
      <h2>Create New Arrival Product</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group mb-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            placeholder="Enter  description"
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
          {loading ? "Creating..." : "Create Blog"}
        </button>
      </form>
    </div>
  );
};

export default CreateNewProduct;