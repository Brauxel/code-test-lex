import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MoviesListing } from "./components/pages/MoviesListing";
import ReactAppExample from "./components/pages/ReactAppExample";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesListing />} />
        <Route path="/react-example" element={<ReactAppExample />} />
      </Routes>
    </BrowserRouter>
  );
};
