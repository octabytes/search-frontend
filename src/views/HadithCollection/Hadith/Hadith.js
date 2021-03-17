import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Pagination from "./Components/Pagination";
import Chapter from "./Components/Chapter";
import Status from "./Components/Status";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  englishFont: {
    fontSize: 20,
  },

  arabicFont: {
    direction: "rtl",
    fontFamily: "'Lateef', cursive",
    fontSize: 27,
  },
}));

const Hadith = (props) => {
  const classes = useStyles();
  const fontClass =
    "language" === "english" ? classes.englishFont : classes.arabicFont;

  return (
    <div>
      {props.hadithList.map((hadith) => (
        <div key={hadith.id}>
          <Chapter chapter={hadith.chapter} />

          <Paper className={classes.container} elevation={3}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography className={fontClass}>
                  {/* {hadith.text[language]} */}
                  {hadith.text.english}
                </Typography>
                <br />
                <Typography variant="body2">
                  Status: <Status isSahih={hadith.is_sahih} />
                </Typography>
                <Typography variant="body2">
                  Hadith Number: {hadith.hadith_number}
                </Typography>
                {hadith.international_number && (
                  <Typography variant="body2">
                    International Number: {hadith.international_number}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={6}>
                <Typography className={classes.arabicFont}>
                  {hadith.text.arabic}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </div>
      ))}
      {props.hadithList.length === 30 && <Pagination />}
    </div>
  );
};

Hadith.propTypes = {
  hadithList: PropTypes.array.isRequired,
};

export default Hadith;
