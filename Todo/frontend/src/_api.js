const BASE_URL = 'http://localhost:3000'
const apiEndpoint = {
  LOGIN: '/users/login',
  REGISTER: '/users/register',
  TODO: '/todos'
}

const getEndpoint = endpoint => `${BASE_URL}${endpoint}`

export default {
  apiEndpoint,
  getEndpoint
}
