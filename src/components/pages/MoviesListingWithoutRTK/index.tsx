import { useAppDispatch } from "../../../app/hooks";
import { fetchMoviesWithoutRTKAsync } from "./reducers";

export const MoviesListingWithoutRTK = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <h1>movies-without-rtk</h1>
      <button onClick={() => dispatch(fetchMoviesWithoutRTKAsync())}>
        click
      </button>
    </>
  );
};
