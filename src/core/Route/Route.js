import React from "react";
import PropTypes from "prop-types";
import { Route as ReactRoute } from "react-router-dom";

const Route = (props) => {
  const { view: View, ...rest } = props;

  return (
    <ReactRoute
      {...rest}
      render={(...routeProps) => <View {...routeProps} />}
    />
  );
};

Route.propTypes = {
  view: PropTypes.element.isRequired,
};

export default Route;
