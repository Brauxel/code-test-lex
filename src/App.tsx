import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MoviesListing } from "./components/pages/MoviesListing";
import { MoviesListingWithoutRTK } from "./components/pages/MoviesListingWithoutRTK";
import { NotFoundPage } from "./components/pages/NotFoundPage";
import { PokemonListing } from "./components/pages/PokemonListing";
import ReactAppExample from "./components/pages/ReactAppExample";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesListing />} />
        <Route
          path="/movies-without-rtk"
          element={<MoviesListingWithoutRTK />}
        />
        {/* <Route path="/pokemon" element={<PokemonListing />} /> */}
        {/* <Route path="/react-example" element={<ReactAppExample />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
