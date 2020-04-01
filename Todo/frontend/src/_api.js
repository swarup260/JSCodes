const BASE_URL = "http://localhost:3000";
const API_ENDPOINT  = {
    LOGIN : "/users/login",
    REGISTER : "/users/register",
    TODO : "/todos"
}

const getEndpoint = endpoint => `${BASE_URL}${endpoint}`

export default {
    API_ENDPOINT,
    endpoint
}