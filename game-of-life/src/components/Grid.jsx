import React from "react";
import "../index.css";

function Grid({ rows, cols, speed, grid, selectBox }) {
  const width = cols * 19;

  let rowsArr = [];

  let boxClass = "";

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let boxId = i + "_" + j;

      boxClass = grid[i][j] ? "alive" : "dead";
      rowsArr.push(
        <div
          className={boxClass}
          id={boxId}
          onClick={() => selectBox(i, j)}
        ></div>
      );
    }
  }

  return (
    <div className="grid" style={{ width: width }}>
      {rowsArr}
    </div>
  );
}

export default Grid;
