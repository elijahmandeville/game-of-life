import React from "react";
import "../index.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },

  title: {
    fontSize: 16,
  },

  pos: {
    marginBottom: 12,
  },
});

export default function PresetCards({
  setGun,
  setGlider,
  setTumbler,
  setExploder,
}) {
  const classes = useStyles();

  return (
    <div className="cards">
      <div className="cards1">
        <div className="card-div">
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textPrimary"
                gutterBottom
              >
                Glider
              </Typography>
              <Typography variant="body2" component="p">
                An orientation that flies across the grid
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={setGlider} size="medium">
                Add
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="card-div">
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textPrimary"
                gutterBottom
              >
                Glider Gun
              </Typography>
              <Typography variant="body2" component="p">
                An orientation that generates gliders
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={setGun} size="medium">
                Add
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
      <div className="cards1">
        <div className="card-div">
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textPrimary"
                gutterBottom
              >
                Tumbler
              </Typography>
              <Typography variant="body2" component="p">
                An orientation that infinitely "tumbles"
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={setTumbler} size="medium">
                Add
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="card-div">
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textPrimary"
                gutterBottom
              >
                Small Exploder
              </Typography>
              <Typography variant="body2" component="p">
                An orientation that "explodes"
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={setExploder} size="medium">
                Add
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}
