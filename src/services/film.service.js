import axios from "axios";

const API_URL = "http://localhost:3000/api/film";

const allFilms = async () => {
    let token = JSON.parse(localStorage.getItem("token"));
    const films = await axios.get(API_URL, {},
        {
            headers: {
                Authorization: `bearer ${token}`,
            }
        });
    return films;

};

const oneFilm = async (id) => {
    JSON.parse(localStorage.getItem("token"));
    const film = await axios.get(API_URL + `/${id}`);
    return film;
};


const filmService = {
    allFilms,
    oneFilm
}

export default filmService;