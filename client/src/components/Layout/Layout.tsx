import React from "react";

import Header from "./Header/Header";

const Layout: React.FC = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
