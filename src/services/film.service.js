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

const favFilms = async () => {
    let token = JSON.parse(localStorage.getItem("token"));
    const favFilms = await axios.get(API_URL + '/favorites',
        {
            headers: {
                Authorization: `bearer ${token}`,
            }
        });
        console.log(favFilms);
        
    return favFilms.data;
};


const filmService = {
    allFilms,
    oneFilm,
    favFilms
}

export default filmService;