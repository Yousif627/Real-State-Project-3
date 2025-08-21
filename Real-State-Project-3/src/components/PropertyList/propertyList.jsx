import { useEffect } from "react";
import { getAllProperty, deleteProperty, updateProperty , showProperty} from "../../../lib/PropertyApi";
import "./PropertyList.css"; 
import { Link } from "react-router";
import { useParams } from "react-router";

const PropertyList = ({ property, setProperty }) => {

    const { propertyId } = useParams(); 

  const getProperty = async () => {
    const propertys = await getAllProperty();
    setProperty(propertys);
  };

  const removeProperty = async (propertyId) => {
    await deleteProperty(propertyId);
    getProperty();
  };


  useEffect(() => {
    getProperty();
    const fetchProperty = async () => {
        const propertyData = await showProperty(propertyId);
        setProperty(propertyData);
    }
    fetchProperty();
  }, [propertyId]);

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
            <Link className="btn edit-btn" to={`/property/${prop._id}`}>Edit</Link>
            <button className="btn delete-btn" onClick={() => removeProperty(prop._id)}>Delete</button>
          </div>
        </div>
      )) : <h1>Loading...</h1>}


    </div>
  );
};

export default PropertyList;
