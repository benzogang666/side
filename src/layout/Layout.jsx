import "./Layout.css";

import Header from "../components/header/Header";
import { Outlet } from "react-router";
import Stamp from "../components/stamp/Stamp";

const Layout = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <div className="main">
          <Outlet />
        </div>
        <Stamp />
      </div>
    </>
  );
};

export default Layout;