import React from "react";
import PropTypes from "prop-types";
import { Pagination } from "@material-ui/lab";
import Ayah from "./Components/Ayah";

const Quran = (props) => {
  return (
    <div>
      {props.ayahList.map((ayah) => (
        <Ayah ayah={ayah} />
      ))}
      <Pagination />
    </div>
  );
};

Quran.propTypes = {
  ayahList: PropTypes.array.isRequired,
};

export default Quran;
