import { useState } from "react";
import { useNavigate } from 'react-router'
import { create } from "../../../lib/api";
import "./AreaForm.css"; 

const AreaForm = ({ setFormIsShown }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    img: "",
    Area: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const response = await create(formData);
    navigate('/areas')
    if (response.status === 201) {
      setFormIsShown(false);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="area-form-container">
      <h2 className="form-title">Add New Area</h2>
      <form onSubmit={handleSubmit} className="area-form">

        <div className="form-group">
          <label htmlFor="img">Image URL:</label>
          <input type="text" id="img" name="img" onChange={handleChange} value={formData.img} className="form-input" />
        </div>

        <div className="form-group">
          <label htmlFor="Area">Area Name:</label>
          <input type="text" id="Area" name="Area" onChange={handleChange} value={formData.Area} className="form-input" />
        </div>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add New Area"}
        </button>

      </form>
    </div>
  );
};

export default AreaForm;
