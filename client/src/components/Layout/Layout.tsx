import React from "react";

import Header from "./Header/Header";

const Layout: React.FC = (props) => {
  return (
    <React.Fragment>
      <Header />
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
