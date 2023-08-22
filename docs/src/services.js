const API_URL = "http://localhost:8080"

export const getBio = () => {
        const responseBio = axios.get(`${API_URL}/show_bio`).then(response => response.data)
        return responseBio
}

export const getList = () => {
    const responseList = axios.get(`${API_URL}/show_lista_bio`).then (response => response.data)
    return responseList
}

export const getApiGitHub = () => {
    const repositories = axios.get('https://api.github.com/users/rafaellamarquess/repos').then (response => response.data)
    return repositories
}