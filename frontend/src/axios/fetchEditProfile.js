import useApiRequest from './useApiRequest'

export const fetchEditProfile = async () => {
  try {
    const response = await useApiRequest.patch('/users/me/{id}/')
    return response.data
  } catch (error) {
    console.error('Error updating profile:', error)
    throw error
  }
}

export const fetchDeleteProfile = async () => {
  try {
    const response = await useApiRequest.delete('/users/me/{id}/')
    return response.data
  } catch (error) {
    console.error('Error deleting profile:', error)
    throw error
  }
}