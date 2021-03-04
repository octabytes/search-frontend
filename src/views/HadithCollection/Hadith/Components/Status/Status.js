import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const Status = ({ isSahih }) => {
  if (isSahih) {
    if ("language" === "urdu") {
      return <Typography>صحیح</Typography>;
    } else {
      return <Typography>Sahih</Typography>;
    }
  } else {
    if ("language" === "urdu") {
      return <Typography>ضعيف</Typography>;
    } else {
      return <Typography>Zaeaf</Typography>;
    }
  }
};

Status.propTypes = {
  isSahih: PropTypes.bool.isRequired,
};

export default Status;
