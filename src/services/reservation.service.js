import axios from "axios";

const API_URL = "http://localhost:3000/api/reservation";

const allReservations = async (user) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const reservations = await axios.get(API_URL, {
        headers: {
            Authorization: `bearer ${token}`
        }
    });
    return reservations.data;

};

const oneReservation = async (id) => {
    JSON.parse(localStorage.getItem("token"));
    const reservation = await axios.get(API_URL + `/${id}`);
    return reservation;
};

const createReservation = async (seanceId, places) => {
    let token = JSON.parse(localStorage.getItem("token"));
    await axios.post(API_URL + '/create', { seanceId, places }, {
        headers: {
            Authorization: `bearer ${token}`,
        }
    })
}

const updateReservation = async (id, seanceId, places) => {
    let token = JSON.parse(localStorage.getItem("token"));
    await axios.post(API_URL + `/update/${id}`, { seanceId, places }, {
        headers: {
            Authorization: `bearer ${token}`,
        }
    })
}

const deleteReservation = async (id) => {
    let token = JSON.parse(localStorage.getItem("token"));
    await axios.delete(API_URL + `/delete/${id}`, {}, {
        headers: {
            Authorization: `bearer ${token}`,
        }
    })
}

const reservationService = {
    allReservations,
    oneReservation,
    createReservation,
    updateReservation,
    deleteReservation
}

export default reservationService;