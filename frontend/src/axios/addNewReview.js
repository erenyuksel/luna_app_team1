import useApiRequest from "./useApiRequest";

export const addNewReview = async (formData) => {
    try {
        const response = await useApiRequest.post('/reviews/new/2/', formData, { // 2 is for try, will add {id} later
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error adding new review: ", error);
        throw error;
    }
};