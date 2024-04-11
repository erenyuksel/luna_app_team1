import useApiRequest from "./useApiRequest";

export const fetchRestaurantsApi = async (restId) => {
  try {
    const endpoint = restId ? `/restaurants/${restId}` : '/search/restaurants/';
    const response = await useApiRequest.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};