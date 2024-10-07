import axios from "axios";

const API_URL = "http://localhost:3000/api/seance";

const allSeances = async () => {
    let token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;

};

const oneSeance = async (id) => {
    JSON.parse(localStorage.getItem("token"));
    const seance = await axios.get(API_URL + `/${id}`);
    return seance;
};

const SeanceService = {
    allSeances,
    oneSeance
}

export default SeanceService;