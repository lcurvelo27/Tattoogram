import Axios from "../../node_modules/axios";

export const getArtistsByRole = (role) => {
    return Axios.get(`http://partner.tattoogrm.com/api/artist?role=${role}`).then(response => response.data)
} 

export const getAllUsers = () => {
    return Axios.get('http://partner.tattoogrm.com/api/users').then(response => response.data)
}

const getUserInfo = (username) => {
    return Axios.get(`http://partner.tattoogrm.com/api/user/${username}`).then(response => response.data)
}

const getUserImages = (username) => {
    return Axios.get(`http://partner.tattoogrm.com/api/images/${username}`).then(response => response.data)
}

const getUserImagesByID = (id) => {
    return Axios.get(`http://partner.tattoogrm.com/api/getImagesById/${id}`).then(response => response.data)
}

const getUserWorkInfo = (username) => {
    return Axios.get(`http://partner.tattoogrm.com/api/work/${username}`).then(response => response.data)
}
const getWorkInfoByID = (id) => {
    return Axios.get(`http://partner.tattoogrm.com/api/workInfo/${id}`).then(response => response.data)
}

export const getUserById = (id) => {
    return Axios.get(`http://partner.tattoogrm.com/api/getUserById/${id}`).then(response => response.data)
}

export const homeImageGrid = () => {
    return Axios.get('http://partner.tattoogrm.com/api/images').then(response => response.data)
}
export const loadContent = () => {
    let loads = 0
    var result = []
    function fetchData(){
        return Axios.get(`http://partner.tattoogrm.com/api/postsload?load=${loads}`).then(response => {
            console.log('response.data', response.data)
            result = [...result, ...response.data]
            loads += 20
            console.log('newResult', result)
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
