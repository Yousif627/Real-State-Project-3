import { useEffect, useState } from "react"
import {useParams} from "react-dom"
import { crateProperty, getAllProperty,updateProperty, showProperty} from "../../../lib/PropertyApi"


const PropertyForm = ({editProperty, setEditProperty, setFormIsShown, setProperty})=>{
const [formData, setFormData]= useState({
    area:"",
    title:"",
    location:"",
    description:"",
    price:"",
    size:"",
    img:"",
    bedrooms:"",
    bathrooms:"",
    createdAt:"",
})

const {areaId , propertyId} = useParams();

const handleChange = (event)=>{
    setFormData({...formData, [event.target.name]: event.target.vaue})
}
const handleSubmit = async (event)=>{
    event.preventDefault()
    if(editProperty){
        await updateProperty(editProperty._id, formData)
        setEditProperty(null)
    }
    else{
        await crateProperty(formData)
    }
    const Prop = await getAllProperty()
    setProperty (Prop)
    setFormIsShown(false)
}
useEffect(()=>{
    if(editProperty){
        setFormData(editProperty)
    }
},[])

return(
<div>
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

    <input type="submit" value="submit"/>
    </form>
    </div>
    )
}

export default PropertyForm