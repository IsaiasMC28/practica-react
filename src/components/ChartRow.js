import { Component } from "react";

const rowStyle = {
  width: "33%",
  border: "1px solid #000",
  padding: "8px",
};

class ChartRow extends Component {
  constructor({ rows }) {
    super();
    this.state = {
      moviesList: rows,
    };
  }
  render() {
    return (
      <>
        {this.state.moviesList.map((row) => (
          <tr>
            <td style={rowStyle}>{row.indbID}</td>
            <td style={rowStyle}>{row.title}</td>
            <td style={rowStyle}>{row.year}</td>
          </tr>
        ))}
      </>
    );
  }
}
export default ChartRow;
