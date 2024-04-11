import { useParams } from 'react-router-dom'
import useApiRequest from './useApiRequest'

export const fetchEditProfile = async (formData) => {
  let { user_id } = useParams();
  try {
    const response = await useApiRequest.patch(`/users/me/`, formData)
    return response.data
  } catch (error) {
    console.error('Error updating profile:', error)
    throw error
  }
}

export const fetchDeleteProfile = async () => {
  let {user_id} = useParams();
  try {
    const response = await useApiRequest.delete(`/users/me/`)
    return response.data
  } catch (error) {
    console.error('Error deleting profile:', error)
    throw error
  }
}