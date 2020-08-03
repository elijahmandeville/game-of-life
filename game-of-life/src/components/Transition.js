import React from "react";
import "../index.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 6, 5),
  },
  headings: {
    paddingBottom: "9px",
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="button-div">
        <Button variant="contained" color="primary" onClick={handleOpen}>
          How it Works
        </Button>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 className={classes.headings} id="transition-modal-title">
              Rules
            </h2>
            <ul>
              <li id="transition-modal-description">
                Any live cell with two or three live neighbours survives.
              </li>
              <li id="transition-modal-description">
                Any dead cell with three live neighbours becomes a live cell.
              </li>
              <li id="transition-modal-description">
                All other live cells die in the next generation. Similarly, all
                other dead cells stay dead.
              </li>
            </ul>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
