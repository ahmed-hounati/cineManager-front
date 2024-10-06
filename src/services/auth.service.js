import axios from "axios";

const API_URL = "http://localhost:3000/api/auth/";

const register = (name, email, password) => {
    return axios.post(API_URL + "signup", {
        name,
        email,
        password,
    });
};

const login = async (email, password) => {
    const response = await axios
        .post(API_URL + "login", {
            email,
            password,
        });
    if (response.data) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("user", JSON.stringify(response.data.User));
    }
    return response.data;
};

const logout = async () => {
    let token = JSON.parse(localStorage.getItem("token"));

    const response = await axios.post(API_URL + "logout", {}, {
        headers: {
            Authorization: `bearer ${token}`,
        }
    });
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    console.log(response.data);
    return response.data;
};

const forget = async (email) => {
    return axios.post(API_URL + 'forget', { email });
};

const resetPassword = async (token, newPassword) => {
    console.log(token);
    
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
    resetPassword
}

export default AuthService;