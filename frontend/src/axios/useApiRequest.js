import axios from 'axios'
// import { useState } from 'react'

// const BASE_URL =
//   window.location.hostname === 'localhost'
//     ? 'http://localhost:8000/backend/api'
//     : 'https://luna1.propulsion-learn.ch/backend/api'

const useApiRequest = axios.create({
  // baseURL: BASE_URL,
  baseURL: 'https://luna1.propulsion-learn.ch/backend/api',
})

export const getMyProfileData = async (token) => {
  return await useApiRequest.get('/users/get/me/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}


export default useApiRequest
