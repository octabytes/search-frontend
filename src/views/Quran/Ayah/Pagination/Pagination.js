import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import config from "config";

const Pagination = (props) => {
  const goToNextPage = () => {
    window.open(
      `${config.quran_website}${props.surahNumber}?offset=${props.lastAyahNumber}`
    );
  };

  return (
    <div>
      <Button onClick={goToNextPage} endIcon={<ChevronRightIcon />}>
        Next
      </Button>
    </div>
  );
};

Pagination.propTypes = {
  surahNumber: PropTypes.number.isRequired,
  lastAyahNumber: PropTypes.number.isRequired,
};

export default Pagination;
