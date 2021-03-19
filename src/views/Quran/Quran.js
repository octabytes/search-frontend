import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Pagination from "./Ayah/Pagination";
import Ayah from "./Ayah";
import config from "config";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    cursor: "pointer",
    backgroundColor: "aliceblue",
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

const Quran = (props) => {
  const { data } = props;
  const classes = useStyles();
  const goToSurah = (number) => {
    window.open(config.quran_website + number);
  };

  return (
    <div>
      <Paper
        onClick={() => goToSurah(data.surah.number)}
        key={data.surah.english_name}
        className={classes.root}
        elevation={3}
      >
        <Grid container>
          <Grid className={classes.itemLTR} item xs={6}>
            ({data.surah.number}) - {data.surah.english_name}
          </Grid>
          <Grid className={classes.itemRTL} item xs={6}>
            ({data.surah.number}) - {data.surah.arabic_name}
          </Grid>
        </Grid>
      </Paper>

      {data.ayah && <Ayah ayah={data.ayah} />}

      {data.ayahs &&
        data.ayahs.map((ayah) => <Ayah key={ayah.id} ayah={ayah} />)}

      {data.ayahs && data.ayahs.length === 30 && (
        <Pagination surahNumber={data.surah.number} />
      )}
    </div>
  );
};

Quran.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Quran;
