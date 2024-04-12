import useApiRequest from "./useApiRequest";

export const addNewReview = async (restId, formData) => {
    const token = localStorage.getItem('token')
    // const token = localStorage.getItem('auth-token')

    try {
        const response = await useApiRequest.post(`/reviews/new/${restId}/`, formData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error adding new review: ", error);
        throw error;
    }
};