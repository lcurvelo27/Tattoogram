import Axios from "../../node_modules/axios";

const getUserInfo = (username) => {
    return Axios.get(`http://localhost:3005/api/user/${username}`).then(response => response.data)
}

const getUserImages = (username) => {
    return Axios.get(`http://localhost:3005/api/images/${username}`).then(response => response.data)
}

const getUserWorkInfo = (username) => {
    return Axios.get(`http://localhost:3005/api/work/${username}`).then(response => response.data)
}

export const getImageView = (id) => {
    return Axios.get(`http://localhost:3005/api/imageView/${id}`).then(response => response.data)
}

export const homeImageGrid = () => {
    return Axios.get('http://localhost:3005/api/images').then(response => response.data)
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
