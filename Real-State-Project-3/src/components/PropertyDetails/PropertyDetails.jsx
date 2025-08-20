import { useEffect, useState } from "react";
import { useParams } from "react";
import { showProperty } from "../../../lib/PropertyApi";
import PropertyForm from "../PropertyForm/propertyForm";

const PropertyDetails = ({ property, setProperty }) => {
    const params = useParams();

    const getProperty = async (propertyId) => {
        const foundProperty = await showProperty(propertyId)
        setProperty(foundProperty)
    }
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }
    useEffect(() => {
        getProperty
    }, [])
    return (
        <>
            <form>
             <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" onChange={handleChange} value={formData.title} />

            <label htmlFor="location">Location:</label>
            <input type="text" name="location" id="location" onChange={handleChange} value={formData.location} />

            <label htmlFor="description">description:</label>
            <input type="text" name="description" id="description" onChange={handleChange} value={formData.description} />

            <label htmlFor="price">price:</label>
            <input type="number" name="price" id="price" onChange={handleChange} value={formData.price} />

            <label htmlFor="size">size:</label>
            <input type="number" name="size" id="size" onChange={handleChange} value={formData.size} />

            <label htmlFor="img">Image:</label>
            <input type="text" name="img" id="img" onChange={handleChange} value={formData.img} />

            <label htmlFor="bedrooms">bedrooms:</label>
            <input type="number" name="bedrooms" id="bedrooms" onChange={handleChange} value={formData.bedrooms} />

            <label htmlFor="bathrooms">bathrooms:</label>
            <input type="number" name="bathrooms" id="bathrooms" onChange={handleChange} value={formData.bathrooms} />

            <label htmlFor="createdAt">createdAt:</label>
            <input type="date" name="createdAt" id="createdAt" onChange={handleChange} value={formData.createdAt} />
        </form >
        </>

    )
}

export default PropertyDetails