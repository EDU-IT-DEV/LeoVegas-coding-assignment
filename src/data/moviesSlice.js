import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovies } from '../service/moviesService';

export const fetchMovies = createAsyncThunk('fetch-movies', async ({ apiUrl, params }, { rejectWithValue }) => {
    try {
        const data = await getMovies(apiUrl, params);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        fetchStatus: '',
        hasMore: true,
        page: 0
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.fulfilled, (state, action) => {
                const { page, results, total_pages } = action.payload || {};
                state.movies = page === 1 ? results : [...state.movies, ...results];
                state.page = page;
                state.hasMore = page < total_pages;
                state.fetchStatus = 'success';
            })
            .addCase(fetchMovies.pending, (state) => {
                state.fetchStatus = 'loading';
            })
            .addCase(fetchMovies.rejected, (state) => {
                state.fetchStatus = 'error';
            });
    }
});

export default moviesSlice;