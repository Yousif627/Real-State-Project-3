import axios from "axios";
const origin = import.meta.env.VITE_BACKEND_URL


const getAllProperty = async()=>{
    try{
        const url = `${origin}/property`
        const response = await axios.get(url)
        return response.data
    }catch(error){
        console.log('Failed to get all property ')
    }
}

const crateProperty = async (data) =>{
    try{
        console.log('data is passed here from property form: ', data)
        const url = `${origin}/property/new`
        const response = await axios.post(url, data)
        return response
    }catch(error){
        console.log(error)
    }
}

const showProperty = async (propertyId)=>{
    try{
        const url = `${origin}/property/${propertyId}`
        const response = await axios.get(url)
        return response.data
    }
    catch(error){
        console.log('Failed to get by id ')
    }
}

const updateProperty = async(propertyId,data) =>{
    try{
        console.log("propertyId: ",propertyId)
        const url = `${origin}/property/${propertyId}`
        const response = await axios.put(url,data)
        return response.data
    }catch(error){
        console.log('Failed to update')
    }
}

const deleteProperty = async (id)=>{
    try{
        const url = `${origin}/property/${id}`
        const response = await axios.delete(url)
        return response.data
    }catch(error){
        console.log('Failed to delete property')
    }

}

export {crateProperty, deleteProperty, getAllProperty, updateProperty, showProperty}