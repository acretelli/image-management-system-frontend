export const baseUrl = "http://localhost:3003"

export const axiosConfig = (token) => {
    const headers =  {
        headers: {
            Authorization: token
        }
    }

    return headers
}