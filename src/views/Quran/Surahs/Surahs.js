import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import config from "config";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    cursor: "pointer",
  },
  itemLTR: {
    padding: theme.spacing(1),
    fontSize: 20,
  },
  itemRTL: {
    padding: theme.spacing(1),
    direction: "rtl",
    fontFamily: "'Lateef', cursive",
    fontSize: 27,
  },
}));

const Surahs = ({ names }) => {
  const classes = useStyles();

  const goToSurah = (number) => {
    window.open(config.quran_website + number);
  };

  return (
    <div>
      {names.map((name) => (
        <Paper
          onClick={() => goToSurah(name.number)}
          key={name.english_name}
          className={classes.root}
          elevation={3}
        >
          <Grid container>
            <Grid className={classes.itemLTR} item xs={6}>
              ({name.number}) - {name.english_name}
            </Grid>
            <Grid className={classes.itemRTL} item xs={6}>
              ({name.number}) - {name.arabic_name}
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );
};

Surahs.propTypes = {
  names: PropTypes.array.isRequired,
};

export default Surahs;
