import { useState } from "react";


import { create } from "../../../lib/api";

const AreaForm = ({ setFormIsShown }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    if (response.status === 201) {
      setFormIsShown(false);
    }
    setIsSubmitting(false);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="img">Image:</label>
        <input type="text" id="img" name="img" onChange={handleChange} value={formData.img} />
        
        <label htmlFor="Area">Area:</label>
        <input type="text" id="Area" name="Area" onChange={handleChange} value={formData.Area} />

        <button type="submit">Add New Area</button>
      </form>
    </div>
  );
};
export default AreaForm;
