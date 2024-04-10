import useApiRequest from "./useApiRequest";

export const fetchRestaurantsApi = async () => {
  try {
    const response = await useApiRequest.get('/search/restaurants/');
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};