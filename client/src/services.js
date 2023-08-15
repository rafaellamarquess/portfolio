const API_URL = "http://localhost:8080"

export const getBio = () => {
    const responseBio = axios.get(`${API_URL}/show_bio`).then(response => response.data)
    console.log(responseBio)
    return responseBio
}