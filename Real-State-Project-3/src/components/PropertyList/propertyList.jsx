import { useEffect, useState} from "react";
import { getAllProperty } from "../../../lib/PropertyApi";

const PropertyList = ({property, setProperty})=>{
   
    const getProperty = async ()=>{
        const propertys = await getAllProperty()
        setProperty(propertys)
        console.log(propertys)
    }
   
    useEffect(()=>{
        getProperty()
    },[])

    return(
        <>
            {property.length ? property.map((prop, index)=>{
                return (
                <div key={index}>
                  <p>{prop.title}</p>
                  <img src={prop.img}>{prop.img}</img>
                  <p>{prop.location}</p>
                  <p>{prop.description}</p>
                  <p>{prop.price}</p>
                  <p>{prop.size}</p>
                  <p>{prop.bedrooms}</p>
                  <p>{prop.bathrooms}</p>
                  <p>{prop.createdAt}</p>
                    </div>)
            }): <h1>Loading......</h1>}
            {}
        </>
    )
}


export default  PropertyList 