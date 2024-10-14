import axios from "axios";

const API_URL = "http://localhost:3000/api/";

const register = (name, email, password) => {
    return axios.post(API_URL + "signup", {
        name,
        email,
        password,
    });
};

const login = async (email, password) => {
    try {
        const response = await axios.post(API_URL + "auth/login", { email, password });
        if (response.data) {
            localStorage.setItem("token", JSON.stringify(response.data.token));
            localStorage.setItem("user", JSON.stringify(response.data.User));
        }
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || error.message || "Login failed";
    }
};
const update = async (email, name) => {
    let token = JSON.parse(localStorage.getItem("token"));
    try {
        const response = await axios.put(API_URL + "user/update", { email, name }, {
            headers: {
                Authorization: `bearer ${token}`,
            }
        });
        if (response.data) {
            localStorage.setItem("token", JSON.stringify(response.data.token));
            localStorage.setItem("user", JSON.stringify(response.data.User));
        }
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || error.message || "Login failed";
    }
};

const logout = async () => {
    let token = JSON.parse(localStorage.getItem("token"));
    try {
        const response = await axios.post(API_URL + "auth/logout", {}, {
            headers: {
                Authorization: `bearer ${token}`,
            }
        });
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        return response.data;
    } catch (error) {
        console.log(error)
    }
};

const forget = async (email) => {
    return axios.post(API_URL + 'auth/forget', { email });
};

const resetPassword = async (token, newPassword) => {

    return await axios.post(API_URL + `reset-password/${token}`, { newPassword });
};


const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
    forget,
    resetPassword,
    update
}

export default AuthService;