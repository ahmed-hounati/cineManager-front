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
        console.log(response.data);
    }
    return response.data;
};

const logout = async () => {
    localStorage.removeItem("User");
    localStorage.removeItem("token");
    const response = await axios.post(API_URL + "logout");
    return response.data;
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("token"));
};

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
}

export default AuthService;