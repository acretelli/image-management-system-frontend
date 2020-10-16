export const baseUrl = "http://ec2-3-92-144-78.compute-1.amazonaws.com:3003"

export const axiosConfig = (token) => {
    const headers =  {
        headers: {
            Authorization: token
        }
    }

    return headers
}