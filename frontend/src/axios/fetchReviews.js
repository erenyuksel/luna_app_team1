import useApiRequest from "./useApiRequest";

export const fetchReviewsApi = async () => {
    try {
        const response = await useApiRequest.get('/search/reviews/');
        return response.data;
    } catch (error) {
        console.error("Error fetching reviews:", error);
        throw error;
    }
};