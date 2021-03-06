import React, { useRef } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import { useSnackbar } from "notistack";
import SearchAPI from "api/search";
import AppActions from "store/actions/app_actions";
import LanguageMenu from "./LanguageMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: 16,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
  searchRoot: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 500,
    marginRight: 16,
  },
  searchInput: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  searchIcon: {
    padding: 10,
  },
}));

const SearchAppBar = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const userQuery = useRef("");

  const submitUserQuery = (evt) => {
    evt.preventDefault();

    if (!userQuery.current) {
      enqueueSnackbar("Type something in search", { variant: "warning" });
      return;
    }

    loadSearchData(userQuery.current);
  };

  const handleSearchChange = (evt) => {
    userQuery.current = evt.target.value;
  };

  const loadSearchData = async (value) => {
    AppActions.setLoading(true);
    const response = await SearchAPI(value);
    AppActions.setLoading(false);

    console.log(response);

    if (!response.error) {
      if (response.data && !response.data.error) {
        AppActions.loadSearchData(response);
      } else {
        AppActions.loadSearchData({ type: "not-found" });
      }
    } else {
      if (response.error) {
        enqueueSnackbar(response.error.message, { variant: "error" });
      } else if (response.data.error) {
        enqueueSnackbar(response.data.error.message, { variant: "error" });
      }
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Search
          </Typography>
          <LanguageMenu />
          <Paper component="form" className={classes.searchRoot}>
            <IconButton
              type="submit"
              onClick={submitUserQuery}
              className={classes.searchIcon}
            >
              <SearchIcon />
            </IconButton>
            <InputBase
              onChange={handleSearchChange}
              className={classes.searchInput}
              placeholder="Type query & hit enter"
            />
          </Paper>
          <Button variant="contained" style={{ marginRight: 8 }}>
            <a
              href="https://quran-frontend-dot-islamicnet.appspot.com/"
              target="_blank"
            >
              Quran Website
            </a>
          </Button>
          <Button variant="contained">
            <a
              href="http://hadith-frontend-dot-islamicnet.appspot.com/"
              target="_blank"
            >
              Hadith Website
            </a>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default SearchAppBar;
