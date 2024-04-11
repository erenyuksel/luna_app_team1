import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRestaurantsApi } from '../../axios/fetchRestaurants';

export const fetchRestaurants = createAsyncThunk(
    'restaurants/fetchRestaurants',
    async (_, { rejectWithValue }) => {
      try {
        const data = await fetchRestaurantsApi();
        return data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

const initialState = {
    restaurants: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
};

const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRestaurants.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRestaurants.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.restaurants = action.payload;
            })
            .addCase(fetchRestaurants.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ? action.payload.error : null;
            });
    },
});

export default restaurantsSlice.reducer;