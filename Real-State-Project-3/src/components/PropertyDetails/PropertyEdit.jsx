import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { showProperty, updateProperty, getAllProperty } from "../../../lib/PropertyApi";
import PropertyForm from "../PropertyForm/propertyForm";
import { useNavigate } from "react-router"
import './PropertyEdit.css'

const PropertyDetails = ({ setFormIsShown }) => {

    const [property, setProperty] = useState(null)
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
    const navigate = useNavigate()

    const params = useParams();

    const getProperty = async () => {
        const foundProperty = await showProperty(params.propertyId)
        console.log(foundProperty)
        setProperty(foundProperty.data)
        setFormData(foundProperty)
        console.log(params.propertyId)

    }
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        console.log("HANDLE SUBMIT")
        event.preventDefault()
        console.log(params.propertyId)
        await updateProperty(params.propertyId, formData)
        console.log(formData)
        navigate('/property')
    }

    useEffect(() => {
        getProperty()
    }, [property])
    return (
        <div className="property-form-container">
            <h2 className="form-title">Edit property</h2>
            <form onSubmit={handleSubmit} className="property-form">

                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" onChange={handleChange} value={formData.title} className="form-input" />
                </div>

                <div className="form-group">
                    <label htmlFor="location">Location:</label>
                    <input type="text" name="location" id="location" onChange={handleChange} value={formData.location} className="form-input" />
                </div>


                <div className="form-group">
                    <label htmlFor="description">description:</label>
                    <input type="text" name="description" id="description" onChange={handleChange} value={formData.description} className="form-textarea" />
                </div>

                <div className="form-group">
                    <label htmlFor="price">price:</label>
                    <input type="number" name="price" id="price" onChange={handleChange} value={formData.price} className="form-input" />
                </div>
                 <div className="form-group">
                <label htmlFor="size">size:</label>
                <input type="number" name="size" id="size" onChange={handleChange} value={formData.size} className="form-input" />
                 </div>
                <div className="form-group">
                    <label htmlFor="img">Image:</label>
                    <input type="text" name="img" id="img" onChange={handleChange} value={formData.img} className="form-input" />
                </div>
                <div className="form-group">
                    <label htmlFor="bedrooms">bedrooms:</label>
                    <input type="number" name="bedrooms" id="bedrooms" onChange={handleChange} value={formData.bedrooms} className="form-input" />
                </div>
                <div className="form-group">
                    <label htmlFor="bathrooms">bathrooms:</label>
                    <input type="number" name="bathrooms" id="bathrooms" onChange={handleChange} value={formData.bathrooms} className="form-input" />
                </div>
                <div className="form-group">
                    <label htmlFor="createdAt">createdAt:</label>
                    <input type="date" name="createdAt" id="createdAt" onChange={handleChange} value={formData.createdAt} className="form-input" />
                    <button type="submit" className="submit-btn">Submit</button>
                </div>
            </form >
        </div>

    )
}

export default PropertyDetails