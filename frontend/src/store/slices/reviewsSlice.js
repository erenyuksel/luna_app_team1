import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchReviewsApi, fetchReviewsByRestaurantId as fetchReviewsByRestaurantIdApi } from '../../axios/fetchReviews';

export const fetchReviews = createAsyncThunk(
    'reviews/fetchReviews',
    async (_, { rejectWithValue }) => {
        try {
            const data = await fetchReviewsApi();
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchReviewsByRestaurantId = createAsyncThunk(
    'reviews/fetchReviewsByRestaurantId',
    async (restId, { rejectWithValue }) => {
        try {
            const data = await fetchReviewsByRestaurantIdApi(restId); 
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const initialState = {
    reviews: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
};

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviews.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.reviews = action.payload;
            })
            .addCase(fetchReviews.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ? action.payload.error : null;
            })
            .addCase(fetchReviewsByRestaurantId.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchReviewsByRestaurantId.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.reviews = action.payload;
            })
            .addCase(fetchReviewsByRestaurantId.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ? action.payload.error : null;
            });
    },
});

export default reviewsSlice.reducer;