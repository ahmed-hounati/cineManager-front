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
    let token = JSON.parse(localStorage.getItem("token"));
    const film = await axios.get(`${API_URL}/${id}`, {
        headers: {
            Authorization: `bearer ${token}`,
        }
    });
    return film.data;
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

const getAverageRating = async (filmId) => {
    let token = JSON.parse(localStorage.getItem("token"));
    const rating = await axios.get(API_URL + `/average-rating/${filmId}`,
        {
            headers: {
                Authorization: `bearer ${token}`,
            }
        });

    return rating.data;
}


const addRating = async (filmId, newRating) => {
    let token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.post(API_URL + `/rate/${filmId}`, {
        rating: newRating
    }, {
        headers: {
            Authorization: `bearer ${token}`,
        }
    })

    return response.data;
}


const addFilm = async (data) => {
    // Create a FormData object
    const formData = new FormData();
    formData.append('poster', data.poster);
    formData.append('video', data.video);
    formData.append('name', data.name);
    formData.append('category', data.category);
    formData.append('description', data.description);
    formData.append('duration', data.duration);
    formData.append('status', data.status);

    // Retrieve token from local storage
    let token = JSON.parse(localStorage.getItem("token"));

    try {
        // Send the FormData directly in the axios request
        const response = await axios.post(API_URL + `/create`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error adding film:", error.response || error.message);
        throw error;
    }
};



const filmService = {
    allFilms,
    oneFilm,
    favFilms,
    addFavorite,
    removeFavorite,
    getAverageRating,
    addRating,
    addFilm
}

export default filmService;