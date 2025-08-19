import { useEffect, useState } from "react";
import {useParams} from "react";
import { deleteProperty, updateProperty , showProperty } from "../../../lib/PropertyApi";
import PropertyForm from "../PropertyForm/propertyForm";

const PropertyDetails= ({property, setProperty})=>{
    const params = useParams();

    const getProperty =async(propertyId)=>{
        const foundProperty = await showProperty(propertyId)
        setProperty(foundProperty)
    }
     
    const removeProperty = async (propertyId)=>{
        await deleteProperty(propertyId)
        getProperty()
    }

    const updatedProperty = async (propertyId)=>{
        await updateProperty(propertyId)
        setProperty()
    }
    useEffect(()=>{

    },[])
    return(
        <>

        </>

    )
}

export default  PropertyDetails