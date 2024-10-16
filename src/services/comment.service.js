import axios from "axios";

const API_URL = "http://localhost:3000/api/comment";

const getComments = async (filmId) => {
    console.log("ahmed");
    
    let token = JSON.parse(localStorage.getItem("token"));
    const comments = await axios.get(API_URL + `/${filmId}`,
        {
            headers: {
                Authorization: `bearer ${token}`,
            }
        });
    return comments.data;
};

const addComment = async () => {
    let token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.post(API_URL + `/create`, {},
        {
            headers: {
                Authorization: `bearer ${token}`,
            }
        });

    return response.data;
};

const removeComment = async (commentId) => {
    let token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.post(API_URL + `/remove/${commentId}`, {},
        {
            headers: {
                Authorization: `bearer ${token}`,
            }
        });

    return response.data;
};


const commentService = {
    getComments,
    removeComment,
    addComment
}

export default commentService;