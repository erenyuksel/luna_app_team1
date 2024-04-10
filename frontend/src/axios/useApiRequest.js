import axios from 'axios'
import { useState } from 'react'

const BASE_URL =
  window.location.hostname === 'localhost'
    ? 'http://localhost:8000/backend/api'
    : 'https://luna1.propulsion-learn.ch/backend/api'

const useApiRequest = axios.create({
  baseURL: BASE_URL,
})

export const getMyProfileData = async (token) => {
  return await useApiRequest.get('/users/me/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

// const useApiRequest = (options = { auth: true }) => {
//   const [data, setData] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)

//   axios.defaults.baseURL = 'http://localhost:8000/backend/api'

//   const sendRequest = (method, url, requestData, options = {}) => {
//     setLoading(true)
//     setData(null)
//     setError(null)

//     axios.defaults.headers.common['Content-Type'] = options.isFormData
//       ? 'multipart/form-data'
//       : 'application/json'

//     if (options.auth === true) {
//       axios.defaults.headers.common['Authorization'] =
//         'Bearer ' + localStorage.getItem('auth-token')
//     } else {
//       axios.defaults.headers.common['Authorization'] = undefined
//     }

//     return axios({
//       method,
//       url,
//       data: requestData,
//       headers: options.headers,
//       params: options.params,
//     })
//       .then((response) => {
//         if (response.status >= 200 && response.status < 300) {
//           if (Object.keys(response.data).length === 0) {
//             return 'success'
//           } else {
//             return response.data
//           }
//         }
//       })
//       .catch((error) => {
//         if (error.response) {
//           return Promise.reject(error.response.data)
//         } else {
//           return Promise.reject({ detail: 'An unexpected error occurred.' })
//         }
//       })
//       .finally(() => setLoading(false))
//   }

//   return { sendRequest, data, error, loading }
// }

export default useApiRequest
