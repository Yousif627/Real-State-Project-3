import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { showProperty , updateProperty , getAllProperty} from "../../../lib/PropertyApi";
import PropertyForm from "../PropertyForm/propertyForm";
import { useNavigate } from "react-router"

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
    await updateProperty(params.propertyId,formData)
    console.log(formData)
    navigate('/property')
  }

    useEffect(() => {
        getProperty()
    }, [property])
    return (
        <>
            <form onSubmit={handleSubmit}>
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
            <button type="submit" className="submit-btn">Submit</button>
        </form >
        </>

    )
}

export default PropertyDetails