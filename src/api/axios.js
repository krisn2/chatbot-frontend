import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API, || 'https://chatbot-backend-63qf.onrender.com/'
  withCredentials: true // IMPORTANT: backend uses cookie token
})

export default api
