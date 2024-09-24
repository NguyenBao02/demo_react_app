import axios from "../utils/axiosCustimize";

const postCreateNewUser = (email, password, username, role, image) => {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('image', image);

    return axios.post('participant', data);
}

const getAllUsers = () => {
    return axios.get('participant/all');
}

const postUpdateUser = (id, username, role, image) => {
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('image', image);
    return axios.post('participant/update', data);
}

const postDeleteUser = (id) => {
    const data = new FormData();
    data.append('id', id);
    return axios.post('participant/delete', data);
}

const getUsersWithPaginate = (page, limit) => {
    return axios.get(`participant/paginate/${page}/${limit}`);
}

const postParticipantLogin = (email, password) => {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    return axios.post('auth/login', data);
}

const postParticipantRegister = (email, password, username) => {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    return axios.post('auth/register', data);
}

const getParticipantQuizz = () => {
    return axios.get('quizz/get-quizz-by-participant');
}

export {
    postCreateNewUser, getAllUsers, postUpdateUser, postDeleteUser, getUsersWithPaginate, postParticipantLogin, postParticipantRegister,
    getParticipantQuizz
};