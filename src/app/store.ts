import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
  PreloadedState,
} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { cinemaWorldAPI } from "../services/cinemaWorld/cinemaWorld";
import { pokemonApi } from "../services/pokemon/pokemon";

const rootReducer = combineReducers({
  counter: counterReducer,
  [cinemaWorldAPI.reducerPath]: cinemaWorldAPI.reducer,
  // [pokemonApi.reducerPath]: pokemonApi.reducer,
});

// export const store = configureStore({
//   reducer: rootReducer,
//   // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
// });

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        cinemaWorldAPI.middleware
        // pokemonApi.middleware
      ),
    preloadedState,
  });
};

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
