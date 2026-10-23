import axios from "axios";

const apiCaller = async ({ url, method, data }) => {
    try {
        const response = await axios({
            url, method, data, withCredentials: true,
        })

        return response.data
    } catch (error) {
        throw error.response?.data || error
    }
}

export default apiCaller