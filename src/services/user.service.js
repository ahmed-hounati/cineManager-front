import axios from "axios";

const API_URL = "http://localhost:3000/api/users";

const getUsers = async () => {
    let token = JSON.parse(localStorage.getItem('token'))
    try {
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data
    } catch (error) {
        throw error.response?.data?.message || error.message || "Login failed";
    }
};

const UsersService = {
    getUsers
}

export default UsersService;