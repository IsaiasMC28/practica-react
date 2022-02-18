import ChartRow from "./ChartRow";
import { Component } from "react";

//-------------------------------------------------------------------//
const tableStyle = {
  width: "100%",
  border: "1px solid #000",
  borderRadius: "8px",
};

const thStyle = {
  border: "1px solid #000",
  padding: "8px",
};
//-------------------------------------------------------------------//

class Chart extends Component {
  constructor() {
    super();
    this.state = {
      arrayPeliculas: [
        { title: "The Avengers", indbID: "Pelicula 1", year: "2012" },
        {
          title: "The Avengers Age of Ultron",
          indbID: "Pelicula 2",
          year: "2015",
        },
        {
          title: "The Avengers Infinity War",
          indbID: "Pelicula 2",
          year: "2018",
        },
        { title: "The Avengers End Game", indbID: "Pelicula 2", year: "2019" },
      ],
    };
  }

  render() {
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <table style={tableStyle}>
              <tr>
                <th style={thStyle}>id</th>
                <th style={thStyle}>Titulo</th>
                <th style={thStyle}>Año</th>
              </tr>
              <tbody>
                <ChartRow rows={this.state.arrayPeliculas} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Chart;
