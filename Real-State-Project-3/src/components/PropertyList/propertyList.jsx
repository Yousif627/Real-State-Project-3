import { useEffect } from "react";
import { getAllProperty, deleteProperty, updateProperty } from "../../../lib/PropertyApi";
import "./PropertyList.css"; 

const PropertyList = ({ property, setProperty }) => {

  const getProperty = async () => {
    const propertys = await getAllProperty();
    setProperty(propertys);
    console.log(propertys);
  };

  const removeProperty = async (propertyId) => {
    await deleteProperty(propertyId);
    getProperty();
  };

  const updatedProperty = async (propertyId) => {
    await updateProperty(propertyId);
  };

  useEffect(() => {
    getProperty();
  }, []);

  return (
    <div className="property-list">
      {property ? property.map((prop, index) => (
        <div className="property-card" key={index}>
          <img className="property-image" src={prop.img} alt={prop.title} />
          <div className="property-details">
            <h3 className="property-title">{prop.title}</h3>
            <p><strong>Location:</strong> {prop.location}</p>
            <p><strong>Description:</strong> {prop.description}</p>
            <p><strong>Price (BHD):</strong> {prop.price}</p>
            <p><strong>Size:</strong> {prop.size}</p>
            <p><strong>Bedrooms:</strong> {prop.bedrooms}</p>
            <p><strong>Bathrooms:</strong> {prop.bathrooms}</p>
            <p className="property-date">Published on: {new Date(prop.createdAt).toLocaleDateString()}</p>
          </div>
          <div className="property-actions">
            <button className="btn edit-btn" onClick={() => updatedProperty(prop._id)}>Edit</button>
            <button className="btn delete-btn" onClick={() => removeProperty(prop._id)}>Delete</button>
          </div>
        </div>
      )) : <h1>Loading...</h1>}
    </div>
  );
};

export default PropertyList;
