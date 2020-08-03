import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

function Buttons({
  playButton,
  pauseButton,
  clearGrid,
  seed,
  fastButton,
  slowButton,
}) {
  return (
    <nav>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={playButton}>Play</Button>
        <Button onClick={pauseButton}>Pause</Button>
        <Button onClick={clearGrid}>Clear</Button>
        <Button onClick={seed}>Seed</Button>
        <Button onClick={fastButton}>Faster</Button>
        <Button onClick={slowButton}>Slower</Button>
      </ButtonGroup>
    </nav>
  );
}

export default Buttons;
