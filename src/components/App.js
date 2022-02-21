import ContentWrapper from "./ContentWrapper";
import SideBar from "./SideBar";
import "../components/assets/css/app.css";
import { Route, Routes } from "react-router-dom";
import GenresInDb from "./GenresInDb";
import LastMovieInDb from "./LastMovieInDb";
import ContentRowMovies from "./Chart";
import Search from "./Search";

function App() {
  return (
    <>
      <div id="wrapper">
        <SideBar />
        <Routes>
          <Route path="/" element={<ContentWrapper />} />
          <Route path="/genresdb" element={<GenresInDb />} />
          <Route path="/lastmovie" element={<LastMovieInDb />} />
          <Route path="/content" element={<ContentRowMovies />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<h1>Error 404, Not Found</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
