import React from "react";
import PropTypes from "prop-types";

const Status = ({ isSahih }) => {
  if (isSahih) {
    if ("language" === "urdu") {
      return <span>صحیح</span>;
    } else {
      return <span>Sahih</span>;
    }
  } else {
    if ("language" === "urdu") {
      return <span>ضعيف</span>;
    } else {
      return <span>Zaeaf</span>;
    }
  }
};

Status.propTypes = {
  isSahih: PropTypes.bool.isRequired,
};

export default Status;
