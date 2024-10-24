import axios from "axios";

const API_URL = "http://localhost:3000/api/seance";

const allSeances = async () => {
    let token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.get(API_URL, {
        headers: { Authorization: `bearer ${token}` }
    });
    return response.data;

};

const oneSeance = async (id) => {
    let token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.get(API_URL + `/${id}`, {
        headers: { Authorization: `bearer ${token}` }
    });
    return response.data;
};

const addSeance = async (data) => {
    let token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.post(API_URL + `/create`, data, {
        headers: { Authorization: `bearer ${token}` }
    });
    return response.data;
}

const SeanceService = {
    allSeances,
    oneSeance,
    addSeance
}

export default SeanceService;