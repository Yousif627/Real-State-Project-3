import axios from "axios"

const baseUrl = import.meta.env.VITE_BACKEND_URL


const create = async (data) => {
    try {
        const url = `${baseUrl}/area/new`
        const response = await axios.post(url, data)
        return response
    } catch (error) {
        return error
    }
}

const getProperty = async (id) => {
    try {
        const url = `${baseUrl}/area/${id}`
        const response = await axios.get(url)
        return response
    } catch (error) {
        return error
    }
}

const updateArea = async (id) => {
    try {
        const url = `${baseUrl}/area/${id}`
        const response = await axios.put(url)
        return response
    } catch (error) {
        return error
    }
}


export {
    create,
    updateArea,
    getProperty
}