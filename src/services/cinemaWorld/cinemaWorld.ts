import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cinemaWorldAPI = createApi({
  // TODO: Move to env
  // Change to real URL
  baseQuery: fetchBaseQuery({
    baseUrl: "https://challenge.lexicondigital.com.au/api/",
    // prepareHeaders: (headers) => {
    //   // TODO: Move to env
    //   headers.set("x-api-key", "xxx");
    //   return headers;
    // },
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => `cinemaworld/movies`,
    }),
  }),
});

export const { useGetMoviesQuery } = cinemaWorldAPI;
