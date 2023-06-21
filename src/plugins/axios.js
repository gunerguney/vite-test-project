import Axios from "axios"

const baseDirectUrl = import.meta.env.VITE_APP_API_URL

const axios = Axios.create({
  baseURL: baseDirectUrl,
  withCredentials: true,
})

export default axios