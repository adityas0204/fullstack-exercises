import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data) 
}

const create = (contact) => { 
    const request = axios.post(baseUrl, contact)
    return request.then(response => response.data)
}

const remove = (id) => {
    const request = axios.delete(baseUrl + '/' + id)
    return request.then(response => response.data)
}

const update = (id, person) => {
    console.log(id)
    const request = axios.put(baseUrl + '/' + id, person)
    return request.then(response => response.data)
}

export default { getAll, create, remove, update }