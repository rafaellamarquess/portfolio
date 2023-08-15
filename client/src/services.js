const API_URL = "http://localhost:8080"

export const getBio = () => {
    const responseBio = axios.get(`${API_URL}/show_bio`).then(response => response.data)
    return responseBio
}

export const getList = () => {
    const responseList = axios.get(`${API_URL}/show_lista_bio`).then (response => response.data)
    return responseList
}