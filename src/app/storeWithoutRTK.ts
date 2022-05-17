import { configureStore } from "@reduxjs/toolkit";
import moviesWithoutRTKSlice from "../components/pages/MoviesListingWithoutRTK/reducers";
// import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    moviesWithRTK: moviesWithoutRTKSlice,
  },
  // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
});
