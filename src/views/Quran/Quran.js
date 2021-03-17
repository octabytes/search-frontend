import React from "react";
import PropTypes from "prop-types";
import { Pagination } from "@material-ui/lab";
import Ayah from "./Components/Ayah";

const Quran = (props) => {
  return (
    <div>
      {props.ayahList.map((ayah) => (
        <Ayah key={ayah.id} ayah={ayah} />
      ))}

      {props.ayahList.length === 30 && <Pagination />}
    </div>
  );
};

Quran.propTypes = {
  ayahList: PropTypes.array.isRequired,
};

export default Quran;
