import axios from "axios";

const API_URL = "http://localhost:3000/api/film";

const allFilms = async () => {
    let token = JSON.parse(localStorage.getItem("token"));
    const films = await axios.get(API_URL,
        {
            headers: {
                Authorization: `bearer ${token}`,
            }
        });
    return films.data;
};

const oneFilm = async (id) => {
    JSON.parse(localStorage.getItem("token"));
    const film = await axios.get(API_URL + `/${id}`);
    return film;
};

const favFilms = async () => {
    let token = JSON.parse(localStorage.getItem("token"));
    const favFilms = await axios.get(API_URL + '/favorites',
        {
            headers: {
                Authorization: `bearer ${token}`,
            }
        });

    return favFilms.data;
};

const addFavorite = async (filmId) => {
    let token = JSON.parse(localStorage.getItem("token"));
    const favFilm = await axios.post(API_URL + `/addFav/${filmId}`, {},
        {
            headers: {
                Authorization: `bearer ${token}`,
            }
        });

    return favFilm.data;
};

const removeFavorite = async (filmId) => {
    let token = JSON.parse(localStorage.getItem("token"));
    const favFilm = await axios.post(API_URL + `/removeFav/${filmId}`, {},
        {
            headers: {
                Authorization: `bearer ${token}`,
            }
        });

    return favFilm.data;
};


const filmService = {
    allFilms,
    oneFilm,
    favFilms,
    addFavorite,
    removeFavorite
}

export default filmService;