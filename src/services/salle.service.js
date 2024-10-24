import axios from "axios";

const API_URL = "http://localhost:3000/api/salle";

const salle = async (id, seanceId) => {
    let token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.get(API_URL + `/${id}?seanceId=${seanceId}`, {
        headers: { Authorization: `bearer ${token}` }
    });
    return response.data;
};

const allSales = async () => {
    let token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.get(API_URL, {
        headers: { Authorization: `bearer ${token}` }
    });
    return response.data;
}

const SalleService = {
    salle,
    allSales
}

export default SalleService;