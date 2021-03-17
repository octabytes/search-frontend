import React from "react";
import SearchAppBar from "./Components/SearchAppBar";

const Main = (props) => {
  return (
    <div>
      <SearchAppBar />
      <main style={{ margin: 16 }}>{props.children}</main>
    </div>
  );
};

export default Main;
