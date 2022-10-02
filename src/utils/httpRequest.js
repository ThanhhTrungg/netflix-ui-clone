import axios from "axios"

export const httpRequest = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
})

export const getAPI = async (path, options = {}) => {
    const response = await httpRequest.get(path, options)
    return response.data
}
