import useApiRequest from "./useApiRequest";

export const fetchUsersApi = async () => {
    try {
        const response = await useApiRequest.get('/search/users/');
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};