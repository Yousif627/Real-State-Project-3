import { useEffect, useState } from "react"
import { crateProperty, getAllProperty , updateProperty} from "../../../lib/PropertyApi"
import axios from "axios"
import { useNavigate } from "react-router"
import { useParams } from "react-router"
import "./PropertyForm.css"; 

const PropertyForm = ({ editProperty, setEditProperty, setFormIsShown, setProperty }) => {

  const [Areas, setAreas] = useState([]);
  const [errors, setErrors] = useState("");
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    area: "",
    title: "",
    location: "",
    description: "",
    price: "",
    size: "",
    img: "",
    bedrooms: "",
    bathrooms: "",
    createdAt: "",
  })

  async function fetchData() {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const res = await axios.get("http://localhost:3000/area", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAreas(res.data);
    } catch (err) {
      setErrors("Unauthorized or error fetching data");
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await crateProperty(formData)
    const Prop = await getAllProperty()
    setProperty(Prop)
    setFormIsShown(false)
    navigate('/property')
  }

  return (
    <div className="property-form-container">
      <h2 className="form-title">Add New Property</h2>
      <form onSubmit={handleSubmit} className="property-form">

        <div className="form-group">
          <label htmlFor="area">Area:</label>
          <select onChange={handleChange} name="area" className="form-input">
            <option value="">-- Select an Area --</option>
            {Areas.map((area) => (
              <option value={area._id} key={area._id}>{area.Area}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" id="title" onChange={handleChange} value={formData.title} className="form-input" />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input type="text" name="location" id="location" onChange={handleChange} value={formData.location} className="form-input" />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea name="description" id="description" onChange={handleChange} value={formData.description} className="form-textarea"></textarea>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="price">Price (BHD):</label>
            <input type="number" name="price" id="price" onChange={handleChange} value={formData.price} className="form-input" />
          </div>

          <div className="form-group">
            <label htmlFor="size">Size (m²):</label>
            <input type="number" name="size" id="size" onChange={handleChange} value={formData.size} className="form-input" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="img">Image URL:</label>
          <input type="text" name="img" id="img" onChange={handleChange} value={formData.img} className="form-input" />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="bedrooms">Bedrooms:</label>
            <input type="number" name="bedrooms" id="bedrooms" onChange={handleChange} value={formData.bedrooms} className="form-input" />
          </div>

          <div className="form-group">
            <label htmlFor="bathrooms">Bathrooms:</label>
            <input type="number" name="bathrooms" id="bathrooms" onChange={handleChange} value={formData.bathrooms} className="form-input" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="createdAt">Published Date:</label>
          <input type="date" name="createdAt" id="createdAt" onChange={handleChange} value={formData.createdAt} className="form-input" />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
      <p className="error-text">{errors}</p>
    </div>
  )
}

export default PropertyForm
