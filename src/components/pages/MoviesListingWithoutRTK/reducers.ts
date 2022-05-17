import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const headers = {
  "x-api-key": "xxx",
};

export const fetchMoviesWithoutRTKAsync = createAsyncThunk(
  "moviesWithoutRTK/fetchMovies",
  async () => {
    const response = await fetch(
      "https://challenge.lexicondigital.com.au/api/cinemaworld/movies",
      { headers }
    );

    if (response) {
      const json = await response.json();
    }

    // The value we return becomes the `fulfilled` action payload
    return response.json();
  }
);

export const moviesWithoutRTKSlice = createSlice({
  name: "moviesWithoutRTK",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesWithoutRTKAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMoviesWithoutRTKAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = [];
      })
      .addCase(fetchMoviesWithoutRTKAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default moviesWithoutRTKSlice.reducer;
