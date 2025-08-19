import axios from "axios"

const baseUrl = import.meta.env.VITE_BACKEND_URL


const create = async (data) => {
    try {
        const url = `${baseUrl}/new`
        const response = await axios.post(url, data)
        return response
    } catch (error) {
        return error
    }
}

const deleteArea = async (id) => {
    try {
        const url = `${baseUrl}/area/${id}`
        const response = await axios.delete(url)
        return response
    } catch (error) {
        return error
    }
}


export {
    create,
    deleteArea
}