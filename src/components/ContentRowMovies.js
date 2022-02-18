const ContentRowMovies = ({ rowMoviesContent }) => {
  return (
    <div className="row">
      {rowMoviesContent.map((rowMovie) => (
        <div className="col-md-4 mb-4">
          <div className={rowMovie.bordColor}>
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    {rowMovie.titulo}
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {rowMovie.cifra}
                  </div>
                </div>
                <div className="col-auto">
                  <i className={rowMovie.icon}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentRowMovies;
