import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import config from "config";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
    cursor: "pointer",
  },
  arabicFont: {
    direction: "rtl",
    fontFamily: "'Lateef', cursive",
    fontSize: 27,
  },
}));

const Books = (props) => {
  const classes = useStyles();

  const goToHadithBook = (number) => {
    window.open(
      `${config.hadith_website}collection/${props.collection}/book/${number}`
    );
  };

  return (
    <div>
      {props.bookList.map((book) => (
        <Paper
          className={classes.container}
          key={book.number}
          onClick={() => goToHadithBook(book.number)}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography>{book.english}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.arabicFont}>
                {book.urdu}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );
};

Books.propTypes = {
  bookList: PropTypes.array.isRequired,
  collection: PropTypes.string.isRequired,
};

export default Books;
