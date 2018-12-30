import Axios from "../../node_modules/axios";

export const getHomePageInfo = () => {
    return Axios.get('https://partner.tattoogrm.com/api/getHomePageInfo', {withCredentials: true}).then(response => response.data)
}

export const getArtistsByRole = (role) => {
    return Axios.get(`https://partner.tattoogrm.com/api/artist?role=${role}`, {withCredentials: true}).then(response => response.data)
} 

export const getAllUsers = () => {
    return Axios.get('https://partner.tattoogrm.com/api/users', {withCredentials: true}).then(response => response.data)
}

const getUserInfo = (username) => {
    return Axios.get(`https://partner.tattoogrm.com/api/user/${username}`, {withCredentials: true}).then(response => response.data)
}

const getUserImages = (username) => {
    return Axios.get(`https://partner.tattoogrm.com/api/images/${username}`, {withCredentials: true}).then(response => response.data)
}

export const getUserImagesByID = (id) => {
    return Axios.get(`https://partner.tattoogrm.com/api/getImagesById/${id}`, {withCredentials: true}).then(response => response.data)
}

const getUserWorkInfo = (username) => {
    return Axios.get(`https://partner.tattoogrm.com/api/work/${username}`, {withCredentials: true}).then(response => response.data)
}
const getWorkInfoByID = (id) => {
    return Axios.get(`https://partner.tattoogrm.com/api/workInfo/${id}`, {withCredentials: true}).then(response => response.data)
}

export const getUserById = (id) => {
    return Axios.get(`https://partner.tattoogrm.com/api/getUserById/${id}`, {withCredentials: true}).then(response => response.data)
}

export const homeImageGrid = () => {
    return Axios.get('https://partner.tattoogrm.com/api/images', {withCredentials: true}).then(response => response.data)
}
export const loadContent = () => {
    let loads = 0
    var result = []
    function fetchData(){
        return Axios.get(`https://partner.tattoogrm.com/api/postsload?load=${loads}`, {withCredentials: true}).then(response => {
            result = [...result, ...response.data]
            loads += 20
            return result
        })
    }
    return fetchData
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
