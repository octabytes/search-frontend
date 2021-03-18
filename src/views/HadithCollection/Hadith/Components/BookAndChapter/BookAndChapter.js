import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  chapter: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(2),
    backgroundColor: "aliceblue",
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

const BookAndChapter = ({ book, chapter }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.chapter} elevation={5}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography className={classes.englishFont}>
            {book.english}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.arabicFont}>{book.urdu}</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography className={classes.englishFont}>
            {chapter.english}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.arabicFont}>{chapter.urdu}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

BookAndChapter.propTypes = {
  chapter: PropTypes.object.isRequired,
  book: PropTypes.object.isRequired,
};

export default BookAndChapter;
