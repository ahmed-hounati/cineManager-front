import axios from "axios";

const API_URL = "http://localhost:3000/api/seance";

const allSeances = async () => {
    JSON.parse(localStorage.getItem("token"));
    const seances = await axios.get(API_URL);
    return seances;

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