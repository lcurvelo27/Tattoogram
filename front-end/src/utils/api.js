import Axios from "../../node_modules/axios";

export const getAllUsers = () => {
    return Axios.get('http://localhost:3005/api/users').then(response => response.data)
}

const getUserInfo = (username) => {
    return Axios.get(`http://localhost:3005/api/user/${username}`).then(response => response.data)
}

const getUserImages = (username) => {
    return Axios.get(`http://localhost:3005/api/images/${username}`).then(response => response.data)
}

const getUserImagesByID = (id) => {
    return Axios.get(`http://localhost:3005/api/getImagesById/${id}`).then(response => response.data)
}

const getUserWorkInfo = (username) => {
    return Axios.get(`http://localhost:3005/api/work/${username}`).then(response => response.data)
}
const getWorkInfoByID = (id) => {
    return Axios.get(`http://localhost:3005/api/workInfo/${id}`).then(response => response.data)
}

export const getUserById = (id) => {
    return Axios.get(`http://localhost:3005/api/getUserById/${id}`).then(response => response.data)
}

export const homeImageGrid = () => {
    return Axios.get('http://localhost:3005/api/images').then(response => response.data)
}

export const updateUserInfo = (user) => {
    return Axios.put('http://localhost:3005/api/userInfo', user)
}

export const updateWorkInfo = (work) => {
    return Axios.put('http://localhost:3005/api/workInfo', work)
}

export const getUserAllByID = (id) => {
    return Axios.all([getUserById(id), getUserImagesByID(id), getWorkInfoByID(id)])
        .then(Axios.spread((user, images, work) => {
            return {
                user: user,
                images: images,
                work: work
            }
        }))
}


export const getUserAll = (username) => {
    return Axios.all([getUserInfo(username), getUserImages(username), getUserWorkInfo(username)])
        .then(Axios.spread((info, images, work,) => {
            return {
                info: info,
                images: images,
                work: work
            }
    }))
}
