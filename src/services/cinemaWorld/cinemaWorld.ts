import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cinemaWorldAPI = createApi({
  // TODO: Move to env
  // Change to real URL
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  tagTypes: [],
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (name: string) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetMoviesQuery } = cinemaWorldAPI;
