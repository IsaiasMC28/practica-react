import { Link } from "react-router-dom";
import logo from "../components/assets/images/logo-DH.png";
import { Route, Routes } from "react-router-dom";
import GenresInDb from "./GenresInDb";
import LastMovieInDb from "./LastMovieInDb";
import ContentRowMovies from "./Chart";

const SideBar = () => {
  return (
    <>
      <Routes>
        <Route path="/" />
        <Route path="/generos" element={<GenresInDb />} />
        <Route path="/lastmovie" element={<LastMovieInDb />} />
        <Route path="/contenido" element={<ContentRowMovies />} />
        <Route path="*" element={<p>ERROR 404</p>} />
      </Routes>
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-100" src={logo} alt="Digital House" />
          </div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <Link to={"/"}>
              <span>Dashboard - DH movies</span>
            </Link>
          </a>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Actions</div>

        <li className="nav-item">
          <a className="nav-link collapsed" href="/">
            <i className="fas fa-fw fa-folder"></i>
            <Link to={"/generos"}>
              <span>Pages</span>
            </Link>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-chart-area"></i>
            <Link to={"/lastmovie"}>
              <span>Charts</span>
            </Link>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-table"></i>
            <Link to={"/contenido"}>
              <span>Tables</span>
            </Link>
          </a>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
    </>
  );
};

export default SideBar;
