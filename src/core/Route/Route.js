import React from "react";
import PropTypes from "prop-types";
import { Route as ReactRoute } from "react-router-dom";
import MainLayout from "core/Layout/Main";

const Route = (props) => {
  const { view: View, ...rest } = props;

  return (
    <ReactRoute
      {...rest}
      render={(...routeProps) => (
        <MainLayout>
          <View {...routeProps} />
        </MainLayout>
      )}
    />
  );
};

Route.propTypes = {
  view: PropTypes.element.isRequired,
};

export default Route;
