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
    console.log(response.data);
    
    return response.data;
};

const SeanceService = {
    allSeances,
    oneSeance
}

export default SeanceService;