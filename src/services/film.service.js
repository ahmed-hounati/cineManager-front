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
    const film = await axios.get(API_URL + `/${id}`, {
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


const addFilm = async (filmData) => {
    let token = JSON.parse(localStorage.getItem("token"));

    const formData = new FormData();
    formData.append("name", filmData.name);
    formData.append("description", filmData.description);
    formData.append("duration", filmData.duration);
    formData.append("status", filmData.status);
    formData.append("category", filmData.category);

    // Append files (poster and video) if they exist
    formData.append("poster", filmData.poster); // file input for the poster
    formData.append("video", filmData.video); // file input for the video

    try {
        const response = await axios.post(API_URL + `/create`, formData, {
            headers: {
                Authorization: `Bearer ${token}`, // Ensure 'Bearer' is capitalized
                "Content-Type": "multipart/form-data", // FormData requires this content type
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