import axios from "axios";
import { useEffect, useRef, useState } from "react";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [url, setUrl] = useState(
    "http://www.omdbapi.com/?s=action&apikey=e17256f2"
  );

  useEffect(() => {
    axios.get(url).then((res) => {
      const data = res.data;
      const search = data.Search;
      setMovies(search);
    });
  }, [url]);

  const keyword = "PELÍCULA DEMO";
  let inputText = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const category = inputText.current.value;
    setUrl(`http://www.omdbapi.com/?s=${category}&apikey=e17256f2`);
  };

  return (
    <div className="container-fluid">
      {url !== "" ? (
        <>
          <div className="row my-4">
            <div className="col-12 col-md-6">
              {/* Buscador */}
              <form method="GET">
                <div className="form-group">
                  <label htmlFor="">Buscar por título:</label>
                  <input type="text" ref={inputText} className="form-control" />
                </div>
                <button className="btn btn-info" onClick={handleSubmit}>
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2>Películas para la palabra: {keyword}</h2>
            </div>
            {/* Listado de películas */}
            {movies.length > 0 &&
              movies.map((movie, i) => {
                return (
                  <div className="col-sm-6 col-md-3 my-4" key={i}>
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                          {movie.Title}
                        </h5>
                      </div>
                      <div className="card-body">
                        <div className="text-center">
                          <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            src={movie.Poster}
                            alt={movie.Title}
                            style={{
                              width: "90%",
                              height: "400px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <p>{movie.Year}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          {movies.length === 0 && (
            <div className="alert alert-warning text-center">
              No se encontraron películas
            </div>
          )}
        </>
      ) : (
        <div className="alert alert-danger text-center my-4 fs-2">
          Eyyyy... ¿PUSISTE TU APIKEY?
        </div>
      )}
    </div>
  );
};

export default Search;
