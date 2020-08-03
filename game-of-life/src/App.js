import React from "react";
import Grid from "./components/Grid";
import "./index.css";
import Transition from "./components/Transition";
import Buttons from "./components/Buttons.js";
import Button from "@material-ui/core/Button";
import Cards from "./components/Cards";
import { glider, smallExploder, gliderGun, tumbler } from "./presets";

class App extends React.Component {
  constructor() {
    super();

    this.speed = 100;
    this.rows = 30;
    this.cols = 50;
    this.state = {
      lifecycles: 0,
      grid: Array(this.rows)
        .fill()
        .map(() => Array(this.cols).fill(0)),
    };
  }

  selectBox = (row, col) => {
    let gridCopy = arrayClone(this.state.grid);
    gridCopy[row][col] = !gridCopy[row][col];
    this.setState({
      grid: gridCopy,
    });
  };

  seed = () => {
    this.clearGrid();
    let gridCopy = arrayClone(this.state.grid);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (Math.floor(Math.random() * 5) === 1) {
          gridCopy[i][j] = 1;
        }
      }
    }
    this.setState({
      grid: gridCopy,
    });
  };

  clearGrid = () => {
    let gridCopy = arrayClone(this.state.grid);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        gridCopy[i][j] = 0;
      }
    }
    this.setState({
      lifecycles: 0,
      grid: gridCopy,
    });

    this.pauseButton();
  };

  setGlider = () => {
    this.setState({
      grid: glider,
    });
  };

  setTumbler = () => {
    this.setState({
      grid: tumbler,
    });
  };

  setExploder = () => {
    this.setState({
      grid: smallExploder,
    });
  };

  setGun = () => {
    this.setState({
      grid: gliderGun,
    });
  };

  fastButton = () => {
    if (this.speed !== 0) {
      this.speed -= 25;
    }
    this.playButton();
  };

  slowButton = () => {
    this.speed += 25;
    this.playButton();
  };

  resetSpeed = () => {
    this.speed = 100;
    this.playButton();
  };

  playButton = () => {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.runGame, this.speed);
  };

  pauseButton = () => {
    clearInterval(this.intervalId);
  };

  runGame = () => {
    let g = this.state.grid;
    let clone = arrayClone(this.state.grid);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let count = 0;
        if (i > 0) if (g[i - 1][j]) count++;
        if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
        if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
        if (j < this.cols - 1) if (g[i][j + 1]) count++;
        if (j > 0) if (g[i][j - 1]) count++;
        if (i < this.rows - 1) if (g[i + 1][j]) count++;
        if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
        if (i < this.rows - 1 && j < this.cols - 1)
          if (g[i + 1][j + 1]) count++;
        if (g[i][j] && (count < 2 || count > 3)) clone[i][j] = 0;
        if (!g[i][j] && count === 3) clone[i][j] = 1;
      }
    }
    this.setState({
      grid: clone,
      lifecycles: this.state.lifecycles + 1,
    });
  };
  // playButton, pauseButton, clearGrid, seed, fastButton, slowButton
  render() {
    return (
      <div>
        <h1>Flavor Town</h1>
        <Buttons
          playButton={this.playButton}
          pauseButton={this.pauseButton}
          clearGrid={this.clearGrid}
          seed={this.seed}
          fastButton={this.fastButton}
          slowButton={this.slowButton}
        />
        <div className="grid-div">
          <Grid
            rows={this.rows}
            cols={this.cols}
            speed={this.speed}
            grid={this.state.grid}
            selectBox={this.selectBox}
          />
          <Cards
            setGun={this.setGun}
            setExploder={this.setExploder}
            setGlider={this.setGlider}
            setTumbler={this.setTumbler}
          />
        </div>
        <Transition />
        <h3>Generations: {this.state.lifecycles}</h3>
        <h3>Current speed: {this.speed}ms</h3>
        <div className="button-div">
          <Button variant="outlined" color="primary" onClick={this.resetSpeed}>
            Reset speed
          </Button>
        </div>
      </div>
    );
  }
}

function arrayClone(arr) {
  return JSON.parse(JSON.stringify(arr));
}

export default App;
