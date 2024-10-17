import axios from "axios";

const API_URL = "http://localhost:3000/api/comment";

const getComments = async (filmId) => {
    let token = JSON.parse(localStorage.getItem("token"));
    const comments = await axios.get(API_URL + `/${filmId}`,
        {
            headers: {
                Authorization: `bearer ${token}`,
            }
        });
    return comments.data;
};

const addComment = async (id, text) => {
    let token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.post(API_URL + `/create`, {
        filmId: id,
        text: text,
    },
        {
            headers: {
                Authorization: `bearer ${token}`,
            }
        });

    return response.data;
};

const deleteComment = async (commentId) => {
    let token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.delete(API_URL + `/delete/${commentId}`,
        {
            headers: {
                Authorization: `bearer ${token}`,
            }
        });

    return response.data;
};

const updateComment = async (commentId, text) => {
    let token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.put(API_URL + `/update/${commentId}`, {
        text: text
    },
        {
            headers: {
                Authorization: `bearer ${token}`,
            }
        });

    return response.data;
};

const commentService = {
    getComments,
    deleteComment,
    addComment,
    updateComment
}

export default commentService;